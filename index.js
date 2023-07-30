const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "It works"
    })
});


app.listen(3000, () => {
    console.log("Server is running");
})