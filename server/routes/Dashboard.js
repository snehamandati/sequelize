const router = require("express").Router();
const User = require('../user');
const Autherization = require('../Middlewear/Autherization');

router.get("/", Autherization, async(req, res) => {
    try {
        //req.user has the payload
        // res.json(req.user);

        const user = await User.findOne({
            where: { id: req.user }, // Assuming req.user contains the user id
            attributes: ['user_name'] // Only select the user_name column
        });

        res.json(user);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router;