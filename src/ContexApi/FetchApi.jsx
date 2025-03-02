import axios from "axios";

let FetchApi = async (city) => {
  const APIKEY = import.meta.env.VITE_APIKEY;
  const APIURL = import.meta.env.VITE_APIURL;
  const API = `${APIURL}?q=${city}&appid=${APIKEY}`;

  try {
    const response = await axios.get(API);
    // console.log(`myapiii == ${response}`)
    return response;
  } catch (error) {
    console.error("Api Fetch Error", error);
    throw error;
  }
};
export default FetchApi;
