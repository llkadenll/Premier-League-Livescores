import Match from "./Match"

export default function Scores(props) {

  const scores = props.scores.map(score => {
    return (
      // JSON.stringify(score.awayTeam.name, score.homeTeam.name)
      <Match key={score.id} homeTeam={score.homeTeam.name} homeScore={score.homeScore.current} awayTeam={score.awayTeam.name} awayScore={score.awayScore.current} />
    )
  })

  return (
    <div>
      {scores}
    </div>
  )
}
