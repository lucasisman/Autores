const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/favorite-authors', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to the database"))
    .catch(err => console.log("Database connection error:", err));

require('./routes/author.routes')(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
