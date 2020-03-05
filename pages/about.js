import Link from 'next/link'

export default function About() {
  return (
    <div className="container mx-auto bg-gray-200 flex flex-col justify-center items-center h-screen">
      <p className="text-2xl">This is the about page</p>

      <Link href="/">
        <a className="bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          Home
        </a>
      </Link>
    </div>
  )
}
