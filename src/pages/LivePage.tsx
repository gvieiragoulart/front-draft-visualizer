import { useMatches } from '../hooks/useMatches';
import MatchList from '../components/MatchList';

const LivePage = () => {
  const { matches, loading, error } = useMatches();

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading live matches...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">{error}</div>
      </div>
    );
  }

  const liveMatches = matches.filter(m => m.status === 'live');

  return (
    <div className="container">
      <MatchList
        matches={liveMatches}
        title="Live Matches"
        emptyMessage="No live matches at the moment. Check back soon!"
      />
    </div>
  );
};

export default LivePage;
