import mongoose from "mongoose";

const Schema = mongoose.Schema

const digimonSchema = new Schema ({
  name: String,
  isARookie: Boolean,
})

const Digimon = mongoose.model('Digimon', digimonSchema)

export {
  Digimon,
}