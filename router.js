
let hastaneControlleer = require("./controller/Hastane")
let doktorController = require("./controller/Doktor")
let doktorhastaneController = require("./controller/DoktorHastane")

module.exports = function (app, io) {
    app.use(function (req, res, next) {
        req.io = io;
        next();
    });

    app.post('/get-hastane', hastaneControlleer.getHastane);

    app.post('/add-hastane', hastaneControlleer.addHastane);

    app.post('/update-hastane', hastaneControlleer.updateHastane);

    app.post('/get-doktor', doktorController.getDoktor);

    app.post('/add-doktor', doktorController.addDoktor);

    app.post('/update-doktor', doktorController.updateDoktor);

    app.post('/get-doktor', doktorhastaneController.getDoktorHastane);

    app.post('/add-doktor', doktorhastaneController.addDoktorHastane);

    app.post('/update-doktor', doktorhastaneController.updateDoktorHastane);
}