import React from "react";

const LeaderboardScore = ({ data }) => {
  console.log(data);
  const categoryName = data.category;
  const sortPlayers = data.players.sort((a, b) => {
    return b.score - a.score;
  });
  console.log(sortPlayers);
  return (
    <p role="leaderboardScore" className="leaderboard-score">
      <span>{categoryName}</span>
      {sortPlayers.map((p) => {
        return (
          <div>
            <p>
              {p.name}: {p.score}
            </p>
          </div>
        );
      })}
      {/* </ul> */}
    </p>
  );
};

export default LeaderboardScore;
