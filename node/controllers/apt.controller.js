const aptService = require('../services/apt.service');

module.exports = {
    createApt,
    getApts,
};

function createApt(req, res, next) {
    aptService.createApt(req.body)
        .then(apt => res.json(apt))
        .catch(err => next(err));
}

function getApts(req,res,next){
    aptService.getApts()
        .then(articles => res.json(articles))
        .catch(err => next(err));
}
