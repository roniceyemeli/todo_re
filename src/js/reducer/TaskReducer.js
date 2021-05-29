import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "../type";

const initialState = {
  taskList: [
    {
      id: 0,
      task: "Learn HTML and CSS",
      IsDone: true,
    },
    {
      id: 1,
      task: "Learn REACT",
      isDone: true,
    },
    {
      id: 2,
      task: "Learn ES6",
      isDone: false,
    },
    {
      id: 3,
      task: "Learn NODE JS",
      isDone: false,
    },
  ],
};

const TaskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, taskList: [...state.taskList, payload] };
    case DELETE_TASK:
      return {
        ...state,
        tasklist: state.taskList.filter((el) => el.id !== payload),
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tasklist: state.taskList.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasklist: state.taskList.map((el) =>
          el.id === payload.id ? { ...el, task: payload.value } : el
        ),
      };
    default:
      return state;
  }
};

export default TaskReducer;
