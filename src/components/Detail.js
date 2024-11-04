import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ListContext } from "../Context";   


function Detail() {

    const {items} = useContext(ListContext);
    const {id} = useParams();
    
    console.log(items[id]);
    
    return (
        <div>
            <h1 className="title">Detail</h1>
            <h1>{items[id].title}</h1>
            <h3>{items[id].content}</h3>
        </div>
    );
}


export default Detail;