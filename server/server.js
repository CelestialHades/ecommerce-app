const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("E-Commerce API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const Product = require('./models/Product');

async function seedProducts() {
    await Product.deleteMany({});
    await Product.insertMany([
        { name: "Laptop", price: 999, description: "Powerful laptop", imageUrl: "laptop.jpg" },
        { name: "Phone", price: 499, description: "Latest smartphone", imageUrl: "phone.jpg" }
    ]);
    console.log("Database seeded!");
}

seedProducts();