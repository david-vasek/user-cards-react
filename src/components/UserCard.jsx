function UserCard(props) {
  return (
    <>
      <div class="user-container-fluid">
        <div className="userClass">
          <h5>
            <a href={props.user.html_url}>{props.user.login}</a>
          </h5>
          <img
            src={props.user.avatar_url}
            alt={props.user.login}
            className="userPic"
          ></img>
          <p>{props.user.bio}</p>
          <p>
            Followers: {props.user.followers} Following: {props.user.following}
          </p>
          <p>Location: {props.user.location}</p>
        </div>
      </div>
    </>
  );
}

export default UserCard;
