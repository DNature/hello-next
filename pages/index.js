import Link from 'next/link'

export default function Index() {
  return (
    <div className="container mx-auto bg-gray-200 flex flex-col justify-center items-center h-screen">
      <p className="text-4xl">Hello Next.js</p>

      <Link href="/about">
        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          About
        </a>
      </Link>
    </div>
  )
}
