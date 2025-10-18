# Draft Visualizer - Front-end

A clean, modern React application inspired by HLTV design to visualize CS:GO/CS2 match drafts and schedules. This front-end consumes data from the [draft-visualizer](https://github.com/gvieiragoulart/draft-visualizer) API.

![Draft Visualizer Home](https://github.com/user-attachments/assets/f6e92372-4cdf-48ea-ad5f-6c979f20a06e)

## Features

- **Live Matches**: View currently ongoing matches with real-time scores
- **Upcoming Matches**: See scheduled matches with countdown
- **Recent Results**: Browse completed matches with final scores
- **Clean Design**: HLTV-inspired interface with improved clarity and user experience
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Auto-refresh**: Match data refreshes automatically every 30 seconds

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **date-fns** - Date formatting utilities

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header.tsx   # Navigation header
│   ├── MatchCard.tsx # Individual match display
│   └── MatchList.tsx # Grid of match cards
├── pages/           # Page components
│   ├── Home.tsx     # Main page with all matches
│   ├── LivePage.tsx # Live matches only
│   └── UpcomingPage.tsx # Upcoming matches only
├── services/        # API service layer
│   └── matchService.ts # API calls and mock data
├── types/          # TypeScript type definitions
│   └── match.ts    # Match and Team interfaces
├── hooks/          # Custom React hooks
│   └── useMatches.ts # Hook for fetching matches
└── styles/         # Component-specific styles
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gvieiragoulart/front-draft-visualizer.git
cd front-draft-visualizer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### API Integration

The application is configured to consume the draft-visualizer API at `https://draft-visualizer.onrender.com/api`. If the API is unavailable, it falls back to mock data for development and testing purposes.

To change the API endpoint, edit `src/services/matchService.ts`:

```typescript
const API_BASE_URL = 'your-api-url-here';
```

## Screenshots

### Home Page
![Home Page](https://github.com/user-attachments/assets/f6e92372-4cdf-48ea-ad5f-6c979f20a06e)

### Live Matches
![Live Matches](https://github.com/user-attachments/assets/671ad242-8a4a-4ee5-8bfd-cedcae22ff3f)

### Upcoming Matches
![Upcoming Matches](https://github.com/user-attachments/assets/7cd3d7a2-11ef-4e2c-9e15-ce51407201a9)

## Design Philosophy

This project follows a cleaner, more modern approach compared to HLTV:

- **Simplified Color Palette**: Dark theme with blue accents for better readability
- **Clear Visual Hierarchy**: Important information stands out
- **Responsive Grid Layout**: Adapts seamlessly to different screen sizes
- **Smooth Animations**: Subtle hover effects and transitions
- **Status Indicators**: Clear badges for live, upcoming, and finished matches

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Related Projects

- [draft-visualizer](https://github.com/gvieiragoulart/draft-visualizer) - Backend API for match data

