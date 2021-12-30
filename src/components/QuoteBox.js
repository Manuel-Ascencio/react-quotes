import React from 'react';

function QuoteBox({cita, author, change, color}){
    return(
        <section className="quote_card">
            <i className="fas fa-quote-left" style={{color}}></i>
            <h3 style={{color}}>{cita}</h3>
            <p style={{color}}>{author}</p>
            <div className="row">
            <button><i className="fas fa-arrow-circle-right" style={{color}} onClick={change}></i></button>
            </div>
        </section>
    );
}

export default QuoteBox