import mongoose from "mongoose";
const user = mongoose.Schema({
  firstName: {
    required: true,
    type: String,
  },
  secondName: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  confirmpassword: {
    type: String,
  },
});
const userSchema = mongoose.model("userschema", user);
export default userSchema;
