import React from 'react';
import ReactDOM from 'react-dom';

import LandingPage from './components/Landing_Page/Landing.jsx';
import ListingResultPage from './components/ListingResult_Page/ListingResult.jsx';
import ListingDetailPage from './components/ListingDetail_Page/ListingDetail.jsx';
import ProfileDetailPage from './components/ProfileDetail_Page/ProfileDetail.jsx';


const PageContent = (props) => {

	switch (props.page) {

		case 'listing-result':
			return(<ListingResultPage data={props.data} />)
			break;

		case 'listing-detail':
			return(<ListingDetailPage data={props.data} />)
			break;

		case 'profile-detail':
			return(<ProfileDetailPage data={props.data} />)
			break;
			
		// case 'search':
		// 	break;
		
		// case 'account':
		// 	break;

		default:
			// console.log("Rendering Home");
			return ( <LandingPage data={props.data} /> );
			break;
	}
}

export default PageContent;