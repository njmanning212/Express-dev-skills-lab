
import { rookieDigimon } from "../data/digimon.js"

function index (req, res) {
  res.render ('digimon/index', {
    rookieDigimon : rookieDigimon
  })
}

export {
  index,
}