const boom = require('@hapi/boom');

function validatorHandler(schema, property) { // clousures
  return (req, res, next) => {
    // property para que pueda ser req.body, req.params o req.query, de esta forma es dinamico
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false }); // abortEarly en false es para que muestre todos los errores y no uno por uno
    if (error) {
      next(boom.badRequest(error)); //manda a middleware de tipo error
    }
    next(); //si no hay error, el middleware pasa al siguiente
  }
}

module.exports = validatorHandler;
