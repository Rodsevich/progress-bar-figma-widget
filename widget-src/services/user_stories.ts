import { fetchData } from "../config/api";

export const getAllInfo = () =>{
    return fetchData('user_stories_by_users');
}