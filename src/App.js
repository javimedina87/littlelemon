import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

const MENU_ITEMS = [{
	name: 'Home',
	link: 'home'
}, {
	name: 'About',
	link: 'about'
}, {
	name: 'Menu',
	link: 'menu'
}, {
	name: 'Reservations',
	link: 'reservations'
}, {
	name: 'Order Online',
	link: 'order'
}, {
	name: 'Login',
	link: 'login'
}];

function App() {
	return (
		<>
			<Header imageUrl="little-lemon-banner.png" />
			<Nav items={MENU_ITEMS}/>
			<Main />
			<Footer />
		</>
	);
}

export default App;
