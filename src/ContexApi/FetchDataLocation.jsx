import axios from "axios";
const LocationData = async (latitude,longitude) => {

    const APIKEY = import.meta.env.VITE_APIKEY;
  const APIURL = import.meta.env.VITE_APIURL;

  const API = `${APIURL}?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;

  try {
    let apiRes = await axios.get(API);
    return apiRes;
  } catch (error) {
    console.error(`Api response error ${error}`);
  }
};
export default LocationData;