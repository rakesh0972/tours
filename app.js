const express = require("express");
const app = express();
app.use(express.json());
const tours = require('./dev-data/data/tours-simple.json')

app.get('/', (req, res) => {
    res.status(200).json({ message: `${__dirname}`, app: 'natours' })
})

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    });
})

app.post('/api/v1/tours', (req, res) => {
    console.log(req.body);
    res.send('data has been received');
})

app.get('/api/v1/tours/:id', (req, res) => {


    const id = parseInt(req.params.id)

    if (id > tours.length) {
        return res.status(400).json({
            status: 'failed'

        })
    }

    const tour = tours.find(a => a.id === id)
    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    })





})


app.patch('/api/v1/tours/:id', (req, res) => {


    const id = parseInt(req.params.id)

    if (id > tours.length) {
        return res.status(400).json({
            status: 'failed'

        })
    }

    const tour = tours.find(a => a.id === id)
    res.status(200).json({
        status: 'success',
        message: 'data has been updated'
    })





})

app.delete('/api/v1/tours/:id', (req, res) => {


    const id = parseInt(req.params.id)

    if (id > tours.length) {
        return res.status(400).json({
            status: 'failed'

        })
    }

    const tour = tours.find(a => a.id === id)
    res.status(204).json({
        status: 'success',

    })





})

const port = 3000
app.listen(port, () => {
    console.log(`server started  at ${port}`)
})
