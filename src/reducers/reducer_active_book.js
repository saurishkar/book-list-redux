export function ActivBook(state, action) {
	switch(action.type) {
		case 'BOOK_SELECTED': return action.payload;

		default: return state;
	};
}