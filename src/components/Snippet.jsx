import '../styles/snippet.css';

function Snippet(props){
    return(
        <div className="snippet">
            <h2 className="snippet__title">Snippets from My Journal</h2> 
            <div className={`snippet__content ${props.isFading ? 'fade': null}`}>
                <p className="snippet__text">{props.snippet}</p>
            </div>
        </div>
    )
} 

export default Snippet;