import "./Header.css"

const Header = () => {
    return(
        <header className="style__header">
            <nav className="style__header__nav">
                <h1> Bird Sanctuary Project</h1>
                <cite> By Vandhana Mohan</cite>
                <ul className="style__header__ul">
                    <li className="style__header__li">
                        <button className="style__header__buttons">Home</button>
                    </li>
                    <li className="style__header__li">
                        <button className="style__header__buttons">About Us</button>
                    </li>
                    <li className="style__header__li">
                        <button className="style__header__buttons">Contact Us</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header