import "./Post.css";

function Post(props) {
  return (
    <div className="main">
      <img src={props.src} className="poster" />
      <div className="content">
        <p>{props.content}</p>

        <button className="btn1">Learn more</button>
        <button className="btn2">Share</button>
      </div>
    </div>
  );
}

export default Post;