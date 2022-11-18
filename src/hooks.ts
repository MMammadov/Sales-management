import { useQuery } from "react-query";
import { carService } from "./services/carService";

export function useCarMakes() {
    const query = useQuery('carService.getMakes', carService.getMakes);

    return query;    
}

