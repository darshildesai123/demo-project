import "./Post.css";

function Post() {
  return (
    <div className="main">
      <img
        src="https://wallpapercave.com/wp/wp2599594.jpg"
        className="poster"
      />
      <div className="content">
        <p>
          Paragraphs are medium-sized units of writing, longer than sentences,
          but shorter than sections, chapters, or entire works. Because they
          connect the “small” ideas of individual sentences to a “bigger” idea,
          paragraph structure is essential to any writing for organization,
          flow, and comprehension. Students have a lot of questions when it
          comes to writing a paragraph: How many sentences should you use? How
          do you transition within a paragraph? When do you end a paragraph?
          Etc. Below we explain everything you need to know about paragraph
          structure to write like an expert, including several paragraph
          examples.
        </p>

        <button className="btn1">Learn more</button>
        <button className="btn2">Share</button>
      </div>
    </div>
  );
}

export default Post;
