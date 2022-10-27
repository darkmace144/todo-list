import { TodoState } from "../store/types";
import { toggleTodo, deleteTodo } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";

const TodoCard = () => {
  const todos = useSelector((state: TodoState) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap gap-5 justify-center w-full">
      {todos.map(
        (todo: {
          id: number;
          title: string;
          description: string;
          done: boolean;
        }) => (
          <div
            key={todo.id}
            className={`flex flex-col w-[20rem] h-[20rem] justify-between border border-gray-200 p-2 bg-white rounded-xl shadow-lg hover:skew-x-1 hover:-skew-y-1 duration-500 ${
              todo.done
                ? "hover:shadow-green-500/50"
                : "hover:shadow-purple-500/50"
            }  relative`}
          >
            <div className="flex flex-col space-y-2 h-full w-full ">
              <h1 className="text-xl font-bold">{todo.title}</h1>
              <span className="text-sm break-all">{todo.description}</span>
            </div>
            <div className="flex w-full justify-between">
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="bg-red-500 hover:bg-red-700 text-white p-2 w-20 rounded-lg"
              >
                Delete
              </button>
              <label className="inline-flex items-center mt-3">
                <span className="mr-2 text-gray-700">Complete</span>
                <input
                  aria-describedby="checkbox"
                  type="checkbox"
                  className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-[18px] w-[18px] rounded"
                  onChange={() => dispatch(toggleTodo(todo.id))}
                />
              </label>
            </div>
            {todo.done && (
              <div className="flex flex-col justify-center items-center absolute backdrop-blur-sm  top-0 left-0 h-full w-full rounded-xl">
                <h1 className="font-bold">Task Completed</h1>
                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  className="bg-red-500 p-2 rounded-xl text-white"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default TodoCard;
