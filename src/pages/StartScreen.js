import * as React from 'react';
import styled from 'styled-components';
import COIN_SOUND_IMPORT from '../assets/coin-sound.mp3';
import Marquee from '../components/Marquee';

const Container = styled.div`
	height: 100vh;
	font-family: 'Press Start 2P', cursive;
`;

const GROUND_HEIGHT = '100px';
const GROUND_BORDER_HEIGHT = '5px';
const LANDSCAPE_BOTTOM = `calc(${GROUND_HEIGHT} + ${GROUND_BORDER_HEIGHT})`;

const COLORS = {
	ACCENT: '#ffc4b7',
};

const Sky = styled.div`
	height: ${`calc(100vh - ${GROUND_HEIGHT})`};
	background: #7085ff;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 5px;
`;

const Ground = styled.div`
	height: ${GROUND_HEIGHT};
	background: #e45e10;
	border-top: ${GROUND_BORDER_HEIGHT} dashed ${COLORS.ACCENT};
	position: relative;
`;

const Hill = styled.div`
	width: 200px;
	height: 150px;
	background-color: #1c8415;
	border-top-left-radius: 110px;
	border-top-right-radius: 110px;
	border: 2px dashed black;
	border-bottom: 0;
	position: absolute;
	inset: ${`auto auto ${LANDSCAPE_BOTTOM} 30px`};
`;

const Bush = styled(Hill)`
	width: 150px;
	height: 50px;
	background-color: #a7be00;
	inset: ${({ position }) => position};
`;

const Bushes = () => {
	const positions = [
		`auto 130px ${LANDSCAPE_BOTTOM} auto`,
		`auto 30px ${LANDSCAPE_BOTTOM} auto`,
		`auto 230px ${LANDSCAPE_BOTTOM} auto`,
	];
	return positions.map((position) => <Bush key={position} position={position} />);
};

const TitleBox = styled.div`
	max-width: 800px;
	aspect-ratio: 2.69;
	z-index: 690;
	background: #e45e10;
	box-shadow: 5px 5px 0px black;
	margin-top: ${GROUND_HEIGHT};
	margin-right: 2px;
	text-align: center;
	display: flex;
	position: relative;
	align-items: center;
	border-top: 5px solid ${COLORS.ACCENT};
	border-left: 5px solid ${COLORS.ACCENT};
	@media only screen and (max-height: 550px) {
		margin-top: 0;
	}
`;

const TitleBoxContent = styled.div`
	color: ${COLORS.ACCENT};
	font-size: calc(100vw / 8);
	line-height: 1.25em;
	text-shadow: calc(1em / 10) calc(1em / 10) 0px black;
	@media only screen and (min-width: 800px) {
		font-size: 110px;
	}
`;

const Copyright = styled.div`
	position: absolute;
	bottom: -1.5em;
	right: 0;
	font-size: 1rem;
	text-shadow: none;
	font-weight: bold;
	color: ${COLORS.ACCENT};
	line-height: 1em;
	@media only screen and (max-width: 400px) {
		font-size: 1rem;
	}
`;

const OptionContainer = styled.div`
	margin-top: 2rem;
	z-index: 690;
`;

const Option = styled.a`
	color: white;
	display: block;
	text-decoration: none;
	margin-top: 1rem;
`;

const Nail = styled.span`
	width: 10px;
	height: 10px;
	position: absolute;
	background-color: ${COLORS.ACCENT};
	box-shadow: 3px 3px 0px black;
	inset: ${({ position }) => position};
`;

const Nails = () => {
	const positions = ['10px auto auto 10px', '10px 10px auto auto', 'auto 10px 10px auto', 'auto auto 10px 10px'];
	return positions.map((position) => <Nail key={position} position={position} />);
};

const StartScreen = () => {
	const coinSoundRef = React.useRef(null);
	const playCoinSound = () => {
		coinSoundRef.current.volume = 0.02;
		coinSoundRef.current.play();
	};
	return (
		<Container>
			<Sky>
				<Marquee />
				<TitleBox>
					<Nails />
					<TitleBoxContent>WILLIAM COUGAN</TitleBoxContent>
					<Copyright>© 2023 WILLIAM COUGAN</Copyright>
				</TitleBox>
				<OptionContainer onClick={playCoinSound}>
					<Option href='https://www.linkedin.com/in/williamcougan/' target='_blank'>
						1 LINKEDIN
					</Option>
					<Option href='https://github.com/billycougz' target='_blank'>
						2 GITHUB
					</Option>
					<Option href='https://twitter.com/will_cougar' target='_blank'>
						3 TWITTER
					</Option>
					<audio ref={coinSoundRef} src={COIN_SOUND_IMPORT} />
				</OptionContainer>
			</Sky>
			<Ground>
				<Hill />
				<Bushes />
			</Ground>
		</Container>
	);
};

export default StartScreen;
