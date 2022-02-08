import React from 'react'
import { FilterStateType } from '../App'

interface Props {
	value: string;
	onChange: (value: FilterStateType) => void;
}

function TodoFilter({ value, onChange }: Props) {
	return (
		<div>
			<label htmlFor="filter">Filter</label>
			<select id="filter" value={value}
				onChange={(event) => onChange(event.target.value as FilterStateType)}
			>
				<option value="all">All</option>
				<option value="completed">Completed</option>
				<option value="uncompleted">Uncompleted</option>
			</select>
		</div>
	)
}

export default TodoFilter
