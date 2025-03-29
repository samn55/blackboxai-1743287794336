import { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';
import BingoPadSelector from './views/BingoPadSelector';

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Initialize Telegram Mini App
    try {
      WebApp.ready();
      setIsReady(true);
    } catch (error) {
      console.error('Failed to initialize Telegram Mini App:', error);
    }
  }, []);

  if (!isReady) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-xl font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with background image */}
      <header 
        className="bg-cover bg-center h-48 relative mb-6"
        style={{
          backgroundImage: 'url(https://source.unsplash.com/random/1920x1080/?bingo,game)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Bingo Game</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4">
        <BingoPadSelector />
      </main>

      {/* Footer */}
      <footer className="mt-8 py-4 text-center text-gray-600 bg-white">
        <p>© 2024 Bingo Game. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
