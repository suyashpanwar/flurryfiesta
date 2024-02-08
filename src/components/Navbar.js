import flurryLogo from "./Cat1.gif"
export default function Navbar(){
    return(
        <div className="navbar">
            <img src={flurryLogo} alt="" />
            <div className="navbar-title">
                <a href="w"><h1>flurryfiesta</h1></a>
            </div>
            <div className="navbar-items">
                <a href="w"><h2>flurry shop</h2></a>
                <a href="w"><h2>flurry puns</h2></a>
                <a href="w"><h2>coffee</h2></a>
            </div>
        </div>
    )
}