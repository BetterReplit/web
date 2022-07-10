import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
	return (
		<main className="bg-slate-800 text-white overflow-auto">
			<Head>
				<meta property="og:title" content="BetterReplit" />
				<meta property="og:description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
				<link rel="shortcut icon" href="favicon.png" type="image/png" />
			</Head>
			<nav className="w-full transition-all delay-300 p-5 bg-slate-900 flex items-center lg:pl-[300px] lg:pr-[300px]">
				<span className="font-bold text-2xl">BetterReplit</span>
				<div className="w-full flex justify-end items-center">
				<a className="p-2 hover:bg-blue-700  transition-all cursor-pointer pl-14 pr-14 rounded active:translate-y-[5px] select-none bg-blue-600">Install Extension</a>
				</div>
			</nav>

			<div className="p-3 text-center flex items-center justify-center flex-col w-full h-screen">
				<h3 className="text-2xl font-bold">BetterReplit</h3>
				<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span>
				<a className="p-2 hover:bg-blue-700  transition-all cursor-pointer pl-14 pr-14 mt-5 rounded active:translate-y-[5px] select-none bg-blue-600">Install Extension</a>
			</div>
			<div className="w-full h-auto flex flex-col p-5">
				<div className="flex text-center justify-center sm:justify-start sm:text-left w-full mb-2">
					<div className="w-3/6">
						<h3 className="text-2xl font-bold">Themes</h3>
						<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span>
					</div>
				</div>
				<div className="flex text-center justify-center sm:justify-end sm:text-right w-full mb-2">
					<div className="w-3/6">
						<h3 className="text-2xl font-bold">Plugins</h3>
						<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Home
