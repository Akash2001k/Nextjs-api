import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>Next js APIs</h1>
      <Link href='/addproduct'>Add Product</Link><br/>
      <Link href='/products'>Product List</Link>
    </div>
  );
}
