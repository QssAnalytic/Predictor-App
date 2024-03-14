import { instance } from ".";

const getData = async (path:any) => 
(await instance.get(path)).data;

export { getData };
 