import { useEffect, useState } from "react"
import { apiGet } from "../../services";

export const useApi = (url, headers) => {
    const [data, fetchData] = useState([]);
    
    const getData = async () => {
        try {
            let res = await apiGet(url, {});
            fetchData(res);
        }
        catch (ex) {
            console.log(ex);
        }
    }
    useEffect(() => {
        getData();

    }, [url]);
    return data;
}