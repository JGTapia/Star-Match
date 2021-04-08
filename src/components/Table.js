import React from 'react';
import Score from './Score';

const Table = props => (
    <div className="right">
        <b>Scores Table</b>
        {props.scores.map(score => (
            <Score key={score.gameId} score={score} />
        ))}
    </div>
);

export default Table;