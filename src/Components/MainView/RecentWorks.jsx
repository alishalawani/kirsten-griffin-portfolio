import React, { useRef } from 'react';
import RecentWorkCard from './RecentWorkCard';
import './RecentWorks.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function RecentWorks() {
	const cardCarouselRef = useRef(null);

	const handleScroll = (width) => {
		if (cardCarouselRef.current) {
			cardCarouselRef.current.scrollLeft += width;
		}
		console.dir(cardCarouselRef.current);
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
      <div className="header-container"><h2>My recent works</h2>
			<div className='scroll-btns'>
				{' '}
				<button className='scroll-btn' onClick={scrollLeft}>
					<KeyboardArrowLeftIcon fontSize='large' className='scroll-icon'/>
				</button>
				<button className='scroll-btn' onClick={scrollRight}>
					<KeyboardArrowRightIcon fontSize='large' className='scroll-icon'/>
				</button>
			</div></div>
			

			<div className='card-carousel' ref={cardCarouselRef}>
				{[1, 2, 3, 4].map((card, i) => (
					<RecentWorkCard source={'videos/IMG_2968.mp4'} index={i} key={i} />
				))}
			</div>
		</section>
	);
}
