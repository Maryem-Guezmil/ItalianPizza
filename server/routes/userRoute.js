const express = require("express")
const router = express.Router()
const User = require("../models/userModel")
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {

    const { name, email, password } = req.body
    const newUser = new User({ name, email, password })

    try {
        newUser.save()
        res.send('User Registered successfully')
    } catch (error) {
        return res.status(400).json({ message: error })
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.find({ email, password })
        if (user.length > 0) {
            const currentUser = {
                name: user[0].name,
                email: user[0].email,
                isAdmin: user[0].isAdmin,
                _id: user[0]._id
            }
            res.send(currentUser)
        } else {
            return res.status(400).json({ message: 'User Login failed' })
        }
    } catch (error) {
        return res.status(400).json({ message: error })

    }
})
//retrieves the user from the database based on the email provided in the request body.
router.get('/admin', (req, res) => {
    const currentUser = req.body.currentUser;
    if (currentUser && currentUser.isAdmin) {
        res.send("Welcome to the admin panel!");
    }
    else {
        // If the user is not an admin, return an error
        return res.status(401).json({ message: "Unauthorized access" });
    }
});

router.get("/allUsers", async (req, res) => {
    try {
        const users = await User.find({});
        console.log(`Successfully fetched users: ${users}`);
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(400).json({ message: error });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            success: true,
            message: "delete successfully."
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message
        })
    }
})

module.exports = router