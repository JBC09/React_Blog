import React from "react"
import { useNavigate } from "react-router-dom";

const ListContext = React.createContext();  

function Context({children}) {

    const [items, setItems] = React.useState([]);  



    function createBlog(title, content) {
        setItems((prev) => [...prev, {title, content}]);
    }

    

    return(
        <ListContext.Provider value={{items, setItems, createBlog}}>
            {children}
        </ListContext.Provider> 
    )
}

export default Context;
export { ListContext }