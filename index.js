const fetch = require('node-fetch');
const { Binding} = require('graphql-binding');
const { HttpLink } = require('apollo-link-http');
const { makeRemoteExecutableSchema } = require('graphql-tools');
const fs = require('fs');

const graphqlEndpoint = 'http://tanmai-graphql2.herokuapp.com/v1alpha1/graphql';

class HasuraLink extends HttpLink {
  constructor() {
    super({
      uri: graphqlEndpoint,
      fetch,
    })
  }
}

class HasuraBinding extends Binding {
  constructor() {
    const schema = makeRemoteExecutableSchema({
      schema: fs.readFileSync(__dirname + '/schema.graphql', 'utf-8'),
      link: new HasuraLink()
    })
    super({ schema })
  }
}

module.exports = HasuraBinding;
