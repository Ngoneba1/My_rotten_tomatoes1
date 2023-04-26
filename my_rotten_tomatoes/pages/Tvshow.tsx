import type { NextPage } from 'next'
import Head from 'next/head'
import Header1 from '../components/Header1'
import Banner1 from'../components/Banner1'
import requests from '@/utils/request'
import { TVShow } from '@/typings'
import Row1 from '../components/Row1'
import { useRecoilValue } from 'recoil'
import { modalState1, tvshowstate } from '@/atoms/modalAtoms1'
import Modal1 from '../components/Modal1'
import useList1 from '@/hooks/useList1';
import useAuth from '@/hooks/useAuth';   

import axios from 'axios';

interface Props {

  topRated: TVShow[]
  comedyTVShows: TVShow[]
  romanceTVShows: TVShow[]
}

const Home = ({
  comedyTVShows,
  romanceTVShows,
 
}: Props) => {
  const { loading, user } = useAuth()
  const showModal = useRecoilValue(modalState1)
  const tvshow = useRecoilValue(tvshowstate)
  const list = useList1(user?.uid)

  return (
    <div className=''>
      <Head>
        <title> Home - My rotten tomatoes</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header1/>

      <main className='relative pl-4 pb-24 lg:space-y-24'>
        <Banner1 topRated={comedyTVShows}/>
        <section className="md:space-y-24">
          <Row1 name="Comedy TV Shows" tvshows={comedyTVShows} />
          <Row1 name="Romance TV Shows" tvshows={romanceTVShows} />
        </section>
      </main>

      {showModal && <Modal1 />}

    </div>
  )
}
export default Home 

export const getServerSideProps = async () => {
  try {
    const [
      topRated,
      actionTVShows,
      comedyTVShows,
      horrorTVShows,
      romanceTVShows,

    ] = await Promise.all([
      axios.get(requests.fetchTopRated),
      axios.get(requests.fetchActionTvShows),
      axios.get(requests.fetchComedyTvShows),
      axios.get(requests.fetchHorrorTvShows),
      axios.get(requests.fetchRomanceTvShows),
    ])
    return {
      props: {

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


