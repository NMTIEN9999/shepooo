const express = require('express');
const path = require('path');
const app = express();
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/products', productRoutes);
app.use('/users', userRoutes);

// View render
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Shepoo running at http://localhost:${PORT}`);

});
