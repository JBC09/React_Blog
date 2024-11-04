import React, { useContext, useRef } from "react";
import Button from "./Btn";
import {ListContext} from "../Context";
import {  useNavigate } from "react-router-dom";


function Create() {
    
    const {createBlog} = useContext(ListContext);
    const navigate = useNavigate();
    const titleRef = useRef();
    const ContentRef = useRef();    


    return (
        <div id="Create">
            <h1 className="title">Blog Create</h1>

            <form>
                <div>
                    <label>Title</label>
                    <input ref={titleRef} type="text" name="title" required />
                </div>

                <div>
                    <label>Content</label>
                    <textarea ref={ContentRef} name="content" required rows={8}></textarea>
                </div>  

                <Button text="add" fc={()=>{
                    createBlog(titleRef.current.value, ContentRef.current.value)
                    navigate("/");
                }} />
            </form>
        </div>
    );  
}

export default Create;