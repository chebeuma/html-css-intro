import { BUYICECREAM,RETURNICECREAM } from "./orderTypes";

export const buy(payload){
    return{
        type:BUYICECREAM,
        payload,
    };

}
export const returned(payload){
    return{
        type:RETURNICECREAM,
        payload,
    };
}