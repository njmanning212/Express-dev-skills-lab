
import { rookieDigimon } from "../data/digimon.js"

function listRookieDigimon (req, res) {
  res.render ('digimon/index', {rookieDigimon})
}

export {
  listRookieDigimon
}