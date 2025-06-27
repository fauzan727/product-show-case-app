// @ts-ignore
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products?limit=5')
  return res.json()
}

export default async function Home() {
  const products = await getProducts()

  return (
    <div>
      <Navbar />
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
            <h2 className="font-bold mt-2">{product.title}</h2>
            <Link href={`/products/${product.id}`}>
              <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
