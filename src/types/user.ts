export interface IUser {
	id: number;
	email: string;
	username: string;
	password: string;
	phone: string;
	name: {
		firstName: string;
		lastName: string;
	};
	address: {
		city: string;
		street: string;
		number: number;
		zipcode: string;
		geolocation: {
			lat: string;
			long: string;
		};
	};
}
