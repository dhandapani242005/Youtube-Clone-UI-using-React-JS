import logo from './assets/logo.png'

export default function Navbar() {
    return (
        <div className="Nav_bar">
            <img src={logo} alt="logo" />
            <input type="text" placeholder="Search.." />
        </div>
    )
}