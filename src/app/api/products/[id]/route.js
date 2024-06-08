import connectToDatabase from "@/lib/connection";
import { NextResponse } from "next/server"
import Product from "@/lib/model/product";

// ========================== Update product ==============================
export async function PUT(req, cont) {
   try {
      connectToDatabase();
      const Id = cont.params.id;

      const payload = await req.json();
      await Product.findOneAndUpdate({ _id: Id }, payload, { new: true })

      return NextResponse.json({ updatedProduct: payload });

   } catch (error) {
      console.log(error)
   }
}

// ====================== Get Product by Id ===========================
export async function GET(req, cont) {
   try {
      connectToDatabase();
      const Id = cont.params.id;

      const product = await Product.findById({ _id: Id })
      return NextResponse.json({ myProduct: product });

   } catch (error) {
      console.log(error)
   }
}
// ========================= Delete Product ===============================
export async function DELETE(req, cont) {
   try {
      connectToDatabase();
      const Id = cont.params.id;

      await Product.deleteOne({ _id: Id })
      return NextResponse.json({ Message:"Product Deleted" });


   } catch (error) {
      console.log(error)
   }
}