const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');


const app = express();
dotenv.config();


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});