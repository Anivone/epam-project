import to from "await-to-js";
import axios from "axios";
import { normalizeData } from "../tools/UsersFunctions";

export class UserService {

    async getUsers(count: number = 10) {
        const [err, response] = await to(axios.get('https://randomuser.me/api/?results=' + count));
        if (err) throw err;

        return normalizeData(response?.data.results);
    }

}