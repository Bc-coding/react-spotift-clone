import React from "react";
import "./SongRow.css";

function SongRow({ track }) {
  return (
    <div className="songRow">
      <div className="songRow__album">
        <img
          src={track.album.images[0].url}
          alt=""
          className="songRow__album__img"
        />
      </div>
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
        <p>{track.album.name}</p>
      </div>
    </div>
  );
}

export default SongRow;
