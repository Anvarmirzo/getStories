const ADD_PIZZA_CART = 'ADD_PIZZA_CART';
const CLEAR_CART = 'CLEAR_CART';
const REMOVE_PIZZA = 'REMOVE_PIZZA';
const INCREMENT_PIZZA = 'INCREMENT_PIZZA';
const DECREMENT_PIZZA = 'DECREMENT_PIZZA';

const initialState = {
	items: {},
	totalPrice: 0,
	totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
	const [firstKey, ...keys] = path.split('.');
	return keys.reduce((val, key) => {
		return val[key];
	}, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
	return Object.values(obj).reduce((sum, obj) => {
		const value = _get(obj, path);
		return sum + value;
	}, 0);
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PIZZA_CART: {
			const currentPizzas = !state.items[action.payload.id]
				? [action.payload]
				: [...state.items[action.payload.id].items, action.payload];

			const newItems = {
				...state.items,
				[action.payload.id]: {
					items: currentPizzas,
					totalPrice: getTotalPrice(currentPizzas),
				},
			};

			const totalCount = getTotalSum(newItems, 'items.length');
			const totalPrice = getTotalSum(newItems, 'totalPrice');

			return {
				...state,
				items: newItems,
				totalCount,
				totalPrice,
			};
		}
		case INCREMENT_PIZZA: {
			const newObjItems = [
				...state.items[action.payload].items,
				state.items[action.payload].items[0],
			];
			const newItems = {
				...state.items,
				[action.payload]: {
					items: newObjItems,
					totalPrice: getTotalPrice(newObjItems),
				},
			};

			const totalCount = getTotalSum(newItems, 'items.length');
			const totalPrice = getTotalSum(newItems, 'totalPrice');

			return {
				...state,
				items: newItems,
				totalCount,
				totalPrice,
			};
		}

		case DECREMENT_PIZZA: {
			const oldItems = state.items[action.payload].items;
			const newObjItems =
				oldItems.length > 1
					? state.items[action.payload].items.slice(1)
					: oldItems;
			const newItems = {
				...state.items,
				[action.payload]: {
					items: newObjItems,
					totalPrice: getTotalPrice(newObjItems),
				},
			};

			const totalCount = getTotalSum(newItems, 'items.length');
			const totalPrice = getTotalSum(newItems, 'totalPrice');

			return {
				...state,
				items: newItems,
				totalCount,
				totalPrice,
			};
		}
		case REMOVE_PIZZA:
			const newItems = {
				...state.items,
			};
			const currentTotalPrice = newItems[action.payload].totalPrice;
			const currentTotalCount = newItems[action.payload].items.length;
			delete newItems[action.payload];
			return {
				...state,
				items: newItems,
				totalPrice: state.totalPrice - currentTotalPrice,
				totalCount: state.totalCount - currentTotalCount,
			};

		case CLEAR_CART:
			return {
				...state,
				totalCount: 0,
				totalPrice: 0,
				items: {},
			};
		default:
			return state;
	}
};
