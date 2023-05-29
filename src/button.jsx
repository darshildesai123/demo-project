import "./Post.css";


function Btn(props){
    return(
        <>
        <div>
            <button>{props.content ? props.content:"Click Here"}</button>
        </div>
        </>
    )
}

export default Btn;