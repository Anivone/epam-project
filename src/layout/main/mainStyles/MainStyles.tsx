import './MainStyles.css';
import MainStyle from "./mainStyle/MainStyle";

import { useContext, useEffect, useState } from "react";
import to from "await-to-js";
import ContainerContext from "../../../context/ContainerContext";

const MainStyles = () => {

    const { groupsService } = useContext(ContainerContext);
    const [styles, setStyles] = useState<any[]>([]);

    useEffect(() => {
        (async () => {
            const [err, groups] = await to(groupsService.getGroups());
            if (err) throw err;

            setStyles(groups || []);
        })();
    }, []);

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
                { styles.map((dance, i) => <MainStyle key={i}
                    name={dance.dance} description={dance.description} imageUrl={dance.imageUrl} imageFirst={i % 2 === 0}/>)}
            </div>
        </div>
    )
}

export default MainStyles;