import '../styles/snippet.css';
import Typewriter from 'typewriter-effect'; 

function Snippet(props){
    return(
        <div className="snippet">
            <h2 className="snippet__title">Snippets from My Journal</h2> 
            <div className={`snippet__content ${props.isFading ? 'fade': null}`}>
                <p className="snippet__text">
                    <Typewriter
                        options={{
                            strings: props.snippet,
                            autoStart: true,
                            loop: false,
                            delay: 50, 
                            cursor: '|',
                        }}
                    />
                </p>
            </div>
        </div>
    )
} 

export default Snippet;