// var bcrypt = require("bcryptjs");
import connect from "@/db/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

connect();

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const email = reqBody?.email;
    const password = reqBody?.password;

    // Get the user
    const user = User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User don't exists. Please sign up first" }, { status: 400 });
    }
    // Check the password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Password not valid" }, { status: 400 });
    }
    // Create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" });

    const response = NextResponse.json({ message: "Token created", success: "true" });
    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: "Database Connection error" }, { status: 500 });
  }
};
