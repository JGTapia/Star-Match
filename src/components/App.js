import React, { useState } from 'react';

import Game from "./Game"
import Table from './Table';


const StarMatch = (props) => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} gameId={gameId} setGameScore={props.setGameScore} />;
}


export function App() {
  const [scores, setScores] = useState([]);

  const setGameScore = (newGameId, newTimeLeft) => {

    console.log('setGameScore.gameId', newGameId);
    console.log('setGameScore.timeLeft', newTimeLeft);
    const newScore = {
      gameId: newGameId,
      timeLeft: newTimeLeft
    }
    const newScores = scores.concat(newScore);
    setScores(newScores);
  };

  return (
    <div>
      <StarMatch setGameScore={(newGameId, newTimeLeft) => setGameScore(newGameId, newTimeLeft)} />
      <div>
        {scores !== 'undefined' &&
          <Table scores={scores} />
        }
      </div>
    </div>
  );
}
