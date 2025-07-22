import '../styles/slider.css' 
import data from '../data'; 
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'; 
import {RxDotFilled} from 'react-icons/rx';

function Slider(props) {

    return(
        <div className='slider'>
            <div className='slider__image' style={{ backgroundImage: `url(${data[props.currentIndex].url})`}}>
                <div className='slider__left_arrow'>
                <BsChevronCompactLeft size={30} onClick={props.previousSlide} /> 
                </div>  
                <div className='slider__right_arrow'>
                    <BsChevronCompactRight size={30} onClick={props.nextSlide} /> 
                </div> 
            </div>

            <div className='slider__dots'>
                {data.map((slide,slideIndex) => (
                    <div>
                        <RxDotFilled 
                            size={24} 
                            key={slideIndex} 
                            onClick={() => props.goToSlide(slideIndex)} 
                        />
                    </div>))}
            </div>
        </div>
    )
}


export default Slider;