const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Configura dotenv para usar variables de entorno desde el archivo .env en la carpeta env
dotenv.config({ path: path.join(__dirname, 'env', '.env') });

const app = express();

// Verificar que las variables de entorno estén definidas
if (!process.env.MONGO_URI) {
    throw new Error('Falta la variable de entorno MONGO_URI');
}

if (!process.env.JWT_SECRET) {
    throw new Error('Falta la variable de entorno JWT_SECRET');
}

// Conectar a la base de datos
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Droguería');
});

// Definir rutas
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/protectedRoute')); // Añadir la ruta protegida
app.use('/api', require('./routes/productRoutes')); // Añadir la ruta de productos

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
