import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ProductType from './Type'

type Props = {
    products: ProductType[];
    onRemove: (id:string)=>void;
}

const Index = ({products,onRemove}:Props) => {
    
  return (
<div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex flex-col items-center">
        <Link to="/products/add" className='my-5'>Thêm</Link>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                ID
                </th>
                <th scope="col" className="px-6 py-3">
                Name
                </th>
                <th scope="col" className="px-6 py-3">
                Describe
                </th>
                <th scope="col" className="px-6 py-3">
                Price
                </th>
                <th scope="col" className="px-6 py-3">
                Image
                </th>
                <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
                </th>
                <th scope="col" className="px-6 py-3">
                <span className="sr-only">Remove</span>
                </th>
            </tr>
            </thead>
            <tbody>
                {products?.map((item,index)=>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {item.id}
                    </th>
                    <td className="px-6 py-4">
                    {item.name}
                    </td>
                    <td className="px-6 py-4">
                    {item.desc}
                    </td>
                    <td className="px-6 py-4">
                    ${item.price}
                    </td>
                    <td className="px-6 py-4">
                    ${item.img}
                    </td>
                    <td className="px-6 py-4 text-right">
                    <Link to={`/products/${item.id}/edit`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                    </td>
                    <td className="px-6 py-4 text-right">
                    <button onClick={()=>onRemove(item.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Remove</button>
                    </td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
</div>
  )
}

export default Index
