# Generate `graphql-bindings` from Hasura GraphQL Engine APIs

This repo shows how to generate [graphql-bindings](https://github.com/graphql-binding/graphql-binding) for Hasura GraphQL Engine generated APIs.

## Config

1. Clone the repo and `cd` into it.

```bash
$ git clone https://github.com/hasura/generate-graphql-bindings && cd generate-graphql-bindings
```

2. Place your GraphQL schema in the root directory. To generate your GraphQL schema, you can run the following two commands from the root directory:

```bash
$ npm install -g get-graphql-schema
$ get-graphql-schema GRAPHQL_URL > schema.graphql

# replace GRAPHQL_URL with your GraphQL URL such as `https://test.herokuapp.com/v1alpha1/graphql`
```

3. Set your GraphQL Engine URL in `index.js` as:

```js
// replace 'http://tanmai .....' with your GraphQL engine URL
const graphqlEndpoint = 'http://tanmai-graphql2.herokuapp.com/v1alpha1/graphql';
```

## Usage

To know about using GraphQL bindings, [read the docs](https://oss.prisma.io/content/graphql-binding/01-overview).
