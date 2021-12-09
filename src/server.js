const express = require('express');
const app = express();
const cors = require('cors');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./db.json')
const db = low(adapter)
const adapter2 = new FileSync('./db2.json')
const db2 = low(adapter2)
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
db.defaults({users:[]}).write()
db2.defaults({book:[]}).write()

app.get('/users',(req,res)=>{
    var u = db.get('users').value();
    res.send(u);
})

app.get('/book',(req,res)=>{
    var b = db2.get('book').value();
    res.send(b);
})
app.post('/', (req,res)=>{
    db.get('users').push({ name:req.body.name, userName:req.body.userName}).write()
    console.log(req.body);
    res.send({
        type: 'POST BERHASIL',
        name: req.body.name,
        userName: req.body.userName
    });
})
app.post('/book',(req,res)=>{
    db2.get('book')
        .push(req.body)
        .last()
        .assign({id: Date.now().toString()})
        .write()
        .then(book => res.send(book))
})
app.delete('/book/:id', (req, res) => {
    const id = req.params.id;
    db2.get('book').finByIdAndDelete(id, (err,res)=>{
        if (err){
            return res.status(404).send({error : " there is problem with deleting"})
        }
        res.send({success: " this book has been deleted"})
    })
  })

app.listen(3500, ()=>{
  console.log('Server @port Localhost:3500')
})
