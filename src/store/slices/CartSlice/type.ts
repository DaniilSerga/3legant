import {ICart} from 'types/cart';

export interface InitialState {
	carts: ICart[];
	currentCart: ICart | null;
}

export interface IGetCartsParams {
	limit?: number;
	sort: 'desc' | 'asc';
	startDate?: string;
	endDate?: string;
	userId?: number;
}

export interface IUpdateCartProductParams {
	id: number;
	cart: Omit<ICart, 'id'>;
}
