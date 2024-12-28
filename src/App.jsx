import React from "react";
import { MyContextProvider } from "./ContexApi/MyContext";
import WetherApp from "./Weather";
function App() {
  return (
 
<MyContextProvider>

  <WetherApp/>

</MyContextProvider>


  );
}

export default App;
