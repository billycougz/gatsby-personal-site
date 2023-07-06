import React, { useEffect, useState } from 'react';

const Marquee = () => {
	const [position, setPosition] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
	const [content, setContent] = useState('');

	const fetchContent = async () => {
		const gistUrl = 'https://api.github.com/gists/ce0eb2a14fd6e6b98f3e82fc7b82e656';
		const gist = await fetch(gistUrl).then((res) => res.json());
		const gistContent = gist?.files['personal-site-content']?.content;
		if (gistContent) {
			const { scrollingSkyText } = JSON.parse(gistContent);
			setContent(scrollingSkyText);
		}
	};

	useEffect(() => {
		fetchContent();
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
