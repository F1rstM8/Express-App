

module.exports.validateTask = (req, res, next) => {

  if (!req.body) {
    const err = new Error("Тіло запиту відсутнє");
    err.status = 400;
    return next(err);
  }

  const { body, isDone } = req.body;

  
  if (req.method === 'POST') {
    if (body === undefined || typeof body !== 'string' || body.trim() === '') {
      const err = new Error("Поле 'body' обов'язкове і має бути непорожнім рядком");
      err.status = 400;
      return next(err);
    }
  }

  
  if (req.method === 'PUT') {
    
    if (body !== undefined && (typeof body !== 'string' || body.trim() === '')) {
      const err = new Error("Поле 'body' має бути непорожнім рядком");
      err.status = 400;
      return next(err);
    }

    
    if (isDone !== undefined && typeof isDone !== 'boolean') {
      const err = new Error("Поле 'isDone' має бути булевим значенням (true або false)");
      err.status = 400;
      return next(err);
    }
  }

  next(); 
};