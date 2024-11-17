"use server"
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
    // Define the path to the text file
    const filePath = path.join(process.cwd(), 'tokens.txt')

    // Read the tokens from the file
    const tokens = fs.readFileSync(filePath, 'utf-8').split('\n').filter(Boolean); // Split by new line and filter out empty lines

    return NextResponse.json(tokens);
}
