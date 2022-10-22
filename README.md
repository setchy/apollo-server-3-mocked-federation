# Apollo Server 3 Mocked Federation

This repository contains a example of how to mock a managed federation Supergraph schema with [apollo-gateway](https://github.com/apollographql/federation) powered by [apollo-server](https://github.com/apollographql/apollo-server/) version 3.x.

_Note: Since we are using managed federation, the mocked schema is the Supergraph schema from your Apollo Studio Schema Registry._

## Assumptions

- You already have an Apollo Studio organization / account
- At least one `subgraph` has been published to the schema registry for the below mentioned `APOLLO_KEY` and `APOLLO_GRAPH_REF` pair

## Getting started

1. `cp .env.template .env`
1. Edit `.env` and set a valid `APOLLO_KEY` and `APOLLO_GRAPH_REF` pair
1. Run `npm install && npm run dev`
