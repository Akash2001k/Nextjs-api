"use client";
import { useEffect, useState } from 'react';

const Page = ({params}) => {

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    company: '',
    category: '',
  });

  const Id = params.updateproduct

  const getProductDetails = async () =>{
      try {
          let data = await fetch(`http://localhost:3000/api/products/${Id}`);
          data = await data.json();
          return data.myProduct;
      } catch (error) {
          console.error('Error fetching data:', error);
          return [];
      }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(()=>{
    const fetchData = async () => {
        const product = await getProductDetails();
        if (product) {
          setFormData({
            title: product.title,
            price: product.price,
            company: product.company,
            category: product.category,
          });
        }
      };
      fetchData();
  },[])

  const updateProduct = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${Id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Product Updated");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while updating the product.");
    }
  };

  return (
    <div style={{width:"300px"}} className='container m-auto mt-5'>
      <h1 className='text-lg'>Update Product</h1>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="block w-full p-3 mt-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="block w-full p-3 mt-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
        className="block w-full p-3 mt-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="block w-full p-3 mt-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <br />
      <button className="w-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" 
      onClick={updateProduct} 
      >Update Product</button>
      
    </div>
  );
};

export default Page;
