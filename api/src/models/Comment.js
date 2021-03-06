import {Schema, model} from 'mongoose';


const commentSchema = new Schema({
	title: {
		type:String,
		required: true
		},
	content:{
		type:String,
		required: true
		},
		
	user_id: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
	
	
	
});

const Comment = model('Comment', commentSchema);

export default Comment; 