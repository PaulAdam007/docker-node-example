const express = require('express');
const app = express();
const port = 9000;
app.get('/', (req, res) => {
    res.send('<h1>Hello ABHISHEK !! welcome to ALLIANZ !! </h1>');
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
