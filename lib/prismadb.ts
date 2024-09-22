import { PrismaClient } from "@prisma/Client";

let client: PrismaClient;

if (process.env.NODE_ENV === "production") {
  client = new PrismaClient();
} else {
  const globalWithPrisma = global as typeof globalThis & {
    client: PrismaClient;
  };
  if (!globalWithPrisma.client) {
    globalWithPrisma.client = new PrismaClient();
  }
  client = globalWithPrisma.client;
}
export default client;
