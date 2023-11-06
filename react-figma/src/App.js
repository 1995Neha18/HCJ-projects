import React from 'react'
import Clients from './components/Clients'
import Banner from './components/Banner'
import Slack from './components/Slack'
import Buyers from './components/Buyers'

const App = () => {
  return (
    <div>
     <Banner
     />
     <Slack/>
     <Buyers/>
      <Clients/>
    </div>
  )
}

export default App

