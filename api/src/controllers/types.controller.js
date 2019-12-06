import Type from "../models/Type";

class TypesController{

    static async list(request, response){
		let status = 200;
		let body = {};
		
		try{
			let types= await Type.find();
			body= {types, 'message': 'List des types'};
		
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
			let type= await Type.create({
			pers : req.body.pers
			});
			body= {type, 'message':'type created'};
		
		}catch(error){
			status= 500;
			body = {'message': error.message};
		}
		
		return res.status(status).json(body);
		
		
	}
	
	
}
export default TypesController;