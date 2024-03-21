import { instance } from ".";

const getData = async (path: string): Promise<any> => {
    try {
        const response = await instance.get(path);
        return response.data;
    } catch (error) {
        console.error("Error while fetching data:", error);
        throw error;
    }
};

export { getData };
