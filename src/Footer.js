import React from "react";
import "./Footer.css";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="footer__div__albumLogo">
          <img
            src="https://thewestreviewdotcom.files.wordpress.com/2016/06/img_8405.jpg?w=700"
            alt=""
            className="footer__albumLogo"
          />
        </div>
        <div className="footer__songInfo">
          <h4>This Christmas</h4>
          <p>Jess Glynn</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon className="footer__icon" />
          </Grid>
          <Grid item>
            <VolumeDownIcon className="footer__icon" />
          </Grid>
          <Grid item>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
