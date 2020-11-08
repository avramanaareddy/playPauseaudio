import React from "react";
import { Typography, Button, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import "./PlainButton.css";
import clsx from "clsx";
import { useState } from "react";
import StopIcon from "@material-ui/icons/Stop";
import sampleAudio from "./sample_audio.mp3";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseIcon from "@material-ui/icons/Pause";

const useStyles = makeStyles({
  root: {
    width: "100",

    borderRadius: "20px"
  },
  outlinedSecondary: {
    color: "pink"
  }
});
export default function ButtonDemo(props) {
  let styles = useStyles();
  const [play, setPlay] = useState(true);
  const [btText, setBtText] = useState("Play");
  console.log(this.state);
  const [audio] = useState(new Audio(sampleAudio));

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Button
          variant="contained"
          className={clsx(styles.root, styles.outlinedSecondary)}
          color="primary"
          onClick={() => {
            if (btText === "Pause") {
              audio.pause();
              setBtText("Play");
            } else {
              audio.play();
              setBtText("Pause");
            }
            setPlay(!play);
          }}
          endIcon={play === false ?  <PauseIcon />:<PlayCircleFilledIcon />}
        >
          {btText==='Play'?'ఆడు':'ఆపు'}
        </Button>{" "}
        
      </div>
    </>
  );
}
