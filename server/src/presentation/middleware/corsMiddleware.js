const cors = require("cors");

const corsMiddleware = cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET'],
    allowedHeaders: ['Content-Type'],
});

module.exports = corsMiddleware;