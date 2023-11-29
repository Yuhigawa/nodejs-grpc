const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const fs = require('fs');

const packageDefinition = protoLoader.loadSync('./proto/mediaservice.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const { MediaService } = grpc.loadPackageDefinition(packageDefinition);

const client = new MediaService('localhost:50051', grpc.credentials.createInsecure());

const filename = 'file.txt'; // Replace with the actual filename
const fileContent = fs.readFileSync(`./${filename}`);

const request = {
  filename,
  content: fileContent
}

client.UploadMedia(request, (error, response) => {
  if (!error) {
    console.log(response.message);
  } else {
    console.error('Error:', error.message);
  }
});

