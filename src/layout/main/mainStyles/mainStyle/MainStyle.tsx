import './MainStyle.css';
import ImageButton from "./ImageButton";

interface MainStyleProps {
    name: string;
    description: string;
    imageUrl: string;
    imageFirst: boolean;
}

const MainStyle = ({
                        name,
                        description,
                        imageUrl,
                        imageFirst,
                    }: MainStyleProps) => {

    return (
        <div className='main-style'>
            <div className='main-style-break'/>
            <div style={{ flexDirection: imageFirst ? "row-reverse" : "row" }} className="main-style-content">
                <div className={imageFirst ? 'main-style-image-container-first' : 'main-style-image-container-second'}>
                    <ImageButton title={name} url={imageUrl}/>
                </div>
                <div className={imageFirst ? 'main-style-description-first' : 'main-style-description-second'}>
                    {description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra vel dolor a maximus. Proin condimentum eros eu ipsum sollicitudin molestie. Donec ultricies aliquam tellus, nec imperdiet ante tempus vitae.'}
                </div>
            </div>
        </div>
    )

}

export default MainStyle;