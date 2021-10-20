const db = require('../db.config.js')
const DoktorHastane = db.doktorhastane

const Op = db.Sequelize.Op; // anlatıkacak

exports.addDoktorHastane = (req, res) => {
    let body = req.body
    let doktorid = body.doktorid
    let hastaneid = body.hastaneid


    let { doktorhastane = null } = body
    return DoktorHastane.findAll({
        where: { 
           doktorid ,
           hastaneid 
        }
    }).then(response => {
        if (response.length > 0) {
            res.status(500).json({ status: "error", description: "Kayıt var" })
        }
        else {
            return DoktorHastane.create({   doktorid , hastaneid  }).then(created => {
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

exports.getDoktorHastane = (req, res) => {
    return DoktorHastane.findAll().then(response => {
        if (response.length > 0) {
            res.status(200).send({ status: "success", doktorhastanes: response })
        }
        else {
            res.status(200).send({ status: "success", doktorhastanes: [] })
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
                res.status(200).json({ status: "success" })
            }
            res.status(500)
        })
    })
}