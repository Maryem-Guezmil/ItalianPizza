
const pizzas = [
	{
		name: "Margherita Pizza",
		varients: [
			"small",
			"medium",
			"large"
		],
		prices: [
			{
				"small": 7,
				"medium": 9,
				"large": 12
			}
		],
		category: "nonveg",
		image:require('./images/margherita.jpg')
	},
	{
		name: "Pepperoni Pizza",
		varients: [
			"small",
			"medium",
			"large"
		],
		prices: [
			{
				"small": 7,
				"medium": 9,
				"large": 12
			}
		],
		category: "Meat Pizzas",
		image: require('./images/pepperoni.jpg'),
		description: "A pizza with tomato sauce, mozzarella cheese, and spicy pepperoni."
	},
	{
		name: "Veggie Pizza",
		varients: [
			"small",
			"medium",
			"large"
		],
		prices: [
			{
				"small": 7,
				"medium": 9,
				"large": 12
			}
		],
		category: "Vegetarian Pizzas",
		image: require('./images/vegetarian.jpg'),
		description: "A pizza with tomato sauce, mozzarella cheese, and a variety of fresh vegetables."
	},
	{
		name: "Hawaiian Pizza",
		varients: [
			"small",
			"medium",
			"large"
		],
		prices: [
			{
				"small": 7,
				"medium": 9,
				"large": 12
			}
		],
		category: "Specialty Pizzas",
		image: require('./images/hawain.jpg'),
		description: "A pizza with tomato sauce, mozzarella cheese, pineapple, and ham."
	},
	{
		name: "BBQ Chicken Pizza",
		varients: [
			"small",
			"medium",
			"large"
		],
		prices: [
			{
				"small": 7,
				"medium": 9,
				"large": 12
			}
		],
		category: "Specialty Pizzas",
		image: require('./images/bbq.jpg'),
		description: "A pizza with BBQ sauce, mozzarella cheese, grilled chicken, and red onions."
	},
	{
		name: "Meat Lovers Pizza",
		varients: [
			"small",
			"medium",
			"large"
		],
		prices: [
			{
				"small": 7,
				"medium": 9,
				"large": 12
			}
		],
		category: "Meat Pizzas",
		image:require('./images/meat.jpg') ,
		description: "A pizza with tomato sauce, mozzarella cheese, pepperoni, sausage, and bacon."
	}
]
export default pizzas;