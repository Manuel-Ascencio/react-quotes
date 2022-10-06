import React from "react";
import "./App.css";
import { useState } from "react";
import quotes from "./quotes.json";
import { Main } from "./components/QuoteBoxStyles";
import QuoteBox from "./components/QuoteBox";
import { Random, Colors } from "./components/Util";

function App() {
  const [phrase, setPhrase] = useState(quotes[Random(quotes.length)]);

  const background = Colors[Random(Colors.length)];

  let changeQuote = () => setPhrase(quotes[Random(quotes.length)]);

  return (
    <Main style={{ background }}>
      <QuoteBox
        cita={phrase.quote}
        author={phrase.author}
        image={phrase.image}
        change={changeQuote}
        color={background}
      />
    </Main>
  );
}

export default App;
