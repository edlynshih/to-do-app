const DeleteBlock = ({ handleDelete }) => {

  return (
    <div className="delete-block">
      <div className="delete-icon" onClick={handleDelete}>x</div>
    </div>
  );
};

export default DeleteBlock;