import '../styles/entry.css'

function Entry(props) {
    return(
        <article className="journal-entry">
            <div className="main-img-container">
                <img className="main-img" src={props.img.src} alt={props.img.alt}/> 
            </div> 
            <div className="info-container">
                <img className='address-marker' src="/images/Fill 219.png" alt="marker" />
                <span className="address">{props.address}</span> 
                <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>  
                <p className="entry-text">{props.text}</p>
            </div>
        </article>
    )
} 

export default Entry;