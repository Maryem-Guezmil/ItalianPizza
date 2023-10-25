const express = require("express")
const router = express.Router()
const Pizza = require('../models/pizzaModel')

router.get("/getallpizzas", async (req, res) => {
    try {
        const pizzas = await Pizza.find({})
        res.send(pizzas)
    } catch (error) {
        return res.status(400).json({ message: error })
    }
})
router.delete('/:id', async (req, res) => {
    try {
        await Pizza.findByIdAndDelete(req.params.id);
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
router.post('/addpizza',async (req, res) => {
    try{
        const pizzaData = req.body.pizza;
        const pizza = new Pizza(pizzaData);
        await pizza.save();
        res.status(200).json({ message: 'Pizza added successfully!' });
        console.log(pizza)

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add pizza!', error: error });
      }
    
  
 } )

router.get("/:id", async (req, res) => {
    try {
        const pizzaId = req.params.id
        const pizza = await Pizza.findById(pizzaId)
        res.send(pizza)
        console.log("al9ali detailspizza te5dem")
        console.log(pizza)

    } catch (error) {
        return res.status(400).json({ message: error })
    }
})
//update
router.put("/pizzaslist/:id", async (req, res) => {
    try {
      const updatedPizza = await Pizza.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedPizza);
    } catch (err) {
      res.status(500).json(err);
    }
  });






/*
router.put('/:id', async (req, res) => {
    const pizzaId = req.params.id
    const { name, description } = req.body.pizza
    const pizza = await Pizza.findById(pizzaId)
    if (!pizza) {
        res.status(404)
        throw new Error('Pizza not found')
    }

    if (!req.body.pizza || !req.body.pizza.name || !req.body.pizza.description) {
        res.status(400)
        throw new Error('Invalid request body')
    }
    /*const { name, description } = req.body.pizza
    pizza.name = name
    pizza.description = description

    const updatedPizza = await pizza.save()

    res.status(200).json({ message: 'Pizza updated', pizza: updatedPizza })
})*/

module.exports = router