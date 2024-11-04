import React, { useContext } from "react";
import { ListContext } from "../Context";
import { useNavigate } from "react-router-dom";


function View() {
    const {items, setItems} = useContext(ListContext);

    const navigate = useNavigate();
    

    function BlogList() {

        return (
            <div id="itemWrap">
                {items.map((item) => (
                    <div className="items" key={item.title} onClick={()=>{
                        navigate(`/detail/${items.indexOf(item)}`);
                    }}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div id="ViewList">
            <h1 className="title">Blog List</h1>

            {BlogList()}
        </div>
    );  
}

export default View;