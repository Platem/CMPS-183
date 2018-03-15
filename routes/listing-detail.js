let db = require('../Firebase');

/*
 * GET profile page.
 */

module.exports = function(req, res) {
	let type = req.params.type;
	let id = req.params.id;

	db.getListing(type, id)
		.then(function(data) {
			// console.log(data);
			res.render('Index', {
		  	title: 'TBH - Listing',
		  	page: 'listing-detail',
		  	data: {
		  		item: data,
		  		type: type
		  	}
		  });
			let type1 = req.body.type,
			list = {
					name: req.body.name,
				},
			user = req.body.email == '' ? null : req.body.email;
			list.email = user ? user.replace(',', '.') : "";
		})
		.catch(function(err) {
			console.error(err);
			res.send(err);
		});
}