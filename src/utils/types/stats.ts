import { mongoCollection } from "./common";
import { ComponentEnum, trackEventReq } from "./trackEvent";

export interface componentsStats  {
    stats: countStat[]
    myFavorites: favoriteComponents[]
}

export interface countStat{
    _id: ComponentEnum,
    count: number

}
export interface favoriteComponents extends trackEventReq, mongoCollection {}

export interface GroupedComponent {
  component: string;
  variants: { [key: string]: number }[];
}