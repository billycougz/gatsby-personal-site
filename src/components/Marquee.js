import React, { useEffect, useState } from 'react';
import siteConfig from '../config/site-config';

const Marquee = () => {
	const [position, setPosition] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
	
	const content = siteConfig.marquee;
	
	useEffect(() => {
		const interval = setInterval(() => {
			setPosition((prevPos) => {
				const newPos = prevPos - 1;
				if (newPos < -content.length * 1.75 * 10) {
					return window.innerWidth;
				}
				return newPos;
			});
		}, 5);
		return () => clearInterval(interval);
	}, [content]);

	return (
		<div
			style={{
				position: 'absolute',
				whiteSpace: 'nowrap',
				left: position,
				color: ' white',
				marginTop: '32px',
			}}
		>
			{content}
		</div>
	);
};

export default Marquee;
