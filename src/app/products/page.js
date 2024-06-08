'use client';
import Link from 'next/link';;
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


const fetchData = async () => {
    try {
        let data = await fetch('http://localhost:3000/api/products');
        data = await data.json();
        return data.result;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

const formatDate = (dateString) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    };
    return new Date(dateString).toLocaleString(undefined, options);
}
const deleteProduct = async (id) => {
    try {
        await fetch(`http://localhost:3000/api/products/${id}`,{
            method:"DELETE"
        });
        alert("Product Deleted")
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

const Page = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const products = await fetchData();
            setData(products);
        }
        getData();
    }, []);

    return (
        <div className='container m-auto'>

            <Link href='/addproduct ' style={{ cursor: "pointer", color: "blue" }} className='m-5 '>Add Product</Link>
            <h1 className="m-2 p-5">Product List</h1>



            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Title</th>
                            <th scope="col" className="px-6 py-3">Company</th>
                            <th scope="col" className="px-6 py-3">Category</th>
                            <th scope="col" className="px-6 py-3">Added Date</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => (
                                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.title}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.company}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.category}
                                    </td>
                                    <td className="px-6 py-4">
                                        {formatDate(item.dateAdded)}
                                    </td>
                                    <td className="px-6 py-4">
                                        $ {item.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link href={`/products/${item._id}`}> Edit</Link>
                                        <button onClick={()=>{deleteProduct(item._id)}} className='px-3 mx-1 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'> Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Page;
