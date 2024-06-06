import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const userSchema = new Schema({
	name:  {
		type: String,
		required: true
	},
	email:  {
		type: String,
		required: true
	}
});

export const User = model('User', userSchema, 'users')
