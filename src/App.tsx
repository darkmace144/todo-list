import AddTodo from "./components/AddTodo";
import TodoCard from "./components/TodoCard";

const App = () => {
  return (
    <div className="h-screen w-full space-y-10 p-10 bg-gray-100">
      <div className="flex w-full flex-col items-center space-y-10">
        <h1 className="text-6xl uppercase text-gray-800">TODO List</h1>
        <AddTodo />
        <TodoCard />
      </div>
    </div>
  );
};

export default App;
