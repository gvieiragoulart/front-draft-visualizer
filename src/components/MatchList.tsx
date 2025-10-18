import MatchCard from './MatchCard';
import type { Match } from '../types/match';
import './MatchList.css';

interface MatchListProps {
  matches: Match[];
  title?: string;
  emptyMessage?: string;
}

const MatchList = ({ matches, title, emptyMessage = 'No matches found' }: MatchListProps) => {
  if (matches.length === 0) {
    return (
      <div className="empty-state">
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="match-list">
      {title && <h2 className="match-list-title">{title}</h2>}
      <div className="match-grid">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default MatchList;
