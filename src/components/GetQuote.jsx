import React from 'react'
import kanyeface from "../assests/kanyeface.svg"

export default function GetQuoteButton(props) {
    return (
        // <div>
        //     <button onClick={props.handleClick}>Another one...</button>
        // </div>
        <img src={kanyeface} alt="Kanyes Face" className="Kanye-Face" onClick={() => props.handleClick()} />
    )

}
