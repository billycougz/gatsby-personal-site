import React, { useState } from 'react';
import styled from 'styled-components';
import blockImage from '../assets/icon.png';

const MenuContainer = styled.div`
	position: absolute;
	display: inline-block;
	z-index: 999;
	margin: 1em;
`;

const MenuButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	padding: 0.5rem;
`;

const Image = styled.img`
	height: 50px;
	width: 50px;
`;

const MenuItems = styled.ul`
	position: absolute;
	list-style-type: none;
	padding: 0;
	margin: 0;
	white-space: nowrap;
	background-color: #fff;
	border: 1px solid #ccc;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
	z-index: 1;
	display: ${({ open }) => (open ? 'block' : 'none')};
`;

const MenuItem = styled.li`
	padding: 0.5rem;
	cursor: pointer;
	background-color: ${({ selected }) => (selected ? '#eaeaea' : 'transparent')};

	&:hover {
		background-color: ${({ selected }) => (selected ? '#eaeaea' : '#f0f0f0')};
	}
`;

const Menu = ({ options, onClick, selectedOption }) => {
	const [open, setOpen] = useState(false);

	const handleButtonClick = () => {
		setOpen(!open);
	};

	const handleOutsideClick = (event) => {
		if (!menuRef.current.contains(event.target)) {
			setOpen(false);
		}
	};

	const menuRef = React.useRef(null);

	React.useEffect(() => {
		document.addEventListener('click', handleOutsideClick);
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	return (
		<MenuContainer ref={menuRef}>
			<MenuButton onClick={handleButtonClick}>
				<Image src={blockImage} />
			</MenuButton>
			<MenuItems open={open}>
				{options.map(({ id, name }) => (
					<MenuItem key={id} selected={id === selectedOption} onClick={() => onClick(id)}>
						{name}
					</MenuItem>
				))}
			</MenuItems>
		</MenuContainer>
	);
};

export default Menu;
