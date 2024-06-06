const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Cargar variables de entorno directamente (solución temporal)
const MONGO_URI = 'mongodb+srv://aescobararena:iu68chZpQEt3jbuB@aleescobarok.xdvarcm.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=aleescobarok';
const JWT_SECRET = 'mysecretkey';

// Verificar que la variable de entorno MONGO_URI esté definida
if (!MONGO_URI) {
    throw new Error('Falta la variable de entorno MONGO_URI');
}

// Conectar a la base de datos
mongoose.connect(MONGO_URI, {
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
// Define otras rutas según sea necesario

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
