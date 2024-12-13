import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient;
}   

export let db: PrismaClient

if (process.env.NODE_ENV === "production") {
  db = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  db = global.prisma
}