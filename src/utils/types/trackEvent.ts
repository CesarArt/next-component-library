import { mongoCollection } from "./common";

export enum ComponentEnum {
    "Button" = "button",
    "Input" = "input",
    "Card" = "card",
    "modal" = "modal",
}

export interface trackEventReq {
    component: ComponentEnum,
    variant: string,
    action: string
}
export interface trackEventRes extends mongoCollection, Omit<trackEventReq, 'component'>{
    component: string,
}

