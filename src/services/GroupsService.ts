import to from "await-to-js";
import axios from "axios";

export class GroupsService {

    async getGroups() {
        const [err, response] = await to(axios.get('http://localhost:8000/groups'));
        if (err) throw err;

        return response?.data;
    }

    async participateInGroup(id: number) {
        const [err, response1] = await to(axios.get('http://localhost:8000/groups/' + id));
        if (err) throw err;

        const group = response1?.data;
        if (group.participants === group.availablePlaces) throw new Error('No available places in the group');

        console.log('group: ', group);
        const [err2, response2] = await to(axios.patch('http://localhost:8000/groups/' + id, {
            participants: group.participants + 1
        }));

        console.log('response2: ', response2?.data);
        if (err2) throw err2;

        return response2?.data;
    }

}