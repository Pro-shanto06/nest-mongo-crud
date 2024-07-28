import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import * as validator from 'validator';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    minlength: [3, 'First name must be at least 3 characters long'],
  })
  fname: string;

  @Prop({
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    minlength: [3, 'Last name must be at least 3 characters long'],
  })
  lname: string;

  @Prop({
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (email: string) => validator.isEmail(email),
      message: 'Please enter a valid email',
    },
  })
  email: string;

  @Prop({
    type: String,
    required: [true, 'Phone number is required'],
    minlength: [11, 'Phone number must be exactly 11 characters long'],
    validate: {
      validator: function (phone: string) {
        return /^01\d{9}$/.test(phone);
      },
      message: 'Please enter a valid phone number starting with 01',
    },
  })
  phone: string;

  @Prop({
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters long'],
    validate: {
      validator: function (password: string) {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
        return passwordRegex.test(password);
      },
      message:
        'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
    },
  })
  password: string;

  @Prop({
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  })
  userType: string;

  @Prop({
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  })
  status: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
