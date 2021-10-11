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
            return { status: "error", description: "Kayıt var" }
        }
        else {
            return Hastane.create({ ad }).then(created => {
                if (created) {
                    return { status: "success" }
                }
                else {
                    return { status: "error", description: "Hata" }
                }
            }).catch(err => {
                console.log(err)
                throw new Error()
            })
        }
    })
}

exports.getHastane = (req, res) => {
    let body = req.body
    let { ad = null } = body

    return Hastane.findAll().then(response => {
        if (response.length > 0) {
            return { status: "success", hastanes: response }
        }
        else {
            return { status: "success", hastanes: [] }
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
                return { status: "success" }
            }
            return { status: "error" }
        })
    })
}