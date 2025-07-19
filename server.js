// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 🔗 Redirect to deep link
app.get('/invite/:code', (req, res) => {
  const inviteCode = req.params.code;
  const deepLink = `quickteams://invite/${inviteCode}`;
  console.log(`📲 Redirecting to deep link: ${deepLink}`);
  res.redirect(deepLink);
});

// 🧾 Serve apple-app-site-association
app.use('/.well-known', express.static(path.join(__dirname, 'public/.well-known'), {
  dotfiles: 'allow',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('apple-app-site-association')) {
      res.setHeader('Content-Type', 'application/json');
    }
  }
}));

// 🌐 Serve other static files if needed
app.use(express.static(path.join(__dirname, 'public')));

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
