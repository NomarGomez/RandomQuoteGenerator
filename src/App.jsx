import { useEffect } from "react"


import {Button} from "@material-ui/core"
import {Icon} from "@material-ui/core"

import {randomQuote} from "./API/quotes"



function App() {
  const AutoRenew = <Icon>autorenew</Icon>

  const Pepe = async () => {
    const data = await randomQuote()
    console.log(data)
  }
  return (
    <div className="App">
      <Button endIcon={AutoRenew} onClick={Pepe}>Random</Button>
    </div>
  )
}

export default App
