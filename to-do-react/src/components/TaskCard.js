import { Link } from "react-router-dom";
import AvatarDisplay from "./AvatarDisplay";
import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import DueDate from "./DueDate";
import DeleteBlock from "./DeleteBlock";
import DescriptionDisplay from "./DescriptionDisplay";
import "../styles/TaskCard.sass";

const TaskCard = ({ color, task, onDelete }) => {

  return (
    <div className="task-card">
      <Link to={`/task/${task.id}`} id="link">
        <div className="task-color" style={{ backgroundColor: color }}></div>
        <h3>{task.title}</h3>
        <AvatarDisplay avatar={task.avatar} owner={task.owner} />
        <StatusDisplay status={task.status} />
        <DescriptionDisplay description={task.description} />
        <ProgressDisplay progress={task.progress} />
        <DueDate duedate={task.duedate} />
        <PriorityDisplay priority={task.priority} />
      </Link>
      <DeleteBlock handleDelete={onDelete} />
    </div >
  )
}

export default TaskCard;