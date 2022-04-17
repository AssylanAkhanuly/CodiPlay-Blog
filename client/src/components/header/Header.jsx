import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Single Page Blog Application</span>
        <span className="headerTitleLg">CodiPlay</span>
      </div>
      <img
        className="headerImg"
        src="http://localhost:5000/images/codiPlay.png"
        alt=""
      />
    </div>
  );
}
