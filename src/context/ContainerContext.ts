import { UserService } from "../services/UserService";
import { createContext } from "react";

interface ContainerContextProps {
    userService: UserService;
}

const ContainerContext = createContext<ContainerContextProps>({
    userService: new UserService(),
});

export default ContainerContext;