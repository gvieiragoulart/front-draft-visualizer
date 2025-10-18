import { useMatches } from '../hooks/useMatches';
import MatchList from '../components/MatchList';
import './Home.css';

const Home = () => {
  const { matches, loading, error } = useMatches();

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading matches...</p>
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

  // Separate matches by status
  const liveMatches = matches.filter(m => m.status === 'live');
  const upcomingMatches = matches.filter(m => m.status === 'upcoming');
  const finishedMatches = matches.filter(m => m.status === 'finished');

  return (
    <div className="container home-page">
      {liveMatches.length > 0 && (
        <section>
          <MatchList
            matches={liveMatches}
            title="Live Matches"
            emptyMessage="No live matches at the moment"
          />
        </section>
      )}

      {upcomingMatches.length > 0 && (
        <section>
          <MatchList
            matches={upcomingMatches}
            title="Upcoming Matches"
            emptyMessage="No upcoming matches"
          />
        </section>
      )}

      {finishedMatches.length > 0 && (
        <section>
          <MatchList
            matches={finishedMatches}
            title="Recent Results"
            emptyMessage="No recent matches"
          />
        </section>
      )}

      {matches.length === 0 && (
        <div className="empty-state">
          <p>No matches available at the moment</p>
        </div>
      )}
    </div>
  );
};

export default Home;
