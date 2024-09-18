import { fetchData } from "../config/api";

export const getAllEpics = ()=>{
    return fetchData('epics');
}