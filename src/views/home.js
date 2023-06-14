import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Mobility Coordinator</title>
        <meta property="og:title" content="Direct Mobility Coordinator" />
      </Helmet>
    </div>
  )
}

export default Home
