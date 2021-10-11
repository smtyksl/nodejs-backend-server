
let hastaneControlleer = require("./controller/Hastane")

module.exports = function (app, io) {
    app.use(function (req, res, next) {
        req.io = io;
        next();
    });

    app.post('/get-hastane', hastaneControlleer.getHastane);

    app.post('/add-hastane', hastaneControlleer.addHastane);

    app.post('/update-hastane', hastaneControlleer.updateHastane);

}