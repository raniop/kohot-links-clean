const express = require('express');
const path = require('path');

const app = express();

// משרת את כל הקבצים שבתוך public כולל .well-known
app.use(express.static(path.join(__dirname, 'public')));

// מענה ל־/ כדי שלא תקבל Cannot GET /
app.get('/', (req, res) => {
  res.send('🚀 Kohot Links Server is running!');
});

// מאזין על הפורט של Railway או 8080 ברירת מחדל
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
