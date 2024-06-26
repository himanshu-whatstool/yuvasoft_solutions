
import { useState } from "react"
import GlobalContext from "./globalContext"

const GlobalState = (props) => {

  const [language, setLanguage] = useState(['JavaScript', 'Python'])

  return (
    <GlobalContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState