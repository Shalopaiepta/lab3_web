// server/index.js
require('dotenv').config(); // <-- САМАЯ ПЕРВАЯ СТРОКА
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

// 1. НАСТРОЙКА
const app = express();
const PORT = process.env.PORT || 5001; // Порт для бэкенда

// 2. ПОДКЛЮЧЕНИЕ К БД
// Данные для подключения берутся из .env файла
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
console.log('Проверка переменных окружения:');
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_DATABASE:', process.env.DB_DATABASE);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_PORT:', process.env.DB_PORT);
// 3. MIDDLEWARE (Промежуточное ПО)
app.use(cors()); // Разрешаем запросы с других доменов (с твоего React-приложения)
app.use(express.json()); // Позволяем серверу читать JSON из тела запроса

// 4. API ЭНДПОИНТЫ (Маршруты)

// GET: Получить все курсы
app.get('/api/courses', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM courses ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// GET: Получить все отзывы
app.get('/api/reviews', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM reviews ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// POST: Создать новую заявку
app.post('/api/applications', async (req, res) => {
  try {
    // Получаем данные из тела запроса (то, что прислал React)
    const { name, email, phone, course, age, experience, message } = req.body;

    // Вставляем данные в БД
    // ($1, $2 ... — это защита от SQL-инъекций, вместо '"+name+"')
    const newApplication = await pool.query(
      `INSERT INTO applications (name, email, phone, course, age, experience, message) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) 
       RETURNING *`, // RETURNING * вернет нам созданную запись
      [name, email, phone, course, age, experience, message]
    );

    console.log('Новая заявка сохранена:', newApplication.rows[0]);
    res.status(201).json(newApplication.rows[0]); // Отвечаем успехом
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// 5. ЗАПУСК СЕРВЕРА
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});