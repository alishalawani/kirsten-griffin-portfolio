import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainView } from './Components/MainView/MainView';
import AboutMe from './Components/AboutMe/AboutMe';
import Portfolio from './Components/Portfolio/Portfolio';
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <div>Page doesn't exist</div>,
		children: [
			{
				path: '/',
				element: <MainView />,
			},
			{
				path: "/about",
				element: <AboutMe />,
			},
			{
				path: "/portfolio",
				element: <Portfolio />,
			},
		],
	},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
