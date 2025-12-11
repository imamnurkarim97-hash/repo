
const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req,res)=>res.json({status:'ok'}));
app.listen(process.env.PORT||4000, ()=>console.log('running'));
