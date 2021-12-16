import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "The user must have a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "The user must have a email address"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "The user must have a password"],
      select: false,
    },
    address: {
      cep: {
        type: String,
        required: true,
      },
      number: {
        type: Number,
        required: true,
      },
    },
    isAdmin: Boolean,
  },
  { versionKey: false }
);

userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
