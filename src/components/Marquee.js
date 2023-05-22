import React, { useEffect, useState } from 'react';

const Marquee = () => {
	const [position, setPosition] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

	const text = `Visit my Twitter to take my AI-generated Mario quiz! Every day at 9:00 AM EDT my Mario Quiz Bot asks OpenAI (ChatGPT) to generate a quiz, then the bot posts the quiz as a Twitter poll and ultimately posts the answer at 5:00 PM EDT. Try it out and turn on notifications from my profile for a daily reminder!`;

	useEffect(() => {
		const interval = setInterval(() => {
			setPosition((prevPos) => {
				const newPos = prevPos - 1;
				if (newPos < -text.length * 1.75 * 10) {
					return window.innerWidth;
				}
				return newPos;
			});
		}, 5);
		return () => clearInterval(interval);
	}, [text]);

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
			{text}
		</div>
	);
};

export default Marquee;
