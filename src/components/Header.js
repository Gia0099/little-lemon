import React from "react"
import { Link } from "react-router-dom"
import food1 from "../images/food1.avif"

function Header(){
    return(
        <header>
            
            <section>
            <div>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
            
            <button aria-label="On Click">Reserve Table</button>
            </div>

            <div>
                <img src={food1} />
            </div>
            </section>
        </header>
    )
}

export default Header;