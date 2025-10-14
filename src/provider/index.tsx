
import { BrowserRouter as Router } from "react-router-dom";
const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        // <Provider store={store}>
        <Router>
            {/* <ParentContextProvider>{children}</ParentContextProvider> */}
            {children}
        </Router>
        // </Provider>
    )
};

export default AppProvider;