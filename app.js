const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
  name: String, 
  rating : Number, 
  review: String, 
});

const fruitModel = mongoose.model("Fruit", fruitSchema);//this creates a collections with name fruits

// const fruit = new fruitModel({
//   name: "apple", 
//   rating: 7, 
//   review : "its an amazing fruit", 
// });

// fruit.save();

// const melon  = new fruitModel({
//   name: "melon", 
//   rating : 9, 
//   review: "sweet in taste", 
// });

// const grape  = new fruitModel({
//   name: "grape", 
//   rating : 10, 
//   review: "amazing in taste", 
// });

// fruitModel.insertMany([grape,melon]).then(function(){
//     console.log('successfully inserted');
// }).catch(function(err){
//   console.log(err);
// });

fruitModel.find().then(function(fruit){
    mongoose.connection.close();
    
    fruit.forEach(function(f){
      console.log(f.name);
    })
}).catch(function(err){
  console.log(err);
});

