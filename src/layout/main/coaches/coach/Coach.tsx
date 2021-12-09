import './Coach.css';
import { sectionColorOne, sectionColorTwo } from "../../../../tools/Colors";

interface CoachProps {
    fullName: string;
    imageUrl: string;
    dance: string;
    phone: string;
    variant: 'blue' | 'white';
}

const Coach = ({ fullName, imageUrl, dance, phone, variant }: CoachProps) => {

    const parsedName = fullName.split(' ');

    return (
        <div style={{ backgroundColor: variant === 'blue' ? sectionColorTwo : sectionColorOne }}
             className='coach-card'>
            <img src={imageUrl} alt=""/>
            <div className='coach-name'>{parsedName[0]}</div>
            <div className="coach-surname">{parsedName[1]}</div>
            <div className='coach-dance'>{dance}</div>
            <div className="coach-phone">{phone}</div>
        </div>
    );

}

export default Coach;