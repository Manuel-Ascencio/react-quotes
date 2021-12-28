import React from "react"
import './App.css';
import User from "./components/User"
import users from "./users.json"
import {useState} from "react";


function App() {

  const random = (max) =>  Math.floor(Math.random() * max);

  const colors = ["#845EC2", "#FF9671", "#FFC75F", "#2C73D2", "#008F7A","#0089BA", "#008E9B", "#C34A36", "#4B4453", "#AE5D00"];

  const [people, setPeople] = useState(users[random(users.length)]);
  
  const background = colors[random(colors.length)];
  
  let changeUser = () => {
    setPeople(users[random(users.length)])
  }

  return(
    <main className="body" style={{background}}>
      <User
      name={`${people.name.first} ${people.name.last}`} 
      picture={people.picture.large} 
      location={`${people.location.city} ${people.location.country}`}
      phone={people.phone} 
      email={people.email} 
      change={changeUser}
      background={background}
      />
      </main>
  );
}

export default App;
