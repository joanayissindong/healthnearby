const express = require('express');
const corsMiddleware = require('./src/presentation/middleware/corsMiddleware');
const errorHandler = require('./src/presentation/middleware/errorHandler');
const requestLogger = require('./src/presentation/middleware/requestLogger');
const facilityRoutes = require('./src/presentation/routes/facilityRoutes');

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use(requestLogger);

app.use('/api/v1/facilities', facilityRoutes);

app.use(errorHandler);

module.exports = app;