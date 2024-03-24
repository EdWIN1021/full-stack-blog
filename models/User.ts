import { Schema, model, models, Document, Model } from "mongoose";
import bcrypt from "bcrypt";

// Define the interface for User
export interface IUser extends Document {
  email: string;
  hashedPassword?: string;
  name: string;
  image: string;
}

// Define the interface for User model with the static method
interface IUserModel extends Model<IUser> {
  hashPassword(password: string): Promise<string>;
}

// Define the schema for User
const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    hashedPassword: {
      type: String,
      selected: false,
    },
    image: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  {
    timestamps: true, // Add createAt and updateAt
    versionKey: false, // __v field will not be included

    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.hashedPassword;
      },
    },
    // toJSON: { virtuals: true },
    // toObject: { virtuals: true },
  }
);

// Define static methods for the User model
userSchema.statics.hashPassword = async function (
  password: string
): Promise<string> {
  return await bcrypt.hash(password, 10);
};

// Export the model if it exists, otherwise create and export it

export const User =
  (models.User as Model<IUser> & IUserModel) ||
  model<IUser, IUserModel>("User", userSchema);
