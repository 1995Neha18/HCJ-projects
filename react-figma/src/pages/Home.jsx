import React from 'react'
import Banner from '../components/Banner'
import Button from '../components/Button'
import Slack from '../components/Slack'
import Buyers from '../components/Buyers'
import Grid from '../components/Grid'
import Quality from '../components/Quality'
import Network from '../components/Network'
import Clients from '../components/Clients'

const Home = () => {
  return (
    <div>
      <Banner />
      <Button/>
      <Slack/>
      <Buyers/>
      <Grid/>
      <Quality/>
      <Network/>
      <Clients/>
    </div>
  )
}

export default Home
