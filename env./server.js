const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

// Configura dotenv para usar variables de entorno
dotenv.config();

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(express.json());

// Definir rutas
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
