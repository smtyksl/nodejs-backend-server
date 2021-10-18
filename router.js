
let hastaneControlleer = require("./controller/Hastane")
let doktorController = require("./controller/Doktor")
let doktorhastaneController = require("./controller/DoktorHastane")

module.exports = function (app) {
    app.use(function (req, res, next) {
        next();
    });

    app.post('/api/get-hastane', hastaneControlleer.getHastane);

    app.post('/api/add-hastane', hastaneControlleer.addHastane);

     app.post('/api/update-hastane', hastaneControlleer.updateHastane);

     app.post('/api/get-doktor', doktorController.getDoktor);

     app.post('/api/add-doktor', doktorController.addDoktor);

     app.post('/api/update-doktor', doktorController.updateDoktor);

     app.post('/api/get-doktor', doktorhastaneController.getDoktorHastane);

     app.post('/api/add-doktor', doktorhastaneController.addDoktorHastane);

     app.post('/api/update-doktor', doktorhastaneController.updateDoktorHastane);

    app.use(function (err, req, res, next) {//Error Controller
        console.error(err)
        res.status(500).send({
            "description": "Error",
            "error": "Error occured"
        });
    });
}