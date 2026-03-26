const express = require("express");
const crypto = require("crypto");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/check-password", async (req, res) => {
    const { password } = req.body;

    // Step 1: Hash password (SHA-1)
    const hash = crypto.createHash("sha1").update(password).digest("hex").toUpperCase();

    const prefix = hash.substring(0, 5);
    const suffix = hash.substring(5);

    try {
        // Step 2: Call API
        const response = await axios.get(`https://api.pwnedpasswords.com/range/${prefix}`);

        const hashes = response.data.split("\n");

        let found = false;
        let count = 0;

        // Step 3: Compare locally
        for (let line of hashes) {
            const [hashSuffix, breachCount] = line.split(":");

            if (hashSuffix === suffix) {
                found = true;
                count = breachCount;
                break;
            }
        }

        res.json({
            breached: found,
            count: found ? count : 0
        });

    } catch (err) {
        res.status(500).json({ error: "Error checking password" });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});