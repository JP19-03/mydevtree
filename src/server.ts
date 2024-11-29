import express from 'express'; // ESM EcmaScript Modules
import router from './router';

const app = express();

app.use('/', router);

export default app;