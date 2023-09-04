// var bcrypt = require("bcryptjs");
import connect from "@/db/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect();

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();

    const email = reqBody?.email;
    const password = reqBody?.password;
    const username = reqBody?.username;

    // Check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }
    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(password, salt);

    const newUser = await new User({
      username,
      email,
      password: hasedPassword,
    });
    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    // return new NextResponse("Database Connection error", { status: 500 });
    return NextResponse.json({ error: "Database Connection error" }, { status: 500 });
  }
};
