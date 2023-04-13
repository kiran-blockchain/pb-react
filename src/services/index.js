import axios from "axios"

export const apiGet = async (url, headers) => {
    try {
        const config = {
            headers: { ...headers }
        }
        let res = await axios.get(url, config);
        return res.data;
    }
    catch (ex) {
        return { error: ex }
    }
}