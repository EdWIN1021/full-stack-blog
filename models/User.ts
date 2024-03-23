import { Schema, model, models, Document } from "mongoose";

// Define the interface for User
export interface IUser extends Document {
  email: string;
  hashed_password: string;
}

// Define the schema for User
const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  hashed_password: { type: String, required: true }, // assuming hashed_password is required
});

// Export the model if it exists, otherwise create and export it
export default models.User || model<IUser>("User", userSchema);
