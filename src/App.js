import './App.css';
import Footer from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { init } from '@emailjs/browser';
function App() {
	init({
		publicKey: process.env.REACT_APP_EMAIL_JS_KEY,
	});
	return (
		<div className='App'>
			<Navbar></Navbar>
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
