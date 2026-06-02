/*
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });


export { prisma };*/

/*import { PrismaClient } from '../generated/prisma/client';

const globalForPrisma = globalThis;

// @ts-ignore
const prisma = globalForPrisma.prisma || new PrismaClient();

// @ts-ignore
globalForPrisma.prisma = prisma;

export { prisma };*/
/*import { PrismaClient } from '../generated/prisma/client.js'
import {PrismaPg} from "@prisma/adapter-pg";

const prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
})*/
import { PrismaClient } from '../generated/prisma/client';

const globalForPrisma = globalThis;

// @ts-ignore
const prisma = globalForPrisma.prisma || new PrismaClient();

// @ts-ignore
globalForPrisma.prisma = prisma;

export default prisma;

