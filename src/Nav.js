import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {
    const [show, setMovies] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setMovies(true)
            } else {
                setMovies(false)
            }
        });
     
    }, [])
    



        



  return (
    <div className = {`nav ${show &&  "nav_black"}`}>
        <img
            className = 'nav_logo'
            src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/800px-Netflix_2015_logo.svg.png'
            alt = 'Netflix Logo'
        />

        <img
            className = 'nav_avatar'
            src = 'https://occ-0-2119-2120.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUoj4FT-0Rr558WbETiintMnmH2JKw4l_p4MdMoxqVx7YXwsvLvvnGUtx3HKZN_BJFH4EHpXn5KqSCBVxLrRz0n4gk64yyeAFw.png?r=229'
            alt = 'Netflix Logo'
        />

    </div>

  )
}

export default Nav