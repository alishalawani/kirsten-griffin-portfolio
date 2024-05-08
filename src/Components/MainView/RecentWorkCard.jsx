import React, { useEffect, useState, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PlayPauseOuterCircle from '../../assets/playPauseCircleOuter.svg';
import PlayPauseInnerCircle from '../../assets/playPauseCircleInner.svg';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
export default function RecentWorkCard({source, index}) {
	const [isPlaying, setIsPlaying] = useState(false);

	const [duration, setDuration] = useState(0);
	const videoRef = useRef(null);

	
	const toggleFullscreen = () => {
		videoRef.current.requestFullscreen();
	};

	// Toggle play/pause functionality
	const togglePlayPause = () => {
		if (videoRef.current.paused) {
			videoRef.current.play();
			setIsPlaying(true);
		} else {
			videoRef.current.pause();
			setIsPlaying(false);
		}
	};

	// Update current time and duration as video metadata loads
	const handleLoadedMetadata = () => {
		setDuration(videoRef.current.duration);
	};

	useEffect(() => {
		// Update current time and duration as video metadata loads
		videoRef.current?.addEventListener('loadedmetadata', handleLoadedMetadata);

		// Clean up event listener and interval on component unmount
		return () => {
			videoRef.current?.removeEventListener(
				'loadedmetadata',
				handleLoadedMetadata
			);
		};
	}, [duration]);
	return (
				<Card sx={{ minWidth: 300,maxWidth: 300, marginRight: 5, background: "#02030B", color: "#FFFFFF", textAlign: "left", minHeight: 300, borderRadius: 2}} > 
					<CardActionArea sx={{ width: "100%", }}>
						<div className='video-container' >
							<video
								className='video'
								controls={false}
								ref={videoRef}
								onEnded={() => setIsPlaying(false)}>
								<source src={source} type='video/mp4' />
								Your browser does not support the video tag.
							</video>
							<button onClick={togglePlayPause} className='play-btn'>
								<img
									src={PlayPauseOuterCircle}
									alt='play-btn-outer-circle'
									className='play-btn-outer-circle'
								/>
								<img
									src={PlayPauseInnerCircle}
									alt='play-btn-inner-circle'
									className='play-btn-inner-circle'
								/>
								<span> {isPlaying ?<PauseIcon fontSize='large'/>: <PlayArrowIcon fontSize='large'/>}</span>
							</button>

							<button onClick={toggleFullscreen} className='full-screen-btn'>
								<FullscreenIcon className='full-screen-icon'/>
							</button>
						</div>
						<CardContent>
							<Typography variant='h5' component='div'>
								Lorem Ipsum is simply {index}
							</Typography>
							<Typography variant='body2'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium minima dolorem quis modi numquam? Enim quis, omnis, 
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
	);
}
