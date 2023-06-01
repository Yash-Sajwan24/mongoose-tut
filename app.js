const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
  name: {
    type: String, 
    required :[true, "no name specified."],
  }, 
  rating : {
    type: Number, 
    max: 10, 
    min: 1
  }, 
  review: String, 
});

const fruitModel = mongoose.model("Fruit", fruitSchema);//this creates a collections with name fruits

const fruit = new fruitModel({
  name: "apple", 
  rating: 34, 
  review : "its an amazing fruit", 
});

fruit.save();


fruitModel.find().then(function(fruit){
    mongoose.connection.close();
    
    fruit.forEach(function(f){
      console.log(f.name);
    })
}).catch(function(err){
  console.log(err);
});

