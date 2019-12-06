import User from "../models/User";
class UserController{
	static async list(request, response){
		let status = 200;
		let body = {};
		
		/**
		*Plusieurs méthodes :
		Post.find() lister tous les posts //VOIR DOC MONGOOSE
		post.findOne(){slug: "monmon-titre"});
		Post.findById("6868");
		*/
		try{
			let users= await User.find();
			body= {users, 'message': 'List users'};
		
		}catch(error){
			status= 500;
			body = {'message': error.message};
		}
		
		return response.status(status).json(body);
		
		let users= await User.find();
		console.log(users);
	}
	
	static async create(request, response){
		let status = 200;
		let body = {};

	
		try{
			let user= await User.create({
			firstname: request.body.firstname,
			lastname: request.body.lastname,
			email: request.body.email,
			mdp: request.body.mdp,
			mobile: request.body.mobile,
			bd: request.body.bd,
			nbannonce: request.body.nbannonce,
			note: request.body.note,
			rue: request.body.rue,
			ville: request.body.ville,
			cp: request.body.cp,
			type: request.body.type

			});
			body= {user, 'message':'user created'};
		
		}catch(error){
			status= 500;
			body = {'message': error.message};
		}
		
		return response.status(status).json(body);
		
		
	}
	
	static async details(request, response){
		let status = 200;
		let body = {};
	
		try{
			let id = request.params.id;
			let user= await User.findById(id);
			body= {user, 'message': 'Details '};
			
			
		} catch(error){
			status= 500;
			body = {'message': error.message};
		}
		
		return response.status(status).json(body);
		
		
	}

	// static async login(request, response){
	// 	let status = 200;
	// 	let body = {email: request.body.email,
	// 		mdp: request.body.mdp};
	
	// 	try{
	// 		let email = request.params.email;
	// 		let user= await User.find(user => user.email === request.body.email);
			
	// 		body= {user, 'message': 'login '};
			
			
	// 	} catch(error){
	// 		status= 500;
	// 		body = {'message': error.message};
	// 	}
		
	// 	return response.status(status).json(body);
		
		
	// }


	static async detailstype(req, res){
		let status = 200;
		let body = {};
	
		try{
			let user= await User.findById(req.params.id).populate('type');
			body= {user, 'message': 'user Type '};
			
			
		} catch(error){
			status= 500;
			body = {'message': error.message};
		}
		
		return res.status(status).json(body);
		
		
	}


	static async delete(request, response){
		let status = 200;
		let body = {};

		try {
			let id = request.params.id;
			await User.deleteOne({_id:id});
			body = {user, 'message': 'Details'};
		}
		catch(error){
			status = 500;
			body = {'message': error.message}
		}
		return response.status(status).json(body);
	}

	static async update(request, response){
		let status = 200;
		let body = {};

		try {
			let id = request.params.id;
			let user= await User.findById(id);
			delete user._id;
			Object.assign(user,request.body);
			await user.save();
			body = {user, 'message': 'Details'};
		}
		catch(error){
			status = 500;
			body = {'message': error.message}
		}
		return response.status(status).json(body);
	}
	
	
}
export default UserController;