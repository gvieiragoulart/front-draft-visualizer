import axios from 'axios';
import type { Match } from '../types/match';

const API_BASE_URL = 'https://draft-visualizer.onrender.com/api';

// For development/testing, we'll also create mock data
const mockMatches: Match[] = [
  {
    id: '1',
    team1: { id: '1', name: 'Team Liquid', country: 'USA' },
    team2: { id: '2', name: 'FaZe Clan', country: 'Europe' },
    team1Score: 0,
    team2Score: 0,
    status: 'live',
    startTime: new Date().toISOString(),
    event: 'IEM Katowice 2025',
    format: 'BO3',
    bestOf: 3,
  },
  {
    id: '2',
    team1: { id: '3', name: 'NAVI', country: 'Ukraine' },
    team2: { id: '4', name: 'G2 Esports', country: 'Europe' },
    status: 'upcoming',
    startTime: new Date(Date.now() + 3600000).toISOString(),
    event: 'IEM Katowice 2025',
    format: 'BO3',
    bestOf: 3,
  },
  {
    id: '3',
    team1: { id: '5', name: 'Vitality', country: 'France' },
    team2: { id: '6', name: 'Astralis', country: 'Denmark' },
    team1Score: 2,
    team2Score: 1,
    status: 'finished',
    startTime: new Date(Date.now() - 7200000).toISOString(),
    event: 'IEM Katowice 2025',
    format: 'BO3',
    bestOf: 3,
  },
];

export const matchService = {
  async getMatches(): Promise<Match[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/matches`);
      return response.data.matches || response.data;
    } catch (error) {
      console.warn('Failed to fetch from API, using mock data:', error);
      // Return mock data if API fails
      return mockMatches;
    }
  },

  async getMatchById(id: string): Promise<Match | null> {
    try {
      const response = await axios.get(`${API_BASE_URL}/matches/${id}`);
      return response.data;
    } catch (error) {
      console.warn('Failed to fetch match from API, using mock data:', error);
      return mockMatches.find(m => m.id === id) || null;
    }
  },

  // Get only live matches
  async getLiveMatches(): Promise<Match[]> {
    const matches = await this.getMatches();
    return matches.filter(m => m.status === 'live');
  },

  // Get upcoming matches
  async getUpcomingMatches(): Promise<Match[]> {
    const matches = await this.getMatches();
    return matches.filter(m => m.status === 'upcoming');
  },
};
