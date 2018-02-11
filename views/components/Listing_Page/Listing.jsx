import React from 'react';

import Navbar from '../Navbar/Nav.jsx';

import './Listing.css';

class Listing extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<Navbar bg={true} />
				<p>This is listing</p>
			</div>
		);
	}
}

export default Listing;