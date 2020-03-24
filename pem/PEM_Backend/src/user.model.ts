import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2
    }
  },
  {
    timestamps: true
  }
);

export const User = mongoose.model('User', userSchema);
