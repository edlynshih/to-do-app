import blankAvatar from "../images/blankavatar.jpeg";

const AvatarDisplay = ({ avatar, owner }) => {
  return (
    <div className="avatar-container">
      <div className="image-container">
        <img src={avatar? avatar : blankAvatar} alt={`photo of ${owner}`}/>
      </div>
    </div>
  );
};

export default AvatarDisplay;