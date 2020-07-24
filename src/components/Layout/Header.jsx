import React from 'react'
import Link from 'next/link'

import SearchBar from '../SearchBar'

const Header = () => {
	return (
		<header className="bg-gray-700 text-white px-4 py-2 flex items-center">
			<div className="text-2xl mr-8">NameHere</div>

			<nav className="site-nav text-white">
				<a href="#">Home</a>
				<a href="#">Some</a>
				<a href="#">Nav</a>
				<a href="#">Bar</a>
				<a href="#">Items</a>
			</nav>

			<div className="ml-auto">
				<SearchBar />
			</div>
		</header>
	)
}

export default Header
