

module.exports.validateTask = (req, res, next) => {
  const { body } = req.body;

 
  if (req.method === 'POST') {
    if (!body || typeof body !== 'string' || body.trim() === '') {
      const err = new Error("Поле 'body' обов'язкове і має бути непорожнім рядком");
      err.status = 400; 
      return next(err); 
    }
  }

  
  if (req.method === 'PUT' && body !== undefined) {
    if (typeof body !== 'string' || body.trim() === '') {
      const err = new Error("Поле 'body' має бути непорожнім рядком");
      err.status = 400;
      return next(err);
    }
  }

  next();
};