import '../styles/slider.css' 
import data from '../data';

function Slider() {

    return(
        <div className='slider'>
            <div className='slider__image' style={{ backgroundImage: `url(${data[0].url})`}}></div>
        </div>
    )
}


export default Slider;