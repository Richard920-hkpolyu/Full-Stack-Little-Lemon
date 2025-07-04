import {faInstagram, faGithub, faLinkedin, faTiktok, faWhatsapp, faAlipay, faWeixin, faCcApplePay} from "@fortawesome/free-brands-svg-icons";
export const socials = [
    {
        icon: faInstagram,
        url: "https://www.instagram.com/n.t.y_rc/profilecard/?igsh=aHVmbTA3a2dmZnl",
    },
    {
        icon: faWhatsapp,
        url: "Wa.me/+85251142452",
    },
    {
        icon: faTiktok,
        url: "https://v.douyin.com/CeiJy3jyk/ 1@5.com :1pm",
    },
    {
        icon: faGithub,
        url: "https://github.com/Richard920-hkpolyu",
    },
    {
        icon: faLinkedin,
        url: "https",
    },
];

export const payments = [
    {
        id: "alipay",
        icon: faAlipay,
        account: "+852 5114 2452",
    },
    {
        id: "wechatpay",
        icon: faWeixin,
        account: "+86 188 1890 2621",
    },
    {
        id: "applepay",
        icon: faCcApplePay,
        account: "wuzhengying666@gmail.com",
    },
];
import GreekSaladImage from '../images/small/GreekSalad.jpg';
import CaesarImage from "../images/small/caesar.jpg";
import BrushettaImage from "../images/small/Brushetta.jpg";
import SandwichImage from "../images/small/sandwich.jpg";
import PastaImage from "../images/small/Pasta.jpg";
import MaggiImage from "../images/small/maggi.jpg";
import PizzaImage from "../images/small/pizza.jpg";
import RawEggRiceImage from "../images/small/rawEggRice.png";
import OmeletteRiceImage from "../images/small/omeletteRice.png";
import GrilledFishImage from "../images/small/GrilledFish.jpg";
import VeggieImage from "../images/small/veggie.jpg";
import RolledOmeleteSkewerImage from "../images/small/rolledOmeleteSkewer.png";
import Lemon_DessertImage from "../images/small/Lemon_Dessert.jpg";
import Dessert2Image from "../images/small/dessert2.jpg";
import TofuCheesecakeImage from "../images/small/tofuCheesecake.png";
import mixedBerriesYogurt from "../images/small/mixedBerriesYogurt.png";
import ChocolateShakeImage from "../images/small/choclateshake.jpg";
import FruitTeaImage from "../images/small/fruitTea.png";
import StrawberryShakeImage from "../images/small/strawberryshake.jpg";
import CoffeeImage from "../images/small/coffee.jpg";

export const fooditems = [
    {
        id: 1,
        key: 1,
        title: "Greek Salad",
        category: "main",
        type: "salad",
        monthly: 200,
        ingredients: [
            { id: 1, name: "Olives", price: 3.00 },
            { id: 2, name: "Feta Cheese", price: 5.00 },
            { id: 3, name: "Red Onion", price: 1.00 }
        ],
        description: "A refreshing Greek salad featuring crisp lettuce, juicy tomatoes, and tangy feta cheese, lightly dressed to enhance its fresh flavors.",
        price: 49.99,
        getImageSrc: () => GreekSaladImage,
    },
    {
        id: 2,
        key: 2,
        title: "Caesar Salad",
        category: "main",
        type: "salad",
        monthly: 210,
        ingredients: [
            { id: 1, name: "Anchovies", price: 4.00 },
            { id: 2, name: "Parmesan Cheese", price: 5.00 },
            { id: 3, name: "Croutons", price: 1.00 }
        ],
        description: "A classic Caesar salad with crisp romaine lettuce, creamy dressing, and a sprinkle of parmesan, perfect for a light meal.",
        price: 47.99,
        getImageSrc: () => CaesarImage,
    },
    {
        id: 3,
        key: 3,
        title: "Bruschetta",
        category: "main",
        type: "bread",
        monthly: 150,
        ingredients: [
            { id: 1, name: "Garlic", price: 1.50 },
            { id: 2, name: "Basil", price: 2.00 },
            { id: 3, name: "Mozzarella", price: 3.50 }
        ],
        description: "Crispy toasted bread topped with fresh tomatoes, garlic, and a hint of basil, offering a delightful bite that captures Italian flavors.",
        price: 47.99,
        getImageSrc: () => BrushettaImage,
    },
    {
        id: 4,
        key: 4,
        title: "Sandwich",
        category: "main",
        type: "bread",
        monthly: 80,
        ingredients: [
            { id: 1, name: "Mayonnaise", price: 1.50 },
            { id: 2, name: "Pickles", price: 2.00 },
            { id: 3, name: "Mustard", price: 1.00 }
        ],
        description: "A hearty sandwich layered with fresh ingredients, perfect for a quick lunch or snack, offering a satisfying crunch with every bite.",
        price: 27.99,
        getImageSrc: () => SandwichImage,
    },
    {
        id: 5,
        key: 5,
        title: "Pasta",
        category: "main",
        type: "pasta",
        monthly: 200,
        ingredients: [
            { id: 1, name: "Mushrooms", price: 4.00 },
            { id: 2, name: "Olive Oil", price: 2.00 },
            { id: 3, name: "Garlic", price: 1.50 }
        ],
        description: "Delicious pasta served with a rich and flavorful sauce, garnished to perfection for a comforting and hearty meal.",
        price: 38.99,
        getImageSrc: () => PastaImage,
    },
    {
        id: 6,
        key: 6,
        title: "Maggi",
        category: "main",
        type: "pasta",
        monthly: 90,
        ingredients: [
            { id: 1, name: "Artificial Flavoring", price: 1.00 },
            { id: 2, name: "Preservatives", price: 1.00 },
            { id: 3, name: "MSG", price: 1.00 }
        ],
        description: "Instant noodles that are quick to prepare, offering a burst of flavor for those craving a simple and satisfying meal.",
        price: 34.99,
        getImageSrc: () => MaggiImage,
    },
    {
        id: 7,
        key: 7,
        title: "Pizza",
        category: "main",
        type: "pizza",
        monthly: 140,
        ingredients: [
            { id: 1, name: "Pineapple", price: 2.00 },
            { id: 2, name: "Olives", price: 3.00 },
            { id: 3, name: "Anchovies", price: 4.00 }
        ],
        description: "A mouth-watering pizza topped with a rich tomato sauce, melted cheese, and your choice of toppings, baked to perfection.",
        price: 129.99,
        getImageSrc: () => PizzaImage,
    },
    {
        id: 8,
        key: 8,
        title: "Row Egg Rice",
        category: "main",
        type: "rice",
        monthly: 120,
        ingredients: [
            { id: 1, name: "Raw Egg Protein", price: 5.00 },
            { id: 2, name: "Avocado", price: 6.00 },
            { id: 3, name: "Raw Salmon", price: 8.00 }
        ],
        description: "A unique dish featuring raw egg protein served over rice, complemented with creamy avocado and fresh salmon for a rich flavor.",
        price: 54.99,
        getImageSrc: () => RawEggRiceImage,
    },
    {
        id: 9,
        key: 9,
        title: "Omelette Rice",
        category: "main",
        type: "rice",
        monthly: 120,
        ingredients: [
            { id: 1, name: "Eggs", price: 3.00 },
            { id: 2, name: "Rice", price: 2.00 },
            { id: 3, name: "Ketchup", price: 1.00 }
        ],
        description: "A delightful combination of fluffy omelette and seasoned rice, topped with ketchup for a comforting and satisfying meal.",
        price: 128.99,
        getImageSrc: () => OmeletteRiceImage,
    },
    {
        id: 10,
        key: 10,
        title: "Grilled Fish",
        category: "a la carte",
        type: "fish",
        monthly: 50,
        ingredients: [
            { id: 1, name: "Fish Skin", price: 5.00 },
            { id: 2, name: "Lemon Zest", price: 2.00 },
            { id: 3, name: "Herbs", price: 3.00 }
        ],
        description: "Succulent grilled fish seasoned with spices and herbs, served with a side that complements its natural flavors.",
        price: 70.00,
        getImageSrc: () => GrilledFishImage,
    },
    {
        id: 11,
        key: 11,
        title: "Veggie",
        category: "a la carte",
        type: "veggie",
        monthly: 10,
        ingredients: [
            { id: 1, name: "Tofu", price: 3.00 },
            { id: 2, name: "Bell Peppers", price: 2.50 },
            { id: 3, name: "Zucchini", price: 1.50 }
        ],
        description: "A colorful veggie dish packed with fresh vegetables, lightly sautéed to retain their crunch and vibrant flavors.",
        price: 29.99,
        getImageSrc: () => VeggieImage,
    },
    {
        id: 12,
        key: 12,
        title: "Rolled Omelette Skewer",
        category: "a la carte",
        type: "Egg Rolls",
        monthly: 220,
        ingredients: [
            { id: 1, name: "Eggs", price: 3.50 },
            { id: 2, name: "Vegetables", price: 2.00 },
            { id: 3, name: "Soy Sauce", price: 1.50 }
        ],
        description: "Delicious rolled omelette skewers filled with fresh vegetables, perfect as a snack or appetizer.",
        price: 55.99,
        getImageSrc: () => RolledOmeleteSkewerImage,
    },
    {
        id: 13,
        key: 13,
        title: "Lemon Dessert",
        category: "dessert",
        type: "cake",
        monthly: 40,
        ingredients: [
            { id: 1, name: "Gelatin", price: 1.50 },
            { id: 2, name: "Coconut", price: 2.00 },
            { id: 3, name: "Marshmallows", price: 1.50 }
        ],
        description: "A light and zesty lemon dessert that offers a refreshing finish to any meal, perfect for citrus lovers.",
        price: 19.99,
        getImageSrc: () => Lemon_DessertImage,
    },
    {
        id: 14,
        key: 14,
        title: "Snow Meiniang",
        category: "dessert",
        type: "cake",
        monthly: 80,
        ingredients: [
            { id: 1, name: "Artificial Sweeteners", price: 2.00 },
            { id: 2, name: "Food Coloring", price: 1.00 },
            { id: 3, name: "Gelatin", price: 1.00 }
        ],
        description: "A unique dessert featuring a soft, fluffy texture, often enjoyed as a sweet treat to satisfy your cravings.",
        price: 34.99,
        getImageSrc: () => Dessert2Image,
    },
    {
        id: 15,
        key: 15,
        title: "Tofu Cheesecake",
        category: "dessert",
        type: "cake",
        monthly: 80,
        ingredients: [
            { id: 1, name: "Strawberry", price: 2.00 },
            { id: 2, name: "Mint", price: 1.50 },
            { id: 3, name: "Cream Cheese", price: 2.00 }
        ],
        description: "A creamy tofu cheesecake topped with fresh strawberries and a hint of mint, offering a healthier dessert option.",
        price: 32.99,
        getImageSrc: () => TofuCheesecakeImage,
    },
    {
        id: 16,
        key: 16,
        title: "Mixed Berries Yogurt",
        category: "dessert",
        type: "yogurt",
        monthly: 30,
        ingredients: [
            { id: 1, name: "Yogurt", price: 3.00 },
            { id: 2, name: "Mixed Berries", price: 4.00 },
            { id: 3, name: "Honey", price: 2.00 }
        ],
        description: "A delightful yogurt parfait layered with fresh mixed berries and a drizzle of honey for added sweetness.",
        price: 22.99,
        getImageSrc: () => mixedBerriesYogurt,
    },
    {
        id: 17,
        key: 17,
        title: "Chocolate Shake",
        category: "drink",
        type: "shake",
        monthly: 10,
        ingredients: [
            { id: 1, name: "Chocolate Syrup", price: 2.00 },
            { id: 2, name: "Whipped Cream", price: 3.00 },
            { id: 3, name: "Chocolate Chips", price: 2.00 }
        ],
        description: "A rich and creamy chocolate shake, blended to perfection for a sweet and indulgent treat any time of the day.",
        price: 19.99,
        getImageSrc: () => ChocolateShakeImage,
    },
    {
        id: 18,
        key: 18,
        title: "Fresh Fruit Tea",
        category: "drink",
        type: "tea",
        monthly: 320,
        ingredients: [
            { id: 1, name: "Fresh Fruits", price: 3.00 },
            { id: 2, name: "Tea Leaves", price: 1.00 },
            { id: 3, name: "Honey", price: 1.00 }
        ],
        description: "A refreshing tea infused with fresh fruits, offering a delightful and healthy beverage option.",
        price: 24.99,
        getImageSrc: () => FruitTeaImage,
    },
    {
        id: 19,
        key: 19,
        title: "Strawberry Shake",
        category: "drink",
        type: "shake",
        monthly: 10,
        ingredients: [
            { id: 1, name: "Red Food Coloring", price: 1.00 },
            { id: 2, name: "Sugar", price: 1.50 },
            { id: 3, name: "Milk Powder", price: 2.00 }
        ],
        description: "A delightful strawberry shake, bursting with fruity flavor and creamy texture, perfect for cooling down on a hot day.",
        price: 19.99,
        getImageSrc: () => StrawberryShakeImage,
    },
    {
        id: 20,
        key: 20,
        title: "Coffee",
        category: "drink",
        type: "coffee",
        monthly: 10,
        ingredients: [
            { id: 1, name: "Instant Coffee", price: 2.00 },
            { id: 2, name: "Sugar", price: 1.00 },
            { id: 3, name: "Creamer", price: 1.00 }
        ],
        description: "A classic cup of coffee brewed to perfection, offering a warm and comforting experience to start your day.",
        price: 16.99,
        getImageSrc: () => CoffeeImage,
    }
];

export const deliveryInfo = [
    {
        id: 1,
        key: 1,
        name: "Richard NG",
        Tel: "+86 188 1890 2621",
        district: "KUWN TONG DISTRICT, KLN, HONG KONG",
        detailAdd: "410, 4 MAN FUK BUILDING, YUET WAH STREET 40",
    },
    {
        id: 2,
        key: 2,
        name: "Anson NG",
        Tel: "+852 5114 2452",
        district: "KUWN TONG DISTRICT, KLN, HONG KONG",
        detailAdd: "912, 4 MAN FUK BUILDING, YUET WAH STREET 40",
    },
];

export const coupons = [
    {
        id: 1,
        key: 1,
        type: "exemption",
        price: -20,
        percentage: 0,
        description: "New user exemption",
    },
    {
        id: 2,
        key: 2,
        type: "discount",
        price: 0,
        percentage: 0.2,
        description: "New user discount",
    },
    {
        id: 3,
        key: 3,
        type: "discount",
        price: 0,
        percentage: 0.5,
        description: "Discount",
    },
    {
        id: 4,
        key: 4,
        type: "exemption",
        price: -10,
        percentage: 0,
        description: "Exemption",
    },
    {
        id: 5,
        key: 5,
        type: "discount",
        price: 0,
        percentage: 0.3,
        description: "Discount",
    },
];