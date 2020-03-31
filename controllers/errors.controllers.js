exports.handleErrLogs = (err, req, res, next) => {
  console.log(
    err,
    `error occurred at ${Date.now()}: ${req.method} on ${req.url}`
  );
  next(err);
};

exports.handleCustomErrors = (err, req, res, next) => {
  res.status(err.status).send({ msg: err.msg });
};
