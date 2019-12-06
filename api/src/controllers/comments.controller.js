import Comment from "../models/Comment";

class CommentsController{
	
	static async list(request, response){
		let status = 200;
		let body = {};
		
		try{
			let comments= await Comment.find();
			body= {comments, 'message': 'List comments'};
		
		}catch(error){
			status= 500;
			body = {'message': error.message};
		}
		
		return response.status(status).json(body);
		
	}

	static async create(req, res){
		let status = 200;
		let body = {};
	
		try{
			let comment= await Comment.create({
			title: req.body.title,
			content : req.body.content,
			user_id : req.body.user_id
			});
			body= {comment, 'message':'comment created'};
		
		}catch(error){
			status= 500;
			body = {'message': error.message};
		}
		
		return res.status(status).json(body);
		
		
	}
	
	static async details(req, res){
		let status = 200;
		let body = {};
	
		try{
			//dans un find on peu mettre une condition 
			let comment= await Comment.findById(req.params.id).populate('user_id');
			body= {comment, 'message': 'comment Details '};
			
			
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
			await Comment.deleteOne({_id:id});
			body = {comment, 'message': 'Details'};
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
			let comment= await Comment.findById(id);
			delete comment._id;
			Object.assign(comment,request.body);
			await comment.save();
			body = {comment, 'message': 'Details'};
		}
		catch(error){
			status = 500;
			body = {'message': error.message}
		}
		return response.status(status).json(body);
	}

	
}
export default CommentsController;