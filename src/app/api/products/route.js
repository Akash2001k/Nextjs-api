import connectToDatabase from "@/lib/connection";
import Product from "@/lib/model/product";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDatabase();
        const data = await Product.find();

        // console.log(data);
        return NextResponse.json({ result: data })

    } catch (error) {
        console.log(error)
    }
}

export async function POST(req) {
    try {
        await connectToDatabase();

        const payload = await req.json();

        const existingProduct = await Product.findOne({
            title: payload.title
        });

        if (existingProduct) {
            return NextResponse.json({message:"Product already exists"},{status: 409});
        }
        const product = new Product(payload);
        const data = await product.save();

        return NextResponse.json(data);

    } catch (error) {
        console.log(error)

    }
}
