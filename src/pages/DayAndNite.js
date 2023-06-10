import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function useHour(initialHour = 0) {
	const [hour, setHour] = useState(initialHour);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setHour((hour) => (hour + 0.1) % 24);
		}, 100);

		return () => clearInterval(intervalId);
	}, []);

	return hour;
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`;

const Landscape = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

const Sky = styled.div.attrs((props) => {
	const backgroundColor = (() => {
		const ratio = props.hour / 12;
		const red = Math.round(ratio * 0);
		const green = Math.round(ratio * 160);
		const blue = Math.round(ratio * 255);
		if (props.hour > 12) {
			const invertedRatio = (23 - props.hour) / 11;
			const invertedRed = Math.round(invertedRatio * 0);
			const invertedGreen = Math.round(invertedRatio * 160);
			const invertedBlue = Math.round(invertedRatio * 255);
			return `rgb(${invertedRed}, ${invertedGreen}, ${invertedBlue})`;
		}
		return `rgb(${red}, ${green}, ${blue})`;
	})();
	return {
		style: {
			backgroundColor,
		},
	};
})`
	width: 100%;
	height: 100%;
	position: relative;
	transition: background-color 0.5s ease-in-out;
`;

const Star = styled.div.attrs((props) => {
	return {
		style: {
			top: `${props.top}%`,
			left: `${props.left}%`,
			opacity: props.opacity,
		},
	};
})`
	width: 3px;
	height: 3px;
	border-radius: 50%;
	background-color: #f5f5f5;
	position: absolute;
	z-index: 1;
`;

const CelestialBody = styled.div.attrs((props) => {
	const bottom = bottomPosition(props.hour, props.type);
	const left = leftPosition(props.hour, props.type);
	const backgroundGradient = props.type === 'sun' ? '#ffdb58' : '#f5f5f5';
	return {
		style: {
			bottom,
			left,
			background: `linear-gradient(to bottom, #f5f5f5, ${backgroundGradient})`,
		},
	};
})`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	position: absolute;
	z-index: 2;
	box-shadow: 0px 0px 50px 20px #f5f5f5;
`;

function bottomPosition(hour, celestialBody) {
	const height = typeof window !== 'undefined' ? window.innerHeight : 0;
	const centerY = height / 2 + 450;
	const radiusY = height / 2 + 300;
	const oppositeHour = celestialBody === 'sun' ? (hour + 12) % 24 : hour;
	const angle = ((21 - oppositeHour) * Math.PI) / 12;
	const y = centerY + radiusY * Math.sin(angle);
	const invertedY = height - y;
	return `${invertedY}px`;
}

function leftPosition(hour, celestialBody) {
	const width = typeof window !== 'undefined' ? window.innerWidth : 0;
	const centerX = width / 2 - 75;
	const radiusX = width / 2 + 150;
	const oppositeHour = celestialBody === 'sun' ? (hour + 12) % 24 : hour;
	const angle = ((oppositeHour + 15) * Math.PI) / 12;
	const x = centerX + radiusX * Math.cos(angle);
	return `${x}px`;
}

const Stars = ({ hour }) => {
	const [opacity, setOpacity] = useState(1);
	useEffect(() => {
		if (hour >= 0 && hour < 12) {
			setOpacity(1 - hour / 12);
		} else {
			setOpacity((hour - 12) / 11);
		}
	}, [hour]);
	const starPositions = [
		{ top: 15, left: 10 },
		{ top: 25, left: 20 },
		{ top: 10, left: 40 },
		{ top: 30, left: 60 },
		{ top: 20, left: 70 },
		{ top: 5, left: 90 },
		{ top: 35, left: 95 },
		{ top: 25, left: 55 },
		{ top: 15, left: 80 },
		{ top: 10, left: 30 },
		{ top: 20, left: 50 },
		{ top: 5, left: 65 },
	];
	return starPositions.map((position, index) => (
		<Star key={index} top={position.top} left={position.left} opacity={opacity} />
	));
};

const DayAndNite = () => {
	const hour = useHour();

	return (
		<Container>
			<Landscape>
				<Sky hour={hour}>
					<CelestialBody type='sun' hour={hour} />
					<CelestialBody type='moon' hour={hour} />
					<Stars hour={hour} />
				</Sky>
			</Landscape>
		</Container>
	);
};

export default DayAndNite;
