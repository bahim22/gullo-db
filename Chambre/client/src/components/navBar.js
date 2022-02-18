import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom';

import React from 'react'

export default function Navbar() {
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<NavLink className='navbar-brand' to='/'>
					<img
						style={{ 'width': 50 + '%' }}
						src='./logoDed.jpg'
						alt='navbar'
					>
					</img>
				</NavLink>
				<button
					className='navbar-toggle'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle Nav'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/create'>
								Create New Record
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
