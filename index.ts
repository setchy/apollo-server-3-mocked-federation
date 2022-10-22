require("dotenv").config();

import { ApolloServer } from "apollo-server";
import { GatewayInterface } from "apollo-server-core";
import { ApolloGateway } from "@apollo/gateway";
import { addMocksToSchema } from "@graphql-tools/mock";
import { mocks } from "./mocks";

const realGateway = new ApolloGateway();

const gateway: GatewayInterface = {
  async load(options) {
    await realGateway.load(options);
    return {
      schema: null,
      executor: null,
    };
  },
  stop() {
    return realGateway.stop();
  },
  onSchemaLoadOrUpdate(callback) {
    return realGateway.onSchemaLoadOrUpdate((schemaContext) => {
      callback({
        ...schemaContext,
        apiSchema: addMocksToSchema({
          schema: schemaContext.apiSchema,
          mocks: mocks,
        }),
      });
    });
  },
};

const server = new ApolloServer({ gateway: gateway });

server.listen();

console.log(`🚀 Apollo Server 3 with managed federation`);
console.log(`🚀 Apollo Gateway now ready at http://localhost:4000/graphql`);
