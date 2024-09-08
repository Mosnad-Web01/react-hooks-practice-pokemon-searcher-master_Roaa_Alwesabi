import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [showFront, setShowFront] = useState(true);

  const handleClick = () => {
    setShowFront(!showFront);
  };

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img
            alt={pokemon.name}
            src={showFront ? pokemon.frontUrl : pokemon.backUrl}
            onError={(e) => e.target.src = 'path/to/placeholder-image.png'} // Placeholder in case of broken image
          />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
