const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const fs = require('fs');

// Import the generated gRPC service and message classes
const { MediaService } = require('./server/proto/mediaservice_grpc_pb');
const { MediaUploadRequest, UploadResponse } = require('./server/proto/mediaservice_pb');

const server = new grpc.Server();

server.addService(MediaService.service, {
  UploadMedia: (call, callback) => {
    const { filename, content } = call.request;

    // Save the file to the server
    fs.writeFile(filename, content, 'binary', (err) => {
      if (err) {
        callback({
          code: grpc.status.INTERNAL,
          details: 'Error saving the file.',
        });
      } else {
        callback(null, new UploadResponse().setMessage('File uploaded successfully.'));
      }
    });
  },
});

server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error('Error binding server:', err);
  } else {
    console.log('Server running at http://127.0.0.1:' + port);
    server.start();
  }
});

