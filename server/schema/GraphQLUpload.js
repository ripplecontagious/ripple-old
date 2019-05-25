'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLUpload = undefined;

var _graphql = require('graphql');

const GraphQLUpload = exports.GraphQLUpload = new _graphql.GraphQLScalarType({
  name: 'Upload',
  description: 'The `Upload` scalar type represents a file upload promise that resolves ' + 'an object containing `stream`, `filename`, `mimetype` and `encoding`.',
  parseValue: value => value,
  parseLiteral() {
    throw new Error('Upload scalar literal unsupported');
  },
  serialize() {
    throw new Error('Upload scalar serialization unsupported');
  }
});
//# sourceMappingURL=GraphQLUpload.js.map