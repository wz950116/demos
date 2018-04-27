import { actions } from './actions'

const initialState = {
	chartStatus: 'loading'
};

export const reducers = (state, action) => {
	if (typeof state === 'undefined') {
		return initialState
	}

	const actionHandlers = {
		[actions.ADD_TODO] () {
			return Object.assign({},
				state, {
					chartStatus: 'success',
					queryResponse: action.queryResponse,
				},
			);
		},
	}

	if (action.type in actionHandlers) {
		return actionHandlers[action.type]();
	}

	return state
}