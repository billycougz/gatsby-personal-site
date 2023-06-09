import React, { useEffect, useRef, useState } from 'react';
import { withPrefix } from 'gatsby';
import styled from 'styled-components';
import MarioCurtainImg from '../../assets/mario-curtain.png';

const Container = styled.div`
	background: url(${MarioCurtainImg});
	font-family: 'Press Start 2P', cursive;
	height: 100vh;
	width: 100vw;
	position: absolute;
`;

const ControlContainer = styled.div`
	position: absolute;
	top: 3em;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	color: white;
	padding: 1em;
	h1 {
		margin-bottom: 0;
	}
`;

const Button = styled.button`
	all: unset;
	color: white;
	background-color: #336699;
	padding: 10px 20px;
	border-radius: 4px;
	cursor: pointer;
`;

const FlappyTanooki = () => {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			// Load Phaser from the browser because Gatsby can't handle it
			const script = document.createElement('script');
			script.src = 'https://cdnjs.cloudflare.com/ajax/libs/phaser/3.55.2/phaser.min.js';
			script.async = true;
			script.onload = () => {
				setPhaser(window.Phaser);
			};
			document.body.appendChild(script);
			return () => {
				document.body.removeChild(script);
			};
		}
	}, []);

	const gameContainerRef = useRef(null);
	const [gameInstance, setGameInstance] = useState(null);
	const [score, setScore] = useState(0);
	const [Phaser, setPhaser] = useState(null);

	const startGame = () => {
		if (gameInstance) {
			const canvas = document.querySelector('canvas');
			const parentElement = canvas.parentNode;
			parentElement.removeChild(canvas);
			gameInstance.destroy();
			setGameInstance(null);
			setScore(0);
		}
		const game = new Phaser.Game({
			type: Phaser.AUTO,
			transparent: true,
			parent: gameContainerRef.current,
			scale: {
				mode: Phaser.Scale.FIT,
				autoCenter: Phaser.Scale.CENTER_BOTH,
			},
			physics: {
				default: 'arcade',
				arcade: {
					gravity: { y: 800 },
					debug: false,
				},
			},
		});

		let gameScore = 0;
		let player;
		let pipes;

		function preload() {
			this.load.image('background', withPrefix('/background.png'));
			this.load.image('bird', withPrefix('/bird.png'));
			this.load.image('pipe', withPrefix('/pipe.png'));
		}

		function create() {
			const { width, height } = game.scale;
			this.add.image(width * 0.5, height * 0.5, 'background').setDisplaySize(width, height);

			pipes = this.physics.add.group();

			player = this.physics.add.sprite(100, 300, 'bird').setScale(0.1);
			player.setCollideWorldBounds(true);
			player.setGravityY(-300);

			this.physics.add.collider(player, pipes, gameOver, null, this);
			createPipe(this);
			this.time.addEvent({ delay: 2500, callback: createPipe, args: [this], loop: true });
			this.input.keyboard.on('keydown-SPACE', flapBird, this);
			this.input.on('pointerdown', flapBird, this);
		}

		function update() {
			if (player.y < 0 || player.y > 600) {
				gameOver.call(this);
			}
			const currentPipe = pipes.getChildren()[1 + gameScore * 2];
			if (currentPipe && currentPipe.getBounds().right < player.getBounds().left) {
				gameScore = gameScore + 1;
				setScore(gameScore);
			}
		}

		function createPipe(scene) {
			const pipeTopY = Phaser.Math.Between(-200, -100);
			const pipeBottomY = pipeTopY + 800;
			const pipeTop = pipes.create(800, pipeTopY, 'pipe');
			const pipeBottom = pipes.create(800, pipeBottomY, 'pipe');
			pipeTop.body.velocity.x = -200;
			pipeBottom.body.velocity.x = -200;
			pipeTop.body.allowGravity = false;
			pipeBottom.body.allowGravity = false;
			pipeTop.body.immovable = true;
			pipeBottom.body.immovable = true;
		}

		function flapBird() {
			player.setVelocityY(-300);
		}

		function gameOver() {
			this.physics.pause();
			game.destroy();
			alert('Game Over!');
		}

		game.scene.add('flappyBirdScene', {
			preload,
			create,
			update,
		});

		game.scene.start('flappyBirdScene');
		setGameInstance(game);
	};

	const handleStartButtonClick = (e) => {
		startGame();
		e.currentTarget.blur();
	};

	return (
		<Container>
			<ControlContainer>
				<Button onClick={handleStartButtonClick}>{gameInstance ? 'Restart' : 'Start'}</Button>
				{gameInstance && <h1>{score}</h1>}
			</ControlContainer>
			<div ref={gameContainerRef} />
		</Container>
	);
};

export default FlappyTanooki;
