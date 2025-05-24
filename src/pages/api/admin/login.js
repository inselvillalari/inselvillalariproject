import jwt from "jsonwebtoken";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ message: "Yalnızca POST isteği desteklenir." });
  }

  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
    return res.status(200).json({ token });
  } else {
    return res.status(401).json({ message: "Geçersiz bilgiler" });
  }
}
