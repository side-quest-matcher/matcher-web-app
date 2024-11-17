"use server"
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {
    const { token, username } = await request.json()

    // Define the path to the text file
    const filePath = path.join(process.cwd(), 'tokens.txt')

    // Append the token to the file
    fs.appendFileSync(filePath, token + "--" + username + '\n')

    return NextResponse.json({ message: 'Token appended successfully' })
}
