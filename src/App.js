import React from 'react'
import Player from "./components/Player"
import TimerChallenge from "./components/TimerChallenge"

const App = () => {
  return (
    <>
      <Player/>
    <main id="challenges">
      <TimerChallenge title="Easy" targetTime={1}/>
      <TimerChallenge title="Not Easy" targetTime={5}/>
      <TimerChallenge title="Getting Tough" targetTime={10}/>
      <TimerChallenge title="Pros only" targetTime={15}/>
      </main>
    </>
  )
}

export default App
