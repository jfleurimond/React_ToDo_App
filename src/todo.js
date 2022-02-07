//will contain my todo component
import { AiOutlineClose } from "react-icons/ai";

function Todo({ deleteValue, task }) {
  return (
    <>
      <p>
        {task.task}
        <span
          className="todos"
          onClick={() => {
            deleteValue(task.id);
          }}
        >
          {" "}
          <AiOutlineClose />
        </span>
      </p>
    </>
  );
}

export default Todo;
