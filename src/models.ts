export interface IMake {
    make_id: string;
    make_display: string;
    make_is_common: string;
    make_country: string;
}

export interface IModel {
    model_name: string;
    model_make_id: string;
}

export interface ITrim {
    model_id: string;
    model_trim: string;
}

export interface IModelDetail {
    model_weight_kg: string;
    model_top_speed_kph: string;
    model_engine_power_hp: string;
    model_engine_l: string;
    model_engine_fuel: string;
    model_doors: string;
    make_display: string;
    model_name: string;
}