import { useEffect } from "react"
import { useState } from "react"


import ButtonGenerateQuote from "./components/ButtonGenerateQuote"
import QuotesInfo from "./components/QuotesInfo"

import {randomQuote} from "./API/quotes"



function App() {
  const [data, setData] = useState("")

  const getData = async () => {
    const data = await randomQuote()
    return setData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <ButtonGenerateQuote click={() => getData()}/>
      <QuotesInfo data={data}/>
    </div>
  )
}

export default App
