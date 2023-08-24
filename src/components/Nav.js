import './Nav.css';

const Nav = ({ items }) => {
	return (
		<nav>
			<ul>
				{items.map(el =>
					<li key={el.name}>
						<a href={el.link}>{el.name}</a>
					</li>
				)}
			</ul>
		</nav>
	)
}

export default Nav;