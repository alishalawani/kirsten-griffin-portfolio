import React from 'react';
import './Contact.css';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import Button from '@mui/material/Button';
import { sendForm } from '@emailjs/browser';
export default function Contact() {
	const onSubmit = (event) => {
		event.preventDefault();
		// these IDs from the previous steps
		sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_ID, process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,document.getElementById('contact-form')).then(
			() => {
				console.log('SUCCESS!');
			},
			(error) => {
				console.log('FAILED...', error);
			}
		);
	};
	return (
		<section id='contact-me' className='contact-section'>
			<div className='first'>
				<h1 className='get-in-touch'>Get in touch</h1>
				<p className='desc'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem
				</p>
				<div className='contact-rows'>
					<div className='contact-row'>
						<CallIcon className='contact-icon' />
						<p className='contact-row-text'>
							<a href='tel:+18176579294'>(817)657-9294</a>
						</p>
					</div>
					<div className='contact-row'>
						<EmailIcon className='contact-icon' />
						<p className='contact-row-text'>kgriffin@dummy-email.com </p>
					</div>
					<div className='contact-row'>
						<PlaceIcon className='contact-icon' />
						<p className='contact-row-text'>USA, Texas</p>
					</div>
				</div>
			</div>
			<form className='second' id="contact-form">
				<div className='names'>
					<input
						type='text'
						name='first_name'
						id='first_name'
						className='input name'
						placeholder='First name'
					/>
					<input
						type='text'
						name='last_name'
						id='last_name'
						className='input name'
						placeholder='Last name'
					/>
				</div>

				<input
					type='tel'
					name='phone'
					id='phone'
					placeholder='Phone'
					className='input phone'
				/>
				<input
					type='email'
					name='email'
					id='email'
					className='input email'
					placeholder='Email'
				/>
				<textarea
					type='text'
					name='message'
					id='message'
					placeholder='Message...'
					className='input message'
				/>
				<Button
					variant='contained'
					sx={{
						backgroundColor: '#BE292E',
						borderRadius: '100px',
						textTransform: 'none',
						maxHeight: '40px',
						paddingRight: 5,
						paddingLeft: 5,
						marginTop: 3,
					}}
					className='send'
					onClick={onSubmit}>
					Send
				</Button>
			</form>
		</section>
	);
}
