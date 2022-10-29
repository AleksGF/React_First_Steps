const NewPost = () => {
    return (
        <div className="new-post">
            <textarea id="new-post-text" className="new-post-text">What`s in your mind?..</textarea>
            <button className="new-post-submit">Send new post</button>
        </div>
    );
};

export default NewPost;