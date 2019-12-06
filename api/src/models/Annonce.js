import {Schema, model} from 'mongoose';


const annonceSchema = new Schema({
	title: {
		type:String,
		required: true
		},
	description: {
		type:String,
		required: true
		},
	user_id: {
		type:Schema.Types.ObjectId,
		ref:'User',
		required: true
		},
	prix:{
		type:String
		},
	selection:{
			type:String,
			required: true
	},
	
        rue:{
            type:String,
            required: true
            },
        cp:{
            type:Number,
            required: true
            },
        ville:{
            type:String,
            required: true
            },
		dateA:{
			type:Date,
			default: Date.now()
			
		}

	
});

const Annonce = model('Annonce', annonceSchema);

export default Annonce; 