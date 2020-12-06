import React from "react";
import "./Sidebar.css";
import logoIcon from "./assets/Spotify_Logo_RGB_White.png";
import SidebarOption from "./SidebarOption";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  console.log(playlists);

  return (
    <div className="sidebar">
      <div className="sidebar__div__logo">
        <img src={logoIcon} alt="spotify logo" />
      </div>

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your library" />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>

      <hr />
      {/* Pulling playlists from the datalayer */}
      {playlists?.items?.map((playlist) => (
        <SidebarOption key={playlist.name} title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
