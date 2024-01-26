"use client";
import React, { useState } from "react";

const Page = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { task, desc }]);
    setTask("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2 className="font-sans">No Task Availible</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i}>
          <div className="flex justify-between m-2">
            <div>
              <h2 className="font-sans font-bold">{t.task}</h2>
              <h2 className="font-sans font-normal">{t.desc}</h2>
            </div>
            <button
              onClick={() => {
                deleteHandler(i);
              }}
              className="bg-blue-500 hover:bg-blue-600 font-sans text-white px-4 py-1  rounded-md"
            >
              Delete
            </button>
          </div>
          <hr />
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="font-sans text-4xl p-4 bg-white shadow-md font-black flex justify-center">
        To-Do List
      </h1>
      <form
        onSubmit={submitHandler}
        className="flex justify-center gap-7 m-4 p-4 bg-white shadow-md rounded-lg"
      >
        <input
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          type="text"
          placeholder="Enter Task"
          className="bg-slate-100 rounded-md px-3 py-2 font-sans placeholder:text-gray-800"
        />
        <input
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          type="text"
          placeholder="Enter Description"
          className="bg-slate-100 w-6/12 rounded-md px-3 py-2 font-sans placeholder:text-gray-800"
        />
        <button className="bg-blue-500 hover:bg-blue-600 font-sans  text-white px-4 py-1  rounded-md">
          Add Task
        </button>
      </form>

      <div className=" m-4 p-4 bg-white shadow-md rounded-lg">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};
export default Page;
