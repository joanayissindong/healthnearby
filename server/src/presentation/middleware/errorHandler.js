const errorHandler = (err, req, res, next) => {
    console.error('Full error:', err);
    res.status(500).json({
        success: false,
        message: err.message,
        stack: err.stack,
    });
};

module.exports = errorHandler;