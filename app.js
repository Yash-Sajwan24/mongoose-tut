const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "no name specified."],
  },
  rating: {
    type: Number,
    max: 10,
    min: 1,
  },
  review: String,
});

const fruitModel = mongoose.model("Fruit", fruitSchema); //this creates a collections with name fruits

// const fruit = new fruitModel({
//   name: "apple",
//   rating: 34,
//   review : "its an amazing fruit",
// });

// fruit.save();

// fruitModel
//   .updateOne({ name: "apple" }, { name: "guava" })
//   .then(function () {
//     console.log("successfully updated");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// fruitModel
//   .deleteOne({ name: "grape" })
//   .then(() => console.log("successfully deleted"))
//   .catch((err) => console.log(err));

// fruitModel
//   .find()
//   .then(function (fruit) {
//     fruit.forEach(function (f) {
//       console.log(f.name);
//     });
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

const pineapple = new fruitModel({
  name: "pineapple", 
  rating: 8, 
  review: "it taste amazing", 
})

pineapple.save();

const personSchema = new mongoose.Schema({
  name: String, 
  age: Number, 
  favouriteFruit : fruitSchema,
})

const personModel = mongoose.model("Person", personSchema);

const yash = new personModel({
  name: "yash", 
  age: 21, 
  favouriteFruit: pineapple,
})

yash.save();

