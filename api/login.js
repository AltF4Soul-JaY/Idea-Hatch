// api/login.js
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST method allowed" });
  }

  const { email, password } = req.body;

  // Dummy credentials (replace with DB later)
  const user = { email: "test@example.com", password: "123456" };

  if (email === user.email && password === user.password) {
    return res.status(200).json({ success: true, message: "Login successful" });
  } else {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }
}
