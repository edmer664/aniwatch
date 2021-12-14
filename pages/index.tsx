import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import {Landing} from './Landing'

const Home: NextPage = () => {
  return (
      <React.Fragment>
        <Head>
          <title>AniWatch</title>
          <link rel="shortcut icon" href="/aniwatch.svg" type="image/x-icon" />
        </Head>
        <Landing/>
      </React.Fragment>
  )
}

export default Home
