function BlogPost(props) {
  return (
    <div className="blog-post">
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  );
}

export default BlogPost;
