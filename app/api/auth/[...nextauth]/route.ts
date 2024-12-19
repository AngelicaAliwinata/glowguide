import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, username, email, password } = body;

    if (!action) {
      return NextResponse.json({ message: "Action is required" }, { status: 400 });
    }

    if (action === "register") {
      if (!username || !email || !password) {
        return NextResponse.json(
          { message: "All fields are required for registration" },
          { status: 400 }
        );
      }

      // Check if user already exists
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return NextResponse.json(
          { message: "User with this email already exists" },
          { status: 400 }
        );
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const newUser = await prisma.user.create({
        data: { username, email, password: hashedPassword },
      });

      return NextResponse.json(
        { message: "User registered successfully!", user: newUser },
        { status: 201 }
      );
    } else if (action === "login") {
      if (!email || !password) {
        return NextResponse.json(
          { message: "Email and password are required for login" },
          { status: 400 }
        );
      }

      // Find user by email
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return NextResponse.json(
          { message: "Invalid email or password" },
          { status: 401 }
        );
      }

      // Compare password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return NextResponse.json(
          { message: "Invalid email or password" },
          { status: 401 }
        );
      }

      // Generate JWT
      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
        expiresIn: "7d",
      });

      return NextResponse.json(
        { message: "Login successful!", token },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Invalid action. Use 'register' or 'login'." },
        { status: 400 }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
