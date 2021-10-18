const db = require('../db.config.js')
const Hastane = db.hastane

const Op = db.Sequelize.Op; // anlatıkacak

exports.addHastane = (req, res) => {
    let body = req.body
    let { ad = null } = body

    return Hastane.findAll({
        where: {
            ad: ad
        }
    }).then(response => {
        if (response.length > 0) {
            res.status(500).json({ status: "error", description: "Kayıt var" })
        }
        else {
            return Hastane.create({ ad }).then(created => {
                if (created) {
                    res.status(200).json({ status: "success" })
                }
                else {
                    return { status: "error", description: "Hata" }
                }
            }).catch(err => {
                res.status(500).json({ status: "success" })
                throw new Error()
            })
        }
    })
}

exports.getHastane = (req, res) => {
    return Hastane.findAll().then(response => {
        if (response.length > 0) {
            res.status(200).send({ status: "success", hastanes: response })
        }
        else {
            res.status(200).send({ status: "success", hastanes: [] })
        }
    })
}

exports.updateHastane = (req, res) => {
    let body = req.body
    let { ad = null, id = null } = body

    return Hastane.findOne({
        where: {
            id: id
        }
    }).then(response => {
        return response.update({ ad }).then(updated => {
            if (updated) {
                res.status(200).json({ status: "success" })
            }
            res.status(500)
        })
    })
}