const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.redirect('http://marloandersen.com');
});

app.get('/book', (req, res) => {
    res.redirect('https://mailchi.mp/22d1ce5e6890/freebook');
});

app.get('/talk', (req, res) => {
    res.redirect('https://app.acuityscheduling.com/schedule.php?owner=17215139');
});

app.get('/thankyou', (req, res) => {
    res.redirect('https://mailchi.mp/308e5d215f9f/thankyou');
});

app.get('/thankyou', (req, res) => {
    res.redirect('https://mailchi.mp/308e5d215f9f/thankyou');
});

app.get('/jenny', (req, res) => {
    res.redirect('https://mailchi.mp/0cae789103e7/jenny');
    console.log(req);
});

app.get('/lissa', (req, res) => {
    res.redirect('https://mailchi.mp/a225e9e3cf97/lissa');
});

app.get('/marlo', (req, res) => {
    res.redirect('https://mailchi.mp/25a1de057108/marlo');
});

app.get('/summit', (req, res) => {
    res.redirect('https://mailchi.mp/25a1de057108/marlo');
});

app.get('/mary', (req, res) => {
    res.redirect('https://mailchi.mp/501200f36a80/mary');
});

app.listen(4010, () => console.log('listening on port 4010'));