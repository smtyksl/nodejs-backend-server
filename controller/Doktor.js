const db = require('../db.config.js')
const Doktor = db.doktor

const Op = db.Sequelize.Op; // anlatıkacak

exports.addDoktor = (req, res) => {
    let body = req.body
    let { ad = null } = body

    return Doktor.findAll({
        where: {
            ad: ad
        }
    }).then(response => {
        if (response.length > 0) {
            res.status(500).json({ status: "error", description: "Kayıt var" })
        }
        else {
            return Doktor.create({ ad }).then(created => {
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

exports.getDoktor = (req, res) => {
    return Doktor.findAll().then(response => {
        if (response.length > 0) {
            res.status(200).send({ status: "success", doktors: response })
        }
        else {
            res.status(200).send({ status: "success", doktors: [] })
        }
    })
}

exports.updateDoktor = (req, res) => {
    let body = req.body
    let { ad = null, id = null } = body

    return Doktor.findOne({
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