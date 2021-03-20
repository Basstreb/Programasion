import React from 'react'
// import useInitalState from '../hooks/useInitialState';

const AppContext = React.createContext({});

// export const AppContextProvider = ({ children }) => {
//     const initialState = useInitalState();

//     return (
//         <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
//     )
// }
// ES UN MODO VALIDO PERO PARA ESTE EJEMPLO LO VAMOS A DEJAR DE LADO

export default AppContext;