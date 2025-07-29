import '../styles/snippet.css';
import Typewriter from 'typewriter-effect'; 

function Snippet(props){
    return(
        <div className="snippet">
            <h2 className="snippet__title">Snippets from My Journal</h2> 
            <div 
            className={`snippet__content ${props.isFading ? 'fade': null}`}
            onClick={() => props.setIsTyping(false)} 
            title='Click to stop typing effect and view full snippet'>
                <p className="snippet__text"> 
                    {props.isTyping ? (
                        <Typewriter
                        options={{
                            strings: props.snippet,
                            autoStart: true,
                            loop: false,
                            delay: 50, 
                        }} />
                    ) : (props.snippet)}
                </p>
            </div>
        </div>
    )
} 

export default Snippet;