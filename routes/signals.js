const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { token, totalBet, betLine, betValue } = req.body;
    // Validate required fields
    if (!token || !totalBet || !betLine || !betValue) {
        return res.status(400).json({ status: false, message: "Missing required fields" });
    }

    const randomNums = Array.from({ length: 15 }, () => Math.floor(Math.random() * 10 + 1)); // Random numbers between 0-14

    // Generate unique winpaylines based on betLine
    const winpaylinesCount = Math.min(1, betLine); // Ensure max length is 25
    const winpaylinesSet = new Set();
    while (winpaylinesSet.size < winpaylinesCount) {
        winpaylinesSet.add(Math.floor(Math.random() * 15)); // Ensure uniqueness
    }
    const winpaylines = Array.from(winpaylinesSet);

    // Calculate moneyResult (example formula: betValue * number of winpaylines)
    const moneyResult = winpaylines.length * betValue;
    res.json({
        status: true,
        winpaylines: winpaylines,
        randomNums: randomNums,
        moneyResult: moneyResult,
        message: "Spin successful"
    });
});

module.exports = router;
