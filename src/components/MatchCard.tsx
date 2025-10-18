import type { Match } from '../types/match';
import { format } from 'date-fns';
import './MatchCard.css';

interface MatchCardProps {
  match: Match;
}

const MatchCard = ({ match }: MatchCardProps) => {
  const getStatusBadge = () => {
    switch (match.status) {
      case 'live':
        return <span className="status-badge live">LIVE</span>;
      case 'upcoming':
        return <span className="status-badge upcoming">UPCOMING</span>;
      case 'finished':
        return <span className="status-badge finished">FINISHED</span>;
      default:
        return null;
    }
  };

  const formatTime = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return format(date, 'HH:mm');
    } catch {
      return '';
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return format(date, 'MMM dd');
    } catch {
      return '';
    }
  };

  return (
    <div className={`match-card ${match.status}`}>
      <div className="match-header">
        <div className="match-info">
          <span className="event-name">{match.event}</span>
          <span className="match-format">{match.format}</span>
        </div>
        {getStatusBadge()}
      </div>

      <div className="match-body">
        <div className="team">
          <div className="team-logo">
            {match.team1.logo ? (
              <img src={match.team1.logo} alt={match.team1.name} />
            ) : (
              <div className="team-placeholder">{match.team1.name.charAt(0)}</div>
            )}
          </div>
          <div className="team-info">
            <span className="team-name">{match.team1.name}</span>
            {match.team1.country && (
              <span className="team-country">{match.team1.country}</span>
            )}
          </div>
          {match.status !== 'upcoming' && (
            <div className="team-score">{match.team1Score ?? 0}</div>
          )}
        </div>

        <div className="match-divider">
          <span className="vs">VS</span>
        </div>

        <div className="team">
          <div className="team-logo">
            {match.team2.logo ? (
              <img src={match.team2.logo} alt={match.team2.name} />
            ) : (
              <div className="team-placeholder">{match.team2.name.charAt(0)}</div>
            )}
          </div>
          <div className="team-info">
            <span className="team-name">{match.team2.name}</span>
            {match.team2.country && (
              <span className="team-country">{match.team2.country}</span>
            )}
          </div>
          {match.status !== 'upcoming' && (
            <div className="team-score">{match.team2Score ?? 0}</div>
          )}
        </div>
      </div>

      <div className="match-footer">
        <div className="match-time">
          <span className="time">{formatTime(match.startTime)}</span>
          <span className="date">{formatDate(match.startTime)}</span>
        </div>
        {match.streamUrl && (
          <a
            href={match.streamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="watch-button"
          >
            Watch
          </a>
        )}
      </div>
    </div>
  );
};

export default MatchCard;
