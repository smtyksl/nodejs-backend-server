const db = require('../db.config.js')
const DoktorHastane = db.DoktorHastane

const Op = db.Sequelize.Op; // anlatıkacak

exports.addDoktorHastane = (req, res) => {
    let body = req.body
    let { ad = null } = body

    return DoktorHastane.findAll({
        where: {
            ad: ad
        }
    }).then(response => {
        if (response.length > 0) {
            return { status: "error", description: "Kayıt var" }
        }
        else {
            return DoktorHastane.create({ ad }).then(created => {
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

exports.getDoktorHastane = (req, res) => {
    let body = req.body
    let { ad = null } = body

    return DoktorHastane.findAll().then(response => {
        if (response.length > 0) {
            return { status: "success", doktorhastanes: response }
        }
        else {
            return { status: "success", doktorhastanes: [] }
        }
    })
}

exports.updateDoktorHastane = (req, res) => {
    let body = req.body
    let { ad = null, id = null } = body

    return DoktorHastane.findOne({
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