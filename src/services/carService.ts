import { IMake, IModel, IModelDetail, ITrim } from "../models";
import { httpClient } from "./httpClient";

class CarService {
    private baseUrl = 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=';

    public getMakes = async (): Promise<IMake[]> => {
        const makes: string = await httpClient.get(`${this.baseUrl}getMakes`);
        const fixed = makes.substring(2).slice(0, -2);
        return JSON.parse(fixed).Makes;
    }

    public getModels = async (make_id: string): Promise<IModel[]> => {
        const models: string = await httpClient.get(`${this.baseUrl}getModels&make=${make_id}`);
        const fixed = models.substring(2).slice(0, -2);
        return JSON.parse(fixed).Models;
    }

    public getTrims = async (make_id: string, model: string): Promise<ITrim[]> => {
        const trims = await httpClient.get(`${this.baseUrl}getTrims&make=${make_id}&model=${model}&year=2021`);
        const fixed = trims.substring(2).slice(0, -2);

        return JSON.parse(fixed).Trims;
    }

    public getModelDetails = async (model_id: string): Promise<IModelDetail> => {
        const modelDetails = await httpClient.get(`${this.baseUrl}getModel&model=${model_id}`);
        const fixed = modelDetails.substring(2).slice(0, -2);

        return JSON.parse(fixed)[0];
    }
}

export const carService = new CarService();