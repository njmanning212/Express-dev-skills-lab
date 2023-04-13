
import { Digimon } from "../models/digimon.js"

function index (req, res) {
  Digimon.find({})
  .then(digimon => {
    res.render('digimon/index.ejs', {
      digimon : digimon,
      myName: req.myName
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

function create(req, res) {
  req.body.isARookie = false
  Digimon.create(req.body)
  .then(digimon => {
    res.redirect('/digimon')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/digimon')
  })
}

function show (req, res) {
  Digimon.findById(req.params.digimonId)
  .then(digimon =>{
    console.log(digimon)
    res.render('digimon/show', {
      digimon : digimon,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/digimon')
  })
}

export {
  index,
  digimonNew as new,
  create,
  show,
}