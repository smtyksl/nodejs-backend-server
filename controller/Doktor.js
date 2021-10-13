const db = require('../db.config.js')
const Doktor = db.doktor

const Op = db.Sequelize.Op; // 

exports.addDoktor = (req, res) => {
    let body = req.body
    let { ad = null } = body

    return Doktor.findAll({
        where: {
            ad: ad
        }
    }).then(response => {
        if (response.length > 0) {
            return { status: "error", description: "Kayıt var" }
        }
        else {
            return Doktor.create({ ad }).then(created => {
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

exports.getDoktor = (req, res) => {
    let body = req.body
    let { ad = null } = body

    return Doktor.findAll().then(response => {
        if (response.length > 0) {
            return { status: "success", doktors: response }
        }
        else {
            return { status: "success", doktors: [] }
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
                return { status: "success" }
            }
            return { status: "error" }
        })
    })
}