import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
  id: String,
  username: String,
});
