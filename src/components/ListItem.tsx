import React from "react";

interface Props {
	title: string;
	completed: boolean;
	onClick: () => void;
}

function ListItem({ title, completed, onClick }: Props) {
	return (
		<li
			onClick={onClick}
			style={{ textDecoration: completed ? "line-through" : "none" }}>
			<span>{title}</span>
		</li>
	);
}

export default ListItem;
