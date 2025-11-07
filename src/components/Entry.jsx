

export default function Entry(props){
    return (
        <article className="journal-entry">
            {/* creating img inside div for full flexibility --> css*/}
            <h2 className="mobile-h2">{props.name}</h2>
            <div className="img-container">
                <img src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="content">
                <img className="marker" src="../src/assets/marker.png" alt="marker-logo" />
                <span>{props.location}</span>
                <a href={props.link} alt="google map link">View on Google Map</a>
                <h2>{props.name}</h2>
                <h5>{props.visited}</h5>
                <p>{props.about}<br/>{props.about2}</p>
            </div>             
        </article>
    )
}