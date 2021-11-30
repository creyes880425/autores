const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

require('./config/mongoose.config');

app.use(cors());

app.use( express.json() );
app.use( express.urlencoded( {extended: true }));


app.get('/api', (req, res) => {
    res.json({ message: 'Hola Express!!', ok: true });
});

require('./routes/autor.routes')(app);

app.listen(port, () => console.log(`Servidor escuchando el puerto ${port}`));

