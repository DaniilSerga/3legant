import {IProduct} from 'types/product';

export interface InitialState {
	products: IProduct[];
	detailedProduct: IProduct | null;
	totalCount: number;
}

export interface IGetProductsProps {
	limit?: number;
	sort: 'desc' | 'asc';
}

export interface IUpdateProductProps {
	id: number;
	product: Omit<IProduct, 'id'>;
}
