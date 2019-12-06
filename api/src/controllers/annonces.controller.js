import Annonce from "../models/Annonce";

class AnnonceController{
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
			let annonces= await Annonce.find();
			body= {annonces: annonces, 'message': 'List annonces'};
		
		}catch(error){
			status= 500;
			body = {'message': error.message};
		}
		
		return response.status(status).json(body);
		
		let annonces= await Annonce.find();
		console.log(annonces);
	}
	
	static async create(request, response){
		let status = 200;
		let body = {};
		
		try{
			let annonce= await Annonce.create({
			title: request.body.title,
			description: request.body.description,
			prix : request.body.prix,
			selection: request.body.selection,
			dateA: request.body.dateA,
			user_id: request.body.user_id,
			rue: request.body.rue,
			cp: request.body.cp,
			ville: request.body.ville

			});
			body= {annonce, 'message':'annonce created'};
		
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
			let annonce= await Annonce.findById(id).populate('user_id');
			body= {annonce, 'message': 'Details '};
			
			
		} catch(error){
			status= 500;
			body = {'message': error.message};
		}
		
		return response.status(status).json(body);
		
		
	}

	static async delete(request, response){
		let status = 200;
		let body = {};

		try {
			let id = request.params.id;
			await Annonce.deleteOne({_id:id});
			body = {annonce, 'message': 'Details'};
		}
		catch(error){
			status = 500;
			body = {'message': error.message}
		}
		return response.status(status).json(body);
	}

	/*
	*update post
	*/
	static async update(request, response){
		let status = 200;
		let body = {};

		try {
			let id = request.params.id;
			let annonce= await Annonce.findById(id);
			delete annonce._id;
			Object.assign(annonce,request.body);
			await annonce.save();
			body = {annonce, 'message': 'Details'};
		}
		catch(error){
			status = 500;
			body = {'message': error.message}
		}
		return response.status(status).json(body);
	}
}
export default AnnonceController;