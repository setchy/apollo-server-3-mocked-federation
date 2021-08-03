require("dotenv").config();

import { ApolloServer } from "apollo-server";
import { GatewayInterface } from "apollo-server-core";
import { ApolloGateway } from "@apollo/gateway";
import { addMocksToSchema } from "@graphql-tools/mock";

const mocks = {
  Int: () => 808,
  Float: () => 22.1,
  String: () => "Mocked String",
};

const realGateway = new ApolloGateway();

const gateway: GatewayInterface = {
  async load(options) {
    const { schema } = await realGateway.load(options);
    return {
      schema: addMocksToSchema({ schema, mocks }),
      executor: null,
    };
  },
  stop() {
    return realGateway.stop();
  },
  onSchemaLoadOrUpdate(callback) {
    return realGateway.onSchemaLoadOrUpdate(callback);
  },
};

const server = new ApolloServer({ gateway: gateway });

server.listen();

console.log(`🚀 Apollo Server 3 with managed federation`);
console.log(`🚀 Apollo Gateway now ready at http://localhost:4000/graphql`);
