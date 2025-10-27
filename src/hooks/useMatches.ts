import { useState, useEffect } from 'react';
import type { Match } from '../types/match';
import { matchService } from '../services/matchService';

export const useMatches = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);
        const data = await matchService.getMatches();
        setMatches(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch matches');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();

    // Refresh matches every 30 seconds
    const interval = setInterval(fetchMatches, 30000);

    return () => clearInterval(interval);
  }, []);

  return { matches, loading, error };
};
