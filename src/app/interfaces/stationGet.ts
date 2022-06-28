import {StationResponse} from "./stationResponse";

export interface StationGet {
    $id: number;
    $values: StationResponse[];
}
