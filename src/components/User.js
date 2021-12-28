import React from 'react';

function User({name, picture, location, phone, email, change, background}){
    return(
        <section>
            <h3 style={{color:background}}>{name}</h3>
            <img src={picture} alt=""/>
            <p><i className="fas fa-map-marker-alt" style={{color:background}}></i>{location}</p>
            <p><i className="fas fa-phone-alt" style={{color:background}}></i>{phone}</p>
            <p><i className="fas fa-envelope" style={{color:background}}></i>{email}</p>
            <button onClick={change}><i className="fas fa-random" style={{background:background}}></i></button>
        </section>
    );
}

export default User