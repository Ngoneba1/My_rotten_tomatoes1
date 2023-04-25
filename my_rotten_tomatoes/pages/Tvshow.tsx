import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner1 from'../components/Banner1'
import requests from '@/utils/request'
import { TVShow } from '@/typings'
import Row1 from '../components/Row1'
import { useRecoilValue } from 'recoil'
import { modalState } from '@/atoms/modalAtoms'
import axios from 'axios';

interface Props {
  trendingNow: TVShow[]
  topRated: TVShow[]
  actionTVShows: TVShow[]
  comedyTVShows: TVShow[]
  horrorTVShows: TVShow[]
  romanceTVShows: TVShow[]
}

const Home: NextPage<Props> = ({
  topRated,
  actionTVShows,
  comedyTVShows,
  horrorTVShows,
  romanceTVShows,
  trendingNow,
}: Props) => {
  const showModal = useRecoilValue(modalState)

  return (
    <div className=''>
      <Head>
        <title> Home - My rotten tomatoes</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header/>

      <main className='relative pl-4 pb-24 lg:space-y-24'>
        <Banner1 topRated={topRated}/>
        <section className="md:space-y-24">
          <Row1 name="Trending Now" tvshows={trendingNow} />
          <Row1 name="Action TV Shows" tvshows={actionTVShows} />
          <Row1 name="Comedy TV Shows" tvshows={comedyTVShows} />
          <Row1 name="Scary TV Shows" tvshows={horrorTVShows} />
          <Row1 name="Romance TV Shows" tvshows={romanceTVShows} />
        </section>
      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  try {
    const [
      topRated,
      actionTVShows,
      comedyTVShows,
      horrorTVShows,
      romanceTVShows,
      trendingNow,
    ] = await Promise.all([
      axios.get(requests.fetchTopRated),
      axios.get(requests.fetchActionTvShows),
      axios.get(requests.fetchComedyTvShows),
      axios.get(requests.fetchHorrorTvShows),
      axios.get(requests.fetchRomanceTvShows),
      axios.get(requests.fetchTrending),
    ])
    return {
      props: {
        trendingNow: trendingNow.data.results,
        topRated: topRated.data.results,
        actionTVShows: actionTVShows.data.results,
        comedyTVShows: comedyTVShows.data.results,
        horrorTVShows: horrorTVShows.data.results,
        romanceTVShows: romanceTVShows.data.results,
      },
    }
  } catch (error) {
    console.error(error)
    return { props: {} }
  }
}

export default Home
