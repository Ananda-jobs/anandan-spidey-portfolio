import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Hero } from './components/Hero/Hero.tsx';
import { Powers } from './components/Powers/Powers.tsx';
import { Missions } from './components/Missions/Missions.tsx';
import { TheWeb } from './components/TheWeb/TheWeb.tsx';

function App() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <main className="w-full h-[100dvh] bg-black overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth relative">
      <div id="hero-section" className="w-full h-[100dvh] snap-start flex-shrink-0">
        <Hero isMuted={isMuted} toggleMute={toggleMute} />
      </div>
      <div id="powers-section" className="w-full h-[100dvh] snap-start flex-shrink-0">
        <Powers />
      </div>
      <div id="missions-section" className="w-full h-[100dvh] snap-start flex-shrink-0">
        <Missions />
      </div>
      <div id="web-section" className="w-full h-[100dvh] snap-start flex-shrink-0">
        <TheWeb />
      </div>
      <Analytics />
    </main>
  );
}

export default App;
