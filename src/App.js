import React from 'react';
import './App.css';
import { useState } from "react"
import quotes from "./quotes.json"
import QuoteBox from "./components/QuoteBox"
import Util from "./components/Util"




function App() {

  const colors = ["#2C73D2", "#008F7A", "#845EC2", "#4D8076", "#C34A36", "#FF8066", "#4B4453", "#B0A8B9", "#FF6F91", "#926C00"]

  // const random = (max) => Math.floor(Math.random() * max)


  const [ phrase, setPhrase ] = useState(quotes[Util(quotes.length)]);

  const background = colors[Util(colors.length)]

  let changeQuote = () => setPhrase(quotes[Util(quotes.length)]);



  return(
    <main style={{background}}>
      <QuoteBox cita={phrase.quote} author={phrase.author} change={changeQuote} color={background} />
    </main>
  );
}

export default App;
