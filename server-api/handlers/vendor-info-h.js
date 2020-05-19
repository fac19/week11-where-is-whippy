const vendorInfoModel = require("../model/vendor-info-m");

function addNewVendor(req, res, next) {
    vendorInfoModel
    .addVendor(req.body.email, req.body.password, req.body.username)
    .then((newVendor) => {
        res.status(200).send()
    })
    .catch(next);
}

// remove this comment