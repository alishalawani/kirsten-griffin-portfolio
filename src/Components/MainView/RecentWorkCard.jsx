import React, { useEffect, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PlayPauseOuterCircle from '../../assets/playPauseCircleOuter.svg';
import PlayPauseInnerCircle from '../../assets/playPauseCircleInner.svg';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

export default function RecentWorkCard({ source,title,details, index, isPlaying, onPlayPause }) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const videoRef = useRef(null);

  const toggleFullscreen = () => {
    videoRef.current.requestFullscreen();
  };

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      onPlayPause(index);
    } else {
      videoRef.current.pause();
      onPlayPause(null);
    }
  };

  useEffect(() => {
    if (!isPlaying) {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const handleLoadedMetadata = () => {
    if (videoRef.current.paused) {
      videoRef.current.controls = false;
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        videoRef.current.controls = false;
        videoRef.current.style.pointerControls = 'none';
      } else {
        videoRef.current.style.pointerControls = '';
      }
    });

    document.addEventListener('webkitfullscreenchange', () => {
      if (!document.fullscreenElement) {
        document.exitPointerLock();
        videoRef.current.controls = false;
        videoRef.current.style.pointerControls = 'none';
      } else {
        document.documentElement.requestPointerLock();
        videoRef.current.style.pointerControls = '';
      }
    });

    videoRef.current?.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      videoRef.current?.removeEventListener(
        'loadedmetadata',
        handleLoadedMetadata
      );
    };
  }, []);

  return (
    <Card
      sx={{
        minWidth: 300,
        maxWidth: 300,
        marginRight: 5,
        background: '#02030B',
        color: '#FFFFFF',
        textAlign: 'left',
        height: 265,
        borderRadius: 2,
      }}
    >
      <CardActionArea sx={{ width: '100%' }}>
        <div className="video-container">
          <video
            className="video"
            controls={false}
            ref={videoRef}
            onEnded={() => onPlayPause(null)}
          >
            <source src={source} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={togglePlayPause}
            className={`play-btn ${isPlaying ? 'pause-btn' : ''}`}
          >
            <img
              src={PlayPauseOuterCircle}
              alt="play-btn-outer-circle"
              className="play-btn-outer-circle"
            />
            <img
              src={PlayPauseInnerCircle}
              alt="play-btn-inner-circle"
              className="play-btn-inner-circle"
            />
            <span>
              {isPlaying ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
            </span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="full-screen-btn"
            style={{ opacity: isMobile ? 0 : 1 }}
          >
            <FullscreenIcon className="full-screen-icon" />
          </button>
        </div>
        <CardContent>
          <Typography variant="h5" component="div">
           {title}
          </Typography>
          <Typography variant="body1">
            {details}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
