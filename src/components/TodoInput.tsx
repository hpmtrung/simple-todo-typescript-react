import React, { useState } from "react";

interface Props {
	placeholder: string;
	onSubmit: (text: string) => void;
}

function TodoInput({ placeholder, onSubmit }: Props) {
	const [text, setText] = useState("");

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				onSubmit(text);
				setText("");
			}}>
			<input
				type='text'
				placeholder={placeholder}
				value={text}
				onChange={(event) => setText(event.target.value)}
			/>
		</form>
	);
}

export default TodoInput;
