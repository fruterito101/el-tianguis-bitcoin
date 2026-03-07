'use client';

import { useState } from 'react';
import { Tianguis } from './components/Tianguis';
import { Welcome } from './components/Welcome';

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [sats, setSats] = useState(100000);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const startGame = () => {
    setGameStarted(true);
  };

  const purchaseItem = (cost: number, lessonId: string) => {
    if (sats >= cost && !completedLessons.includes(lessonId)) {
      setSats(sats - cost);
      setCompletedLessons([...completedLessons, lessonId]);
      return true;
    }
    return false;
  };

  if (!gameStarted) {
    return <Welcome onStart={startGame} />;
  }

  return (
    <Tianguis 
      sats={sats} 
      completedLessons={completedLessons}
      onPurchase={purchaseItem}
    />
  );
}
