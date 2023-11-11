import "./UserCard.css";

// Task-2
const UserCardComponent = (props) => {
  const { name, email, avatar } = props;

  return (
    <div className="user-card">
      <img src={avatar} alt="User" />
      <br />
      <b>{name}</b>
      <br />
      <b>{email}</b>
    </div>
  );
};

export default UserCardComponent;
