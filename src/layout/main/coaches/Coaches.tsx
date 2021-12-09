import { useContext, useEffect, useState } from "react";
import to from "await-to-js";
import ContainerContext from "../../../context/ContainerContext";
import './Coaches.css';
import Coach from "./coach/Coach";

const Coaches = () => {
    const { userService } = useContext(ContainerContext);

    const [coaches, setCoaches] = useState<any[]>([]);

    useEffect(() => {
        (async () => {
            await getCoaches(5);
        })();
    }, []);

    const getCoaches = async (count: number) => {
        const [err, data] = await to(userService.getUsers(count));
        if (err) throw err;

        setCoaches(data || []);
    }

    return (
        <div className='coaches'>
            {coaches.length ? coaches.map((c, i) =>
                    <Coach
                        key={i}
                        variant={i % 2 === 0 ? 'blue' : 'white'}
                        fullName={c.full_name}
                        imageUrl={c.picture_large}
                        dance={c.dance}
                        phone={c.phone}
                    />)
                : null}
        </div>
    )

}

export default Coaches;