import express from 'express'; // ESM EcmaScript Modules
const app = express();

// Routing
app.get('/', (req, res) => {
  res.send('Hello World In Express With TypeScript');
});

export default app;