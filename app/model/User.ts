import mongoose, { Schema, Document } from 'mongoose';

// Defining the structure of the Message document using TypeScript interface
export interface Message extends Document {
    content: string;
    createdAt: Date;
}

// Creating a Mongoose schema for the Message document
const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

// Defining the structure of the User document using TypeScript interface
export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[];
}

// Creating a Mongoose schema for the User document
const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, 'please provide an username'],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, 'please provide an email'],
        unique: true,
        match: [/.+\@.+\..+/, 'please use a valid email address']
    },
    password: {
        type: String,
        required: [true, 'please provide password'],
    },
    verifyCode: {
        type: String,
        required: [true, 'verify code is required'],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, 'verify code Expiry is required'],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true,
    },
    messages: [MessageSchema], // Embedding Message documents within the User document
}, { timestamps: true }); // Including timestamps for createdAt and updatedAt

// Defining the User model using Mongoose's model method. If the model already exists, use it; otherwise, create a new one.
const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model("User", UserSchema));

// Exporting the User model
export default User;
