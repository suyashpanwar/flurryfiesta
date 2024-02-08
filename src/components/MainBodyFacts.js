// import doggo from "./doggo.jpg"
export default function MainBodyFacts(props){
    return(
        <div className="main-body-elements">
            <img src={props.img} alt="unavailable" />
            <span className="flurry-name">I'm {props.fname}</span>
            <span className="flurry-name-type">{props.type}</span>
            <div className="flurry-mood">                
                <span>{props.mood}</span>
            </div>
        </div>
    )
}