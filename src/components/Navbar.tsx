import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav>
        <ul className="flex space-x-4 w-full justify-center p-4">
            <li>
            <a href="/" className="text-blue-500 hover:underline">Home</a>
            </li>
            <li>
            <a href="/results" className="text-blue-500 hover:underline">Results</a>
            </li>
            <li>
            <a href="/reveal" className="text-blue-500 hover:underline">Reveal</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar