import Post from '../post/Post';
import "./posts.css";

export default function Posts(p) {
  const posts = p.posts;
  return (
    <div className="posts">
    {(posts && posts.length > 0) && posts.map(post => (
      <Post post={post}/>
    ))}
    </div>
  );
}
