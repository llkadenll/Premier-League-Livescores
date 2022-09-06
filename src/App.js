import React, { useState, useEffect } from "react"
import './App.css'
import Scores from "./components/Scores"
import scoresData from "./data.js"

function App() {
  const [scores, setScores] = useState([])
  
  useEffect(() => {
    setScores(scoresData.events)
  }, [])

  return (
    <div className="app">
      {scores.length
        ? <Scores scores={scores} />
        : "No live games at the moment."
      }
      </div>
  )
}

export default App;
