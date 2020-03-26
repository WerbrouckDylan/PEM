import mongoose from 'mongoose';
import validator from "validator";

const Schema = mongoose.Schema;

export const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 2
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: (value) =>
        validator.isEmail(value)
    },
    money: Number,
    // Put expenses and incomes in this and just use negative numbers for expenses
    moneyDifferences: [{
      amount: Number,
      // crontab string
      period: String
    }]
  },
  {
    timestamps: true
  }
);

export const User = mongoose.model('User', userSchema);
