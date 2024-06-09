import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises';

export async function POST(req) {
    try {
        const data = await req.formData();
        const file = data.get('file');

        if (!file) {
            return NextResponse.json({ message: "No image found" });
        }

        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);

        const path = `./public/${file.name}`;
        await writeFile(path, buffer);

        return NextResponse.json({ message: "File uploaded" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "An error occurred", error: error.message });
    }
}
