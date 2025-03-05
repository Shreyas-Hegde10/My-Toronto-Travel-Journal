function Entry(props) {
    return(
        <article className="journal-entry">
            <div className="main-img-container">
                <img className="main-img" src={props.img.src} alt={props.img.alt}/> 
            </div> 
            <div className="info-container">
                <span className="address">{props.address}</span> 
                <a href={props.googleMapsLink} target="_blank"></a>
                <h2 className="entry-title">{props.title}</h2>  
                <p className="entry-text">{props.text}</p>
            </div>
        </article>
    )
} 

export default Entry;