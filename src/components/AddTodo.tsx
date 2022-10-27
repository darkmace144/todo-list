import { useSelector, useDispatch } from "react-redux";
import { setTodoTitle, setTodoDescription, addTodo } from "../store/actions";
import { TodoState } from "../store/types";

const AddTodo = () => {
  const newTodoTitle = useSelector((state: TodoState) => state.newTodoTitle);
  const dispatch = useDispatch();
  const newTodoDescription = useSelector(
    (state: TodoState) => state.newTodoDescription
  );
  const errorHandle =
    newTodoTitle.length !== 0 && newTodoDescription.length !== 0;

  return (
    <div className="flex flex-col w-[60rem] space-y-2 bg-white justify-between p-5 mt-5 h-[12rem] rounded-xl shadow-lg shadow-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/50 duration-500 border border-gray-200">
      <input
        placeholder="Enter Title"
        value={newTodoTitle}
        maxLength={20}
        onChange={(e) => dispatch(setTodoTitle(e.target.value))}
        className="border-b border-purple-800 w-1/2 p-2 hover:border-purple-600 focus:outline-none"
      />
      <input
        placeholder="Enter description"
        value={newTodoDescription}
        maxLength={100}
        onChange={(e) => dispatch(setTodoDescription(e.target.value))}
        className="border-b border-purple-800 w-1/2 p-2 hover:border-purple-600 focus:outline-none"
      />
      <div className="flex w-full justify-end">
        <button
          onClick={() => dispatch(addTodo())}
          className={`bg-purple-800 text-white p-2 w-20 rounded-lg ${
            !errorHandle ? "opacity-50" : "opacity-100"
          }`}
          disabled={!errorHandle}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
