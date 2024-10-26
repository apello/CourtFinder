const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req,res) => {
    res.json({ message: "ok" });
});

app.post('/route/:id', (req,res) => {
    const { id } = req.params;


    res.json({
        message: `We recieved your ${id}`
    })
})

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`); 
});