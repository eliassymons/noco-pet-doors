import BlogPost from "./BlogPost";

function Blog(props) {
  const posts = props.userData.map((data) => {
    return <BlogPost body={data.body} title={data.title} />;
  });
  return (
    <div className="blog">
      <h1>Blog</h1>
      {posts}
    </div>
  );
}

export default Blog;
