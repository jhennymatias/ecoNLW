import express from 'express';

const app = express();

app.get('/users', (request, response) =>{
    console.log("jhenny");
    response.send("bacon")
});

app.listen(3333)
