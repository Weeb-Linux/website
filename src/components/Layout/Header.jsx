import React from 'react'
import Link from 'next/link'

import SearchBar from '../SearchBar'

const Header = () => {
	return (
		<header className="bg-gray-700 text-white px-4 py-2 flex items-center">
			<div className="text-2xl mr-8">Weeb/Linux</div>

			<nav className="site-nav text-white">
				<Link href="/"><a>Home</a></Link>
				<Link href="/about"><a>About us</a></Link>
				<Link href="/people"><a>People</a></Link>
			</nav>
		</header>
	)
}

export default Header
