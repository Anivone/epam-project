import './Groups.css';
import { useContext, useEffect, useState } from "react";
import ContainerContext from "../../../context/ContainerContext";
import to from "await-to-js";
import Group from "./group/Group";
import { Alert, Snackbar } from "@mui/material";

const Groups = () => {

    const { groupsService } = useContext(ContainerContext);
    const [groups, setGroups] = useState<any[]>([]);

    const [alert, setAlert] = useState({
        severity: '',
        message: '',
    })
    const [alertOpen, setAlertOpen] = useState(false);

    useEffect(() => {
        (async () => {
            await getGroups();
        })();
    }, []);

    const getGroups = async () => {
        const [err, groups] = await to(groupsService.getGroups());
        if (err) throw err;

        setGroups(groups || []);
    }

    const handleAlert = () => {
        setAlertOpen(!alertOpen);
    }

    return (
        <div className='groups'>
            <Snackbar open={alertOpen} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                      autoHideDuration={4000}
                      onClose={handleAlert}>
                <Alert elevation={6} variant={'filled'} onClose={handleAlert}
                       severity={alert.severity === 'error' ? "error" : 'warning'}>
                    {alert.message}
                </Alert>
            </Snackbar>
            {groups.length
                ? groups.map((group, i) =>
                    <Group
                        key={i}
                        index={i}
                        id={group.id}
                        dance={group.dance}
                        imageUrl={group.imageUrl}
                        availablePlaces={group.availablePlaces}
                        participants={group.participants}
                        getGroups={getGroups}
                        setAlert={setAlert}
                        handleAlert={handleAlert}
                    />)
                : null
            }
        </div>
    )

}

export default Groups;