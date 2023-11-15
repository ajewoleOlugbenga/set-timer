import React, { useRef, useState } from "react";

const Player = () => {
  const PlayerName = useRef();
  const [changePlayerName, setChangePlayerName] = useState(null);

  const handleClick = () => {
    setChangePlayerName(PlayerName.current.value);
    PlayerName.current.value = " ";
  };

  return (
    <section id="player">
      <h2>Welcome {changePlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={PlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;
