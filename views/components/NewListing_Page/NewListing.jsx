import React from 'react';

import Navbar from '../Navbar/Nav.jsx';

import './NewListing.css';

class NewListing extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Navbar navClass={'bg-danger custom'} />
				<div id="detail-search" className="container-fluid">
					<form action="/listing" className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
						<div className="row">
							<div className="form-group col-12 col-md-4 col-lg-3">
						    <select className="form-control" id="landing-search-select" name="type" defaultValue="offers">
						      <option value="offers">I want to buy...</option>
						      <option value="requests">I want to sell...</option>
						    </select>
							</div>
							<div className="form-group col-12 col-md-8 col-lg-6">
								<input type="text" className="form-control" id="landing-search-text" name="query" placeholder="Search textbook..." defaultValue="" />
							</div>
							<div className="form-group col-12 col-lg-3">
								<a className="glass"><button type="submit" className="btn btn-block btn-danger"><span className="fa fa-search"></span> Search</button></a>
							</div>
						</div>
					</form>
				</div>
				<div id="new" className="container">
					<div className="jumbotron">
						<form action="/new" method="POST">
							<div className="form-row">
								<div className="form-group col-12 col-md-4 col-lg-3">
									<label htmlFor="new-type">Listing Type</label>
									<select name="type" id="new-type" className="form-control">
										<option value="requests">I want to buy...</option>
						      	<option value="offers">I want to sell...</option>
									</select>
								</div>
								<div className="form-group col-12 col-md-8 col-lg-9">
									<label htmlFor="new-title">*Title</label>
									<input name="title" type="text" id="new-title" className="form-control"/>
								</div>
								<div className="form-group col-12 col-md-8 offset-md-4 col-lg-9 offset-lg-3">
									<label htmlFor="new-author">*Author</label>
									<input name="author" type="text" id="new-author" className="form-control"/>
								</div>
								<div className="form-group col-12 col-md-8 offset-md-4 col-lg-9 offset-lg-3">
									<label htmlFor="new-isbn">ISBN</label>
									<input name="isbn" type="text" id="new-isbn" className="form-control"/>
								</div>
								<div className="form-group col-12 col-md-8 offset-md-4 col-lg-9 offset-lg-3">
									<label htmlFor="new-edition">Edition</label>
									<input name="edition" type="text" id="new-edition" className="form-control"/>
								</div>
								<div className="form-group col-12 col-md-8 offset-md-4 col-lg-9 offset-lg-3">
									<label htmlFor="new-course">Course</label>
									<input name="course" type="text" id="new-course" className="form-control"/>
								</div>
								<div className="form-group col-12 col-md-8 offset-md-4 col-lg-9 offset-lg-3">
									<label htmlFor="new-tags">Extra tags</label>
									<input name="tags" type="text" id="new-tags" className="form-control"/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default NewListing;