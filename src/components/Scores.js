import '../Scores.css'
import Match from "./Match"

export default function Scores(props) {

  const scores = props.scores.map(score => {
    // console.log(score)
    return (
      // JSON.stringify(score.awayTeam.name, score.homeTeam.name)
      <Match key={score.id} homeTeam={score.homeTeam.name} homeTeamSlug={score.homeTeam.slug} homeScore={score.homeScore.current} awayTeam={score.awayTeam.name} awayTeamSlug={score.awayTeam.slug} awayScore={score.awayScore.current} />
    )
  })

  return (
    <div className="scores">
      {scores}
    </div>
  )
}
