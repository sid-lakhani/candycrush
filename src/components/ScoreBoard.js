const ScoreBoard = ({ score }) => {
    return (
        <div className="scoreboard">
        <h2>Score: {score}</h2>
        <style>
            {`
            .scoreboard {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100px;
                color: #FF0000;
                font-size: 3rem;
                margin: 10px;
                margin-top: 20px;
                font-family: 'Kalam', cursive;
            }
            @media (max-width: 768px) {
                .scoreboard {
                    font-size: 2.5rem;
                }
            }
            @media (max-width: 480px) {
                .scoreboard {
                    font-size: 2rem;
                }
            }
            `}
        </style>
        </div>
    );
}

export default ScoreBoard;