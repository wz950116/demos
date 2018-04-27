export const actions = {
	ADD_TODO: 'ADD_TODO',
};

// actions
export const addTodo = (queryResponse) => {
	return {
		type: ADD_TODO,
		queryResponse
	}
};
export const toggleTodo = (queryResponse) => {
	return {
		type: TOGGLE_TODO,
		queryResponse
	}
};