exports.get404 = (req, res, next) => {
    const parameters = {
        pageTitle: '404 Page not found',
        path: '/404'
    };
    res.status(404).render('404', parameters);
};