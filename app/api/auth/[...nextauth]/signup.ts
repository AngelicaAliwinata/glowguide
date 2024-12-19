
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    console.log("Request Body:", req.body); // Log incoming request
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      console.log("Validation Failed");
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      // Example Prisma logic
      const newUser = await prisma.user.create({
        data: { username, email, password },
      });
      res.status(201).json({ message: "User created successfully!", user: newUser });
    } catch (error) {
      console.error("Prisma Error:", error);
      return res.status(400).json({ message: "Database error or duplicate user" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
