"use client"

import { useState } from "react";

const Page = () => {

    const [file, setFile] = useState()

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();

        data.set('file', file);
        const result = await fetch('api/upload', {
            method: "POST",
            body: data
        })
        console.log(result)
    }

    return (
        <div className="m-5">
            <h3 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Upload Image <span class="text-blue-600 dark:text-blue-500">the world's #1</span> CRM.</h3>
            <input
                type="file"
                name="file"
                onChange={(e) => setFile(e.target.files?.[0])}
            />
            <button onClick={onSubmit}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Upload</button>
        </div>
    )
}

export default Page