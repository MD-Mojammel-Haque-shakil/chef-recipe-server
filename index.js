const express = require ('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chef = require ('./data/chef.json');
app.use(cors());

app.get('/', (req, res)=>{
    res.send('chef is comming')
});

app.get('/chef', (req, res)=>{
    res.send(chef);
});

app.get('/chef/:id', (req, res)=>{
    const id = req.params.id;
    const filterChef= chef.filter(chef=>chef.id===  +id)
    res.send(filterChef)
})
app.listen(port, ()=>{
    console.log(`chef api is running on port: ${port}`)
})