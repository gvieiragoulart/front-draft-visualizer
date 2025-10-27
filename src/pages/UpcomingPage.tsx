import { useMatches } from '../hooks/useMatches';
import MatchList from '../components/MatchList';

const UpcomingPage = () => {
  const { matches, loading, error } = useMatches();

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading upcoming matches...</p>
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

  const upcomingMatches = matches.filter(m => m.status === 'upcoming');

  return (
    <div className="container">
      <MatchList
        matches={upcomingMatches}
        title="Upcoming Matches"
        emptyMessage="No upcoming matches scheduled at the moment."
      />
    </div>
  );
};

export default UpcomingPage;
