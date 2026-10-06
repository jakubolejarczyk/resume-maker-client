import { ANIMAL_MOCK_PROVIDER } from "../../mock/provider/animal-mock.provider";
import { AnimalApiService } from "../service/animal-api.service";

export const ANIMAL_API_PROVIDER = [...ANIMAL_MOCK_PROVIDER, AnimalApiService];