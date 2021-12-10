import { UserService } from "../services/UserService";
import { createContext } from "react";
import { GroupsService } from "../services/GroupsService";

interface ContainerContextProps {
    userService: UserService;
    groupsService: GroupsService;
}

const ContainerContext = createContext<ContainerContextProps>({
    userService: new UserService(),
    groupsService: new GroupsService(),
});

export default ContainerContext;