import { faker } from "@faker-js/faker";

export const mocks = {
  Int: () => faker.datatype.number(100),
  Float: () => faker.datatype.float({ min: 10, max: 100, precision: 0.001 }),
  String: () => faker.random.words(),
  Boolean: () => faker.datatype.boolean(),
};
