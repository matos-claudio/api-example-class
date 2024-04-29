import express from 'express';
import exampleRoutes  from './routes/example-routes';

const app = express();
const PORT = 8000;

app.use('/example', exampleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
