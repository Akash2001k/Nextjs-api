import Link from "next/link";


export default function Home() {
  return (
    <div className="m-5">
      <h1 style={{ fontSize: "40px" }}>Next js APIs</h1>
      <div style={{marginTop:"15px"}}>
        <Link href='/addproduct' style={{ fontSize: "22px", color: "blue" }}>Add Product</Link><br />
        <Link href='/products' style={{ fontSize: "22px", color: "blue" }}>Product List</Link><br />
        <Link href='/rtk' style={{ fontSize: "22px", color: "blue" }}>Redux Toolkit Concept</Link>
      </div>
    </div>
  );
}
