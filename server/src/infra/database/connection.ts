import { PrismaClient } from "@prisma/client";

const DbConnection = new PrismaClient();

export { DbConnection };
