'use client'
import { useEffect, useState } from 'react'
import Navbar from '@/component/Navbar'
import { useParams } from 'next/navigation'
import React from 'react'

export default function ProductDetail() {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const [favorite, setFavorite] = useState(false)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${slug}`)
      .then(res => res.json())
      .then(setProduct)
  }, [slug])

  useEffect(() => {
    const fav = localStorage.getItem(`favorite-${slug}`)
    setFavorite(fav === 'true')
  }, [slug])

  const toggleFavorite = () => {
    const newVal = !favorite
    setFavorite(newVal)
    localStorage.setItem(`favorite-${slug}`, newVal.toString())
  }

  if (!product) return <div>Loading...</div>

  return (
    <div>
      <Navbar />
      <div className="p-6 flex gap-6">
        <img src={product.image} className="w-60 h-60 object-contain" alt={product.title} />
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg mt-2 font-semibold">${product.price}</p>
          <button
            onClick={toggleFavorite}
            className={`mt-4 px-4 py-2 rounded ${favorite ? 'bg-red-500' : 'bg-gray-500'} text-white`}
          >
            {favorite ? 'Remove from Favorite' : 'Add to Favorite'}
          </button>
        </div>
      </div>
    </div>
  )
}
