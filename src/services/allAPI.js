
import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

//api to upload vedios
export const uploadAllVedios = async (reqBody) => {
    return await commonAPI("POST", `${serverURL}/vedios`, reqBody);
};

// api to get all vedios
export const getAllVedios = async () => {
    return await commonAPI(`GET`, `${serverURL}/vedios` ,``);
};

//api to delete Vedios
export const deleteVedios = async (id) => {
    return await commonAPI(`DELETE`,`${serverURL}/vedios/${id}`,{})
}

//api to get watch History

export const addToHistory = async (vedioDetails)=>{
    return await commonAPI(`POST` , `${serverURL}/category`,vedioDetails)
}