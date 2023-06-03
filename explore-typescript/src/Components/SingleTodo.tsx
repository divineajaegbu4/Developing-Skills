import React from "react";
import { Todo } from "./model";
import {MdDone} from "react-icons/md"
import  {AiFillEdit, AiFillDelete} from "react-icons/ai"



import "./Styles.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodos = ({ todo, todos, setTodos }: Props) => {
  return (
    <div className="todos_single">
      <span className="todos_single--text">{todo.todo}</span>
      <div>

        <span className="icon"><AiFillEdit/></span>
        <span className="icon"><AiFillDelete/></span>
        <span className="icon"><MdDone/></span>
      </div>
    </div>
  );
};

export default SingleTodos;
