import React, { useState, useRef, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import PlayPauseOuterCircle from '../../assets/playPauseCircleOuter.svg';
import PlayPauseInnerCircle from '../../assets/playPauseCircleInner.svg';
import SocialCircle from '../../assets/social-circle.svg';
import './ReelSection.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

export const ReelSection = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const sliderRef = useRef(null); // Add sliderRef

	const [duration, setDuration] = useState(0);
	const [sliderValue, setSliderValue] = useState(0);
	const videoRef = useRef(null);
	const isDraggingRef = useRef(false);

	function formatTime(seconds) {
		// Calculate hours, minutes, and remaining seconds
		const hours = Math.floor(seconds / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const remainingSeconds = Math.floor(seconds % 60);

		// Format the time string
		let formattedTime = '';
		if (hours > 0) {
			formattedTime += `${hours.toString().padStart(2, '0')}:`;
		}
		formattedTime += `${minutes.toString().padStart(2, '0')}:${remainingSeconds
			.toString()
			.padStart(2, '0')}`;

		return formattedTime;
	}
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

	// Update current time as video plays
	const handleTimeUpdate = () => {
		const newTime = videoRef.current.currentTime;
		setSliderValue((newTime / duration) * 100);
	};

	// Handle input range change
	const handleChange = (_event, newValue) => {
		const newTime = (newValue / 100) * duration;
		setSliderValue(newValue);
		videoRef.current.currentTime = newTime;
		videoRef.current.play();
	};

	// Handle mouse down event on slider
	const handleMouseDown = () => {
		isDraggingRef.current = true;
		videoRef.current.pause();
	};

	// Handle mouse up event on document
	const handleMouseUp = () => {
		if (isDraggingRef.current) {
			isDraggingRef.current = false;
			// videoRef.current.currentTime = (sliderValue / 100) * duration;
		}
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
		<section className='reel-section'>
			<h1>Cinematographer</h1>

			<div className='reel-container'>
				<video
					className='reel'
					ref={videoRef}
					controls={false}
					onTimeUpdate={handleTimeUpdate}
					onEnded={() => setIsPlaying(false)}>
					<source src='videos/reel.mp4' type='video/mp4' />
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
					<span> {isPlaying ? 'Pause' : 'Play'}</span>
				</button>
				<Stack
					spacing={2}
					direction='row'
					sx={{ mb: 1 }}
					alignItems='center'
					width={'80%'}
					className='progress-bar-container'>
					<Slider
						ref={sliderRef}
						size='small'
						aria-label='duration'
						value={sliderValue}
						onChange={handleChange}
						onMouseDown={handleMouseDown}
						onChangeCommitted={handleMouseUp}
						sx={{ color: '#BE292E' }}
					/>
				</Stack>
				<div className='duration-container'>
					<p className='duration-listened'>
						{formatTime(videoRef.current?.currentTime)}
					</p>
					<button onClick={toggleFullscreen} className='full-screen-btn'>
						<FullscreenIcon className='full-screen-icon' />
					</button>
					<p className='total-duration'>{formatTime(duration)}</p>
				</div>
				<div className='social-buttons'>
					<button className='social-btn'>
						<img
							src={SocialCircle}
							alt='facebook account'
							className='social-media-circle'
						/>
						<FacebookIcon className='social-icon' />
					</button>
					<button className='social-btn'>
						<img
							src={SocialCircle}
							alt='linkedin account'
							className='social-media-circle'
						/>
						<LinkedInIcon className='social-icon' />
					</button>
					<button className='social-btn'>
						<img
							src={SocialCircle}
							alt='Twitter Account'
							className='social-media-circle'
						/>
						<XIcon className='social-icon' />
					</button>
				</div>
			</div>
		</section>
	);
};
