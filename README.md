An example of mocking a mangaged federation `apollo-gateway` powered by apollo server 3.x.

Since it is a managed federation gateway, the mocked schema is the supergraph from Apollos Schema Registry

## Assumptions

- You already have an Apollo Studio organization / account
- At least one `subgraph` has been published to the schema registry for the below mentioned has been published for the `APOLLO_KEY` and `APOLLO_GRAPH_REF` pair

## Getting started

1. `cp .env.template .env`
1. Edit `.env` and set a valid `APOLLO_KEY` and `APOLLO_GRAPH_REF` pair
1. Run `npm install && npm run dev`
