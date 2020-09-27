function logger(req, res, next) {
    debugger;
    const logLine = `Method: ${req.method}, Url: ${
        req.originalUrl
    }, Body: ${JSON.stringify(req.body)} Headers: ${JSON.stringify(
        req.headers
    )}`;

    console.log(logLine);
    next();
}

module.exports = logger;
