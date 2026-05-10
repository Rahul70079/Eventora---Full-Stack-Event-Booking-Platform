const express = require('express');
const dotenv
const cors = require('cors');


const app = express();


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});