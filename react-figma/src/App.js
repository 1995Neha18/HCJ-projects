import React from 'react'
import Clients from './components/Clients'
import Banner from './components/Banner'
import Slack from './components/Slack'
import Buyers from './components/Buyers'
import Grid from './components/Grid'
import Quality from './components/Quality'

const App = () => {
  return (
    <div>
     <Banner/>
     <Slack/>
     <Buyers/>
     <Grid/>
     <Quality/>
     <Clients/>
    </div>
  )
}

export default App

