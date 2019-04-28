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

app.listen(4010, () => console.log('listening'));