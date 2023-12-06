import { createContext} from "react";
import Cookies from "js-cookie";
export const DataContext = createContext();

function DataContextProvider(props) {
  function validateSession() {
    const SESSION = Cookies.get("dyzam-app");

    if (SESSION !== undefined) {
      return true;
    }
    return false;
  }
  return (
    <DataContext.Provider
      value={{
        validateSession,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
