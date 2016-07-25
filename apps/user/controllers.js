"use strict";
const User = require('../user/models').User;

const UserController = (server)=>{

	server.route('/')
		.get((req, res) =>{

			res.render('users/home.html');
		});

	server.route('/usuarios/')

		.get( (req, res)=> {
			let num_page = 1,
				count;
			User
			.count()
			.then(function ( date ){
				count = parseInt((date/20)+1);
			});
			console.log(count);
			User
			.find()
			.limit(20)
			.then(function (users){
				let context = {
					users : users,
					num_page: num_page,
					count: count
				}
				res.render('users/users.html', context);
			});
		});


	server.route('/usuarios/page/:slug_page')
		.get( (req, res)=> {
			
			let page = (parseInt(req.params.slug_page)-1)*20,
			    num_page = parseInt(req.params.slug_page),
			    search = req.query.search,
				count;
			User
			.count()
			.then( date =>{
				count = parseInt((date/20)+1);
			});
			User
			.find()
			.skip(page)
			.limit(20)
			.then( users=>{
				let context = {
					users : users,
					num_page: num_page,
					count: count
				}
				res.render('users/users.html', context);
			});
		});
};

module.exports = UserController;