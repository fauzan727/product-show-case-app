'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <h1 className="font-bold">Product Showcase</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
