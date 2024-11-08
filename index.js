const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Để xử lý form
app.use(express.static('public')); // Nếu có file tĩnh
app.set('view engine', 'ejs'); // Sử dụng EJS làm engine

// Kết nối MongoDB
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb+srv://vanthien562004:vanthien562004@cluster0.bfjs9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
mongoose.connect(MONGODB_URL)
    .then(() => console.log('Connected to the database successfully'))
    .catch((error) => {
        console.error('Error connecting to the database', error);
        process.exit(1);
    });
    app.use(cors());


    app.get('/', (req, res) => {
        res.render('dash', { body: '' }); // Trang chủ không có nội dung cụ thể
    });
    
    app.get('/admin', (req, res) => {
        res.render('dash', { body: 'admin' }); // Truyền 'admin' khi truy cập vào /admin
    });
    
    app.get('/address', (req, res) => {
        res.render('dash', { body: 'address' }); // Truyền 'address' khi truy cập vào /address
    });
    
    app.get('/user', (req, res) => {
        res.render('dash', { body: 'user' }); // Truyền 'user' khi truy cập vào /user
    });
    app.get('/products', (req, res) => {
        res.render('dash', { body: 'products' }); // Render products management page
    });
    
    app.get('/categories', (req, res) => {
        res.render('dash', { body: 'categories' }); // Render categories management page
    });
    
    app.get('/orders', (req, res) => {
        res.render('dash', { body: 'orders' }); // Render orders management page
    });
    
    app.get('/reports', (req, res) => {
        res.render('dash', { body: 'reports' }); // Render reports page
    });
    
    app.get('/settings', (req, res) => {
        res.render('dash', { body: 'settings' }); // Render settings page
    });
    

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
