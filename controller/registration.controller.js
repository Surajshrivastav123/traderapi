const registration = require('../model/registration.model')

exports.createRegistration = async (req, res) => {
    try {
        const { priceId, data } = req.body;
        const registartion = new registration({
            priceId, data
        })
        const regdata = await registartion.save()
        res.status(201).json({
            message: "registartion done",
            speaker: regdata,
        });
    } catch (err) {
        res.status(500).json({
            message: "Failed to create registartion",
            error: err.message,
        });
    }
};

exports.getAllRegistration = async (req, res) => {
    try {
        const data = await registration.find({}).sort({ createdAt: -1 }); // -1 for descending order
        return res.status(200).json({
            status: 200,
            data: data
        })
    } catch (err) {
        res.status(500).json({
            message: "Failed to create speaker",
            error: err.message,
        });
    }
}
