import '../Match.css'

export default function Match(props) {

  return (
    <div className="match">
      
        <div className="home-team">
          <div className="home-team-name">{props.homeTeam.toUpperCase()}</div>
          <img src={require(`../crests/${props.homeTeamSlug}.png`)} alt={props.homeTeamSlug} className="club-crest" />
        </div>
        <div className="match-score">
          <div className="home-score">{props.homeScore}</div>
          <div className="score-dash">-</div>
          <div className="away-score">{props.awayScore}</div>
        </div>
        <div className="away-team">
        <img src={require(`../crests/${props.awayTeamSlug}.png`)} alt={props.awayTeamSlug} className="club-crest" />
          <div className="away-team-name">{props.awayTeam.toUpperCase()}</div>
        </div>
      </div>
    
  )
}
