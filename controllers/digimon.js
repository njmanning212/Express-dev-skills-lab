
import { Digimon } from "../models/digimon.js"

function index (req, res) {
  Digimon.find({})
  .then(digimon => {
    res.render('digimon/index.ejs', {
      digimon : digimon
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function digimonNew (req, res) {
  res.render('digimon/new')
}

export {
  index,
  digimonNew as new,
}