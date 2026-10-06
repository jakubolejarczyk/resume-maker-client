import { ANIMAL_API_PROVIDER } from "../api/provider/animal-api.provider";
import { ANIMAL_STORE_PROVIDER } from "../store/provider/animal-store.provider";
import { AnimalService } from "./animal.service";

export const ANIMAL_SERVICE_PROVIDER = [ANIMAL_API_PROVIDER, ANIMAL_STORE_PROVIDER, AnimalService];