import React from 'react';
import Layout from './Layout.jsx';
import PageContent from './PageContent.jsx';
import './global.css';

class Index extends React.Component {

	render() {
		return (
			<Layout title={this.props.title}>
				<PageContent page={this.props.page}/>
			</Layout>
		);

	}
}

export default Index;
