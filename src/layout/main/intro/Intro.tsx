import './Intro.css';
import introImage from '../../../assets/images/intro.webp';

const Intro = () => {

    return (
        <div className='intro'>
            <img height={300} width={500} src={introImage} alt=""/>
            <div className='intro-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo nunc quis est aliquam commodo.
                Morbi dolor est, lobortis id pulvinar nec, eleifend quis felis. Pellentesque feugiat laoreet feugiat.
                Donec sit amet ex ligula. Curabitur sodales imperdiet dapibus. Integer non consectetur turpis.
                Pellentesque a auctor libero.
            </div>
        </div>
    );

}

export default Intro;