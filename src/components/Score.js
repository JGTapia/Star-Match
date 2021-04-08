import React from 'react';

const Score = props => (
    {
        props.score.timeLeft !== 0 ?
            <div >
                Game number {props.score.gameId} finished with {props.score.timeLeft}s left
        </div>
    }
);


const Table = props => (
    <div className="right">
        <b>Scores Table</b>
        {props.scores.map(score => (
            <Score key={score.gameId} score={score} />
        ))}
    </div>
);

export default Score;