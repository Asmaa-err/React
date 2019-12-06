import {Schema, model} from 'mongoose';


const userSchema = new Schema({
	firstname: {
		type:String,
		required: true
		},
	lastname:{
		type:String,
		required: true
        },
    email:{
        type:String,
        required: true
        },
    
    type:{
        type: Schema.Types.ObjectId,
        ref : 'Type',
        //required: true
        },
    mdp:{
        type:String,
        required: true
        },
    mobile:{
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
        
    bd:{
        type:Date,
        required: true
        },
    nbannonce:{
        type:Number,
        //required: true
        },
    note:{
        type:Number,
        //required: true
        }
        
	
});

const User = model('User', userSchema);

export default User; 