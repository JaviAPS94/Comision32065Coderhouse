function auth(req, res, next) {
    if(req.headers.password === 'password') {
        return next();
    }
    return res.status(401).send('Error de autenticacion');
};

export default auth;