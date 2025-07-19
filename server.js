const express = require('express');
const path = require('path');

const app = express();

// ✅ קובץ apple-app-site-association
app.get('/.well-known/apple-app-site-association', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(path.join(__dirname, 'public', '.well-known', 'apple-app-site-association'));
});

// ✅ דינמיקת הזמנה
app.get('/invite/:id', (req, res) => {
  res.send(`💡 Invite link received! ID = ${req.params.id}`);
});

// ✅ קבצים סטטיים
app.use(express.static(path.join(__dirname, 'public')));

// ✅ דף ברירת מחדל
app.get('/', (req, res) => {
  res.send('🚀 Kohot Links Server is running!');
});

// ✅ הפעלת השרת
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
