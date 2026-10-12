import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("I am doing Great. Keep going!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});