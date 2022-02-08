import React, { useReducer, useState } from "react";
import "./App.css";
import ListItem from "./components/ListItem";
import TodoFilter from "./components/TodoFilter";
import TodoInput from "./components/TodoInput";

type TodoItem = {
	title: string;
	completed: boolean;
	id: number;
};

export type FilterStateType = "all" | "completed" | "uncompleted";

let globalId = 0;

type Action =
	| { type: "add"; title: string }
	| { type: "toggle"; id: number }
	| { type: "removeCompleted" };

function reducer(items: TodoItem[], action: Action) {
	switch (action.type) {
		case "add":
			return [
				...items,
				{
					title: action.title,
					completed: false,
					id: globalId++,
				},
			];
		case "toggle":
			return items.map((item) => ({
				...item,
				completed: item.id === action.id ? !item.completed : item.completed,
			}));
		case "removeCompleted":
			return items.filter((item) => {
				return !item.completed;
			});
	}
}

function App() {
	const [filterState, setFilterState] = useState<FilterStateType>("all");
	const [items, dispatch] = useReducer(reducer, [
		{ id: globalId++, title: "Task A", completed: false },
		{ id: globalId++, title: "Task B", completed: false },
		{ id: globalId++, title: "Task C", completed: false },
	]);

	return (
		<div className='App'>
			<h2>Todos</h2>
			<TodoInput
				placeholder='What needs to be done?'
				onSubmit={(title) => dispatch({ type: "add", title })}
			/>
			<hr />
			<TodoFilter value={filterState} onChange={(filter) => setFilterState(filter)} />
      <ul>
        {items.filter((item) => {
          switch (filterState) {
            case "all":
              return item;
            case "completed":
              return item.completed;
            case "uncompleted":
              return !item.completed;
          }
        }).map((item) => (
					<ListItem
						title={item.title}
						completed={item.completed}
						onClick={() => dispatch({ type: "toggle", id: item.id })}
					/>
				))}
			</ul>
      <button
        disabled={!items.some(item => item.completed)}
        onClick={() => dispatch({ type: "removeCompleted" })}
      >Remove completed items</button>
		</div>
	);
}

export default App;
