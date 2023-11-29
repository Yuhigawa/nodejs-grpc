// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_mediaservice_pb = require('../proto/mediaservice_pb.js');

function serialize_MediaRequest(arg) {
  if (!(arg instanceof proto_mediaservice_pb.MediaRequest)) {
    throw new Error('Expected argument of type MediaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MediaRequest(buffer_arg) {
  return proto_mediaservice_pb.MediaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UploadResponse(arg) {
  if (!(arg instanceof proto_mediaservice_pb.UploadResponse)) {
    throw new Error('Expected argument of type UploadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UploadResponse(buffer_arg) {
  return proto_mediaservice_pb.UploadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FileServiceService = exports.FileServiceService = {
  uploadMedia: {
    path: '/FileService/UploadMedia',
    requestStream: false,
    responseStream: false,
    requestType: proto_mediaservice_pb.MediaRequest,
    responseType: proto_mediaservice_pb.UploadResponse,
    requestSerialize: serialize_MediaRequest,
    requestDeserialize: deserialize_MediaRequest,
    responseSerialize: serialize_UploadResponse,
    responseDeserialize: deserialize_UploadResponse,
  },
};

exports.FileServiceClient = grpc.makeGenericClientConstructor(FileServiceService);
