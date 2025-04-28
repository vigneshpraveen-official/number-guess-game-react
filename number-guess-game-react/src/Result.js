import React from "react";

function Result({randomNumber, term}) {
    let result;
    if(term){
    if(term > randomNumber) {
        result = "Higher";
    }else if(term < randomNumber) {
        result = "Lower";
    }else if(term == randomNumber) {
        result = "You Guessed Correct Number";
    }else{
        result = "Please enter a valid number between 1 to 10";
    }
    }
    return <h3>You Guessed: {result}</h3>
}

export default Result;