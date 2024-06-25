import { motion } from "framer-motion";
import { styled } from "styled-components";

function Button({ children, bgColor, ...props }) {
	return (
		<ExploreBtn bgColor={bgColor} {...props}>
			{children}
		</ExploreBtn>
	);
}

Button.defaultProps = {
	children: null,
	bgColor: "#000",
};

export default Button;

const ExploreBtn = styled(motion.div)`
	width: 140px;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	border: 2px solid transparent;
	border-radius: 100px;
	background-image: ${(props) =>
			`linear-gradient(${props.bgColor}, ${props.bgColor})`},
		linear-gradient(90deg, #e9c2ec, #a6c0ee);
	background-origin: border-box;
	background-clip: content-box, border-box;
	color: white;
	a {
		padding: 18px;
	}
`;
