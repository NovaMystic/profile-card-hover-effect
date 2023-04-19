import cardImg from "./images/ai-man.jpg";

export default function ProfileCard() {
  return (
    <div className="card">
      <div className="img-box">
        <img src={cardImg} alt="" />
      </div>
      <div className="content">
        <div className="details">
          <h2>
            Henry Francis
            <br />
            <span>Senior Web Designer</span>
          </h2>
          <div className="data">
            <h3>
              342
              <br />
              <span>Posts</span>
            </h3>
            <h3>
              120k
              <br />
              <span>Followers</span>
            </h3>
            <h3>
              285
              <br />
              <span>Following</span>
            </h3>
          </div>
          <div className="action-btn">
            <button>Follow</button>
            <button>Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
