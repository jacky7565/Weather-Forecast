import { createContext, useContext, useState } from "react";

import FetchApi from "./FetchApi";
import LocationData from "./FetchDataLocation";

const MyContext = createContext(null);
export const useWetherContext = () => {
  return useContext(MyContext);
};

export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [searchCityName, setCitySearch] = useState("");
  let fetchApiData = async () => {
    let response = await FetchApi(searchCityName);
    setData(response);
    // console.log(`api res ==${response}`)
  };

  let currentLocationFetchData = async () => {
    let currentLoc = navigator.geolocation.getCurrentPosition(
      (position) => {
        LocationData(position.coords.latitude, position.coords.longitude).then(
          (data) => {
            setData(data);
          }
        );
      },
      (error) => {
        console.error(`location error ${error}`);
      }
    );
    // console.log(currentLoc)
  };

  // console.log(`api serch ==${data}`)
  return (
    <MyContext.Provider
      value={{
        data,
        searchCityName,
        setCitySearch,
        fetchApiData,
        currentLocationFetchData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
