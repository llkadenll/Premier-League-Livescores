import './Scores.css'
import Match from "./Match"

export default function Scores(props) {
  // console.log(props.scores)

  const scores = props.scores.map(score => {
    return (
      <Match key={score.id} homeTeam={score.homeTeam.name} homeTeamSlug={score.homeTeam.slug} homeScore={score.homeScore.current} awayTeam={score.awayTeam.name} awayTeamSlug={score.awayTeam.slug} awayScore={score.awayScore.current} />
    )
  })

  return (
    <ul className="scores">
      {scores}
    </ul>
  )
}
