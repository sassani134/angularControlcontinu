export interface StationResponse {
    id: number; //uuid
    city: string;
    //nullable: true;
    isActive: boolean;
    installationDate: string; //$date-time
    latitude: number; //float
    longitude: number; //float
    name: string;
    //nullable: true;
    operatingStateDate: string; //$date-time
    updatedDate: string; //$date-time
    firmwareVersion: string;
    //nullable: true; c'est quoi jamais vu dans une api
}