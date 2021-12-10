import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
export const generateToken = async ({
  firstName,
  secondName,
  email,
  password,
}) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  return jwt.sign(
    { firstName, email, password: hashedPassword },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};
