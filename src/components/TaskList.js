import React from "react";
import Task from "./Task";
import FilterButton from "./FilterButton";

function TaskList({
  tasks,
  filterMap,
  filterKey,
  filterKeys,
  handleFilter,
  toggleStatus,
  deleteTask,
}) {
  return (
    <>
      <ul className="task-list">
        {tasks.filter(filterMap[filterKey]).map((task) => (
          <Task
            task={task}
            toggleStatus={toggleStatus}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
      <div className="filter-btn-group">
        {filterKeys.map((filter) => (
          <FilterButton
            btnName={filter}
            handleFilter={handleFilter}
            isPressed={filterKey === filter}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;
