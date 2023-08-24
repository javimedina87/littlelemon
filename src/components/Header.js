const Header = ({ imageUrl }) => {
	return (
		<header>
			<img src={imageUrl} alt={imageUrl} />
		</header>
	)
}

export default Header;