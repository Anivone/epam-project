import './MainStyles.css';
import MainStyle from "./mainStyle/MainStyle";

import hipHopImage from '../../../assets/images/hip-hop.jpeg';
import breakDanceImage from '../../../assets/images/break-dance.png';
import twerkDanceImage from '../../../assets/images/twerk.jpeg';

const defaultDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra vel dolor a maximus. Proin condimentum eros eu ipsum sollicitudin molestie. Donec ultricies aliquam tellus, nec imperdiet ante tempus vitae.';

const mainStyles = [
    {
        name: 'Hip-Hop',
        description: defaultDescription,
        imageUrl: hipHopImage
    },
    {
        name: 'Break',
        description: defaultDescription,
        imageUrl: breakDanceImage
    },
    {
        name: 'Twerk',
        description: defaultDescription,
        imageUrl: twerkDanceImage
    },
]

const MainStyles = () => {
    return (
        <div className='main-styles'>
            <div className='main-styles-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra vel dolor a maximus. Proin
                condimentum eros eu ipsum sollicitudin molestie. Donec ultricies aliquam tellus, nec imperdiet ante
                tempus vitae. Ut interdum eleifend nisi, eget ultricies nisl placerat eget. Integer commodo purus
                tellus, vitae ornare mauris dapibus ultricies. Sed ultrices sodales velit, eget faucibus dui imperdiet
                et. Morbi nec scelerisque libero.
            </div>
            <div className='main-styles-container'>
                { mainStyles.map((dance, i) => <MainStyle key={i}
                    name={dance.name} description={dance.description} imageUrl={dance.imageUrl} imageFirst={i % 2 === 0}/>)}
            </div>
        </div>
    )
}

export default MainStyles;