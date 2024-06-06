const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Configura dotenv para usar variables de entorno
dotenv.config();

const app = express();

// Conectar a la base de datos
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Middleware
app.use(express.json());

// Definir rutas
app.use('/api/auth', require('./routes/authRoutes'));
// Define otras rutas según sea necesario

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
