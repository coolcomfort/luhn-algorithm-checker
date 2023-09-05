import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// validates credit card numbers using a checksum formula.
function luhnCheck(num) {
  let arr = (num + "")
    .split("")
    .reverse()
    .map((x) => parseInt(x));
  let sum = arr.reduce((acc, val, idx) => {
    if (idx % 2 !== 0) {
      val *= 2;
      if (val > 9) val -= 9;
    }
    return acc + val;
  }, 0);

  return sum % 10 === 0;
}

app.get("/", (req, res) => {
  res.send("Working");
});

app.post("/validate", (req, res) => {
  const cardNumber = req.body.cardNumber;

  if (!cardNumber || typeof cardNumber !== "string") {
    return res
      .status(400)
      .json({ error: "Invalid input. Please provide a cardNumber." });
  }

  if (luhnCheck(cardNumber)) {
    res.json({ message: "Success: Valid credit card number." });
  } else {
    res.json({ error: "Error: Invalid credit card number." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
