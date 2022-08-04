import React from "react";
import "./App.css";
import { useState } from "react";
import quotes from "./quotes.json";
import QuoteBox from "./components/QuoteBox";
import Util from "./components/Util";

function App() {
  const colors = [
    "#136066",
    "#382924",
    "#db4b23",
    "#e89d10",
    "#11644d",
    "#304878",
    "#622824",
    "#412a9c",
    "#7d2948",
    "#a84818",
  ];

  const [phrase, setPhrase] = useState(quotes[Util(quotes.length)]);

  const background = colors[Util(colors.length)];

  let changeQuote = () => setPhrase(quotes[Util(quotes.length)]);

  return (
    <main style={{ background }}>
      <QuoteBox
        cita={phrase.quote}
        author={phrase.author}
        image={phrase.image}
        change={changeQuote}
        color={background}
      />
    </main>
  );
}

export default App;
