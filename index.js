const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

// const handler=(req,res)=>{
//     res.send('hello')
// }

app.get('/', (req, res) => {
    res.send('hello,md rehad.how are you?')
});

const users = [
    { id: 0, name: 'rehad', email: 'skrehad@gmail.com', phone: '01855515151' },
    { id: 1, name: 'irin', email: 'irin@gmail.com', phone: '01855515151' },
    { id: 2, name: 'saiful', email: 'saiful@gmail.com', phone: '01855515151' },
    { id: 3, name: 'korobi', email: 'korovi@gmail.com', phone: '01855515151' },
    { id: 4, name: 'hasan', email: 'hasan@gmail.com', phone: '01855515151' }
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hello', req.body)
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.listen(port, () => {
    console.log('listening', port)
});
