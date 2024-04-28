import mongoose from "mongoose";
const car = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  carType: {
    type: String,
    require: true,
  },
  carModel: {
    type: String,
    require: true,
  },
  carImage: {
    type: String,
    require: true,
  },
  transmissionType: {
    type: String,
    require: true,
  },
  seatingCapacity: {
    type: String,
    require: true,
  },
  numberOfDoors: {
    type: String,
    require: true,
  },
  airCondition: {
    type: String,
    require: true,
  },

  dailyRental: {
    type: String,
    require: true,
  },
});
const Cars = mongoose.model("Cars", car);

export default Cars;
