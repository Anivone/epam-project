import './Group.css';
import { Button } from "@mui/material";
import { useContext } from "react";
import ContainerContext from "../../../../context/ContainerContext";
import to from "await-to-js";
import ImageButton from "../../mainStyles/mainStyle/ImageButton";

interface GroupProps {
    index: number,
    id: number,
    dance: string,
    imageUrl: string,
    availablePlaces: number,
    participants: number,
    getGroups: any,
    setAlert: any,
    handleAlert: any,
}

const Group = ({
                   index,
                   id,
                   dance,
                   imageUrl,
                   availablePlaces,
                   participants,
                   getGroups,
                   setAlert,
                   handleAlert,
               }: GroupProps) => {

    const { groupsService } = useContext(ContainerContext);

    const handleClick = async () => {
        const [err] = await to(groupsService.participateInGroup(id));
        if (err) {
            setAlert({
                severity: 'error',
                message: err.message,
            });
            handleAlert();
        }

        await getGroups();
    }

    return (
        <div style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }} className='group'>
            <ImageButton title={dance} url={imageUrl}/>
            <div className='group-information'>
                <div>Available places:</div>
                <div>{availablePlaces}</div>
            </div>
            <div className='group-information'>
                <div>Participants:</div>
                <div>{participants}</div>
            </div>
            <div className='group-participate'>
                <Button variant={"outlined"} onClick={handleClick}>Participate</Button>
            </div>
        </div>
    )

}

export default Group;