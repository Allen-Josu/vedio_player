import axios from "axios";

export const commonAPI = async (httpmethod, url, reqBody) => {
    let reqconfig = {
        method: httpmethod,
        url,
        data: reqBody,
        Headers: {
            "Content-Type": "application/json",
        },
    };
    return await axios(reqconfig)
        .then((result) => {
            console.log("then in reqconfig");
            return result;
        })
        .catch((error) => {
            console.log("error in reqconfig");
            console.log(error);
            return error;
        });
};
