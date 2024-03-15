import React from "react";

function InputField({ newTask, handleChange, handleSubmit }) {
  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <label htmlFor="newItem">Add to the todo list</label>
      <input type="text" id="newItem" value={newTask} onChange={handleChange} />
      <button type="submit">Add item</button>
    </form>
  );
}

export default InputField;
