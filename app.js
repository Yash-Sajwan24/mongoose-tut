const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
  name: String, 
  rating : Number, 
  review: String, 
});

const fruitModel = mongoose.model("Fruit", fruitSchema);

const fruit = new fruitModel({
  name: "apple", 
  rating: 7, 
  review : "its an amazing fruit", 
});

fruit.save();


