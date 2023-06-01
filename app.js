const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
  name: String, 
  rating : Number, 
  review: String, 
});

const fruitModel = mongoose.model("Fruit", fruitSchema);//this creates a collections with name fruits

const fruit = new fruitModel({
  name: "apple", 
  rating: 7, 
  review : "its an amazing fruit", 
});

// fruit.save();

const kiwi  = new fruitModel({
  name: "kiwi", 
  rating : 5, 
  review: "sour in taste", 
});

const orange  = new fruitModel({
  name: "orange", 
  rating : 10, 
  review: "sweet in taste", 
});

fruitModel.insertMany([kiwi,orange]);
