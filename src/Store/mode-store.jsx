import { createContext, useReducer } from "react";

export const Mode = createContext({
  mode: String,
  onDarkMode: () => { },
  offDarkMode: () => { },
})

const ModeReducer = (currMode, action) => {
  if (action.type === "ON_DARK_MODE") {
    return {mode:action.payload.mode};
  }
  if (action.type === "OFF_DARK_MODE") {
    return {mode:action.payload.mode};
  }
  return currMode;
}

const ModeProvider = ({ children }) => {
  const [modeState, dispatchMode] = useReducer(ModeReducer, {
    mode:"light"
  });

  const onDarkMode = () => {
    dispatchMode({
      type: "ON_DARK_MODE",
      payload: {
        mode:"dark"
      }
    })
  };
  const offDarkMode = () => {
    dispatchMode({
      type: "OFF_DARK_MODE",
      payload: {
        mode:"light"
      }
    })
  };

  return (
    <Mode.Provider value={{
      mode: modeState.mode,
      offDarkMode,
      onDarkMode,
    }}>
      {children}
    </Mode.Provider>
  );
  
};

export default ModeProvider;