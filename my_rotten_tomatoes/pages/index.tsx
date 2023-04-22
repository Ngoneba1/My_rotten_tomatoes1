import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from'../components/Banner'

const Home: NextPage= () => {
	return (
		<div className=''>
			<Head>
				<title> Home - My rotten tomatoes</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header/>

			<main>
				
			<Banner/>
				<section>

				</section>



			</main>

		</div>
	)
}

export default Home