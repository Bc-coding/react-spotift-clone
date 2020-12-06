import React from "react";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import { useDataLayerValue } from "./DataLayer";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  const img_url =
    "https://newjams-images.scdn.co/v3/discover-weekly/aAbca4VNfzWuUCQ_FGiEFA==/bmVuZW5lbmVuZW5lbmVuZQ==/default";

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <div className="body__div__img">
          <img src={img_url} alt="Discover Weekly" className="body__img" />
        </div>

        <div className="body__info__text">
          <h2 className="body__info__text_playlist">PLAYLIST</h2>
          <span>
            <h1 className="body__info__text__discover">
              {discover_weekly?.name}
            </h1>
          </span>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* List of Songs */}
        {discover_weekly?.tracks?.items.map((item) => (
          <SongRow key={new Date().getTime()} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
