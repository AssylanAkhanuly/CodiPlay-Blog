import "./post.css";
import {Link} from 'react-router-dom'
export default function Post(post) {
  const p = post.post
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
    {p.photo && (
      <img className="postImg" src={PF+p.photo}  alt="" />
    )}
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">c</span>
        </div>
        <Link className="link" to={`/post/${p._id}`}>
        <span className="postTitle">{p.title}</span>
        </Link>
          <hr />
        <span className="postDate">{p.updatedAt}
        </span>

      </div>
      <p className="postDesc">{p.desc}</p>
      <span className="postDate">Author: {p.username}
      </span>
    </div>
  );
}
