import React, { useRef, useState } from 'react';
import RecentWorkCard from './RecentWorkCard';
import './RecentWorks.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function RecentWorks() {
	const cardCarouselRef = useRef(null);
	const [playingVideo, setPlayingVideo] = useState(null);
	const videos = [
		{source: 'https://kng-portfolio-videos.s3.amazonaws.com/RECURVE.mp4', title: 'Recurve',details: '2nd Assistant Camera'},
		{source: 'https://kng-portfolio-videos.s3.amazonaws.com/Lust-for-a-Shesquatch.mp4',  title: 'Lust for a Shesquatch',details: '1st Assistant Camera'},
		{source: 'https://kng-portfolio-videos.s3.amazonaws.com/In-My-Head.mp4',  title: 'In My Head!!!',details: 'Director of Photography'},
		{source: 'https://kng-portfolio-videos.s3.amazonaws.com/are-you-bored-yet.mp4',  title: 'Are You Bored Yet ',details: '1st Assistant Camera'},
		{source: 'https://kng-portfolio-videos.s3.amazonaws.com/Spittin-Bars.mp4',  title: 'Spittin Bars',details: 'Cinematographer'},
		{source: 'https://kng-portfolio-videos.s3.amazonaws.com/La-Fem.mp4',  title: 'La Fem',details: '1st Assistant Camera and Gaffer'},
		{source: 'https://kng-portfolio-videos.s3.amazonaws.com/Tastebuds_FINAL.mp4',  title: 'Tastebuds', details: 'Assistant Grip'},
	]

	const handlePlayPause = (index) => {
		setPlayingVideo(index);
	};

	const scrollRight = () => {
		if (cardCarouselRef.current) {
			cardCarouselRef.current.scrollLeft += 320;
		}
	};

	const scrollLeft = () => {
		if (cardCarouselRef.current) {
			cardCarouselRef.current.scrollLeft -= 320;
		}
	};
	return (
		<section className='recent-works-section'>
			<div className='header-container'>
				<h2>My recent works</h2>
				<div className='scroll-btns'>
					{' '}
					<button className='scroll-btn' onClick={scrollLeft}>
						<KeyboardArrowLeftIcon fontSize='large' className='scroll-icon' />
					</button>
					<button className='scroll-btn' onClick={scrollRight}>
						<KeyboardArrowRightIcon fontSize='large' className='scroll-icon' />
					</button>
				</div>
			</div>

			<div className='card-carousel' ref={cardCarouselRef}>
				{videos.map((video, i) => (
					<RecentWorkCard
						source={video.source}
						index={i}
						isPlaying={playingVideo === i}
						onPlayPause={handlePlayPause}
						key={i}
						title={video.title}
						details={video.details}
					/>
				))}
			</div>
		</section>
	);
}
