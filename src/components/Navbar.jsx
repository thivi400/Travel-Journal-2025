import globe from "../src/assets/globe.png"

export default function Navbar(){
    return(
        <header>
            <nav>
                <img src={globe} alt="globe" />
                <span>My Travel Journal - 2025</span>
            </nav>
        </header>
    )
}