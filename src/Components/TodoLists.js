import React from "react";
import Todo from "./Todo";

const TodoLists = () => {
  return (
    <div>
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        <Todo />
        <Todo />
      </div>
    </div>
  );
};

export default TodoLists;
