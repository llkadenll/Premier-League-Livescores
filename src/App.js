import React, { useState, useEffect } from "react"
import Scores from "./components/Scores"
import scoresData from "./data.js"

function App() {
  const [scores, setScores] = useState([])
  
  // useEffect(() => {
  //   fetch("../data.js")
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }, [])

  useEffect(() => {
    setScores(scoresData.events)
  }, [])

  // function getScores() {
    // const scoresArray = scoresData.events
    // console.log(scoresArray)
    // return 'elo'
    // setScores(scoresData.events)
    // console.log(scores)
  // }

  return (
    <Scores scores={scores} />
  )
}

export default App;
