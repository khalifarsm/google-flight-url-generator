export enum LocationType {
	UNKNOWN = 0,
	AIRPORT = 1,
	CITY = 2,
}

export type Location = {
	type: LocationType;
	name: string;
};

export type Flight = {
	date: string;
	maxStops?: number;
	airline?: string[];
	departureTimeStart?: number;
	departureTimeEnd?: number;
	arrivalTimeStart?: number;
	arrivalTimeEnd?: number;
	source: Location;
	destination: Location;
	connectingAirport?: string;
};

export enum Seat {
	UNKNOWN = 0,
	ECONOMY = 1,
	PREMIUM_ECONOMY = 2,
	BUSINESS = 3,
	FIRST = 4,
}

export enum TripType {
	UNKNOWN = 0,
	ROUND_TRIP = 1,
	ONE_WAY = 2,
	MULTI_CITY = 3,
}

export enum Passenger {
	UNKNOWN = 0,
	ADULT = 1,
	CHILD = 2,
	INFANT_IN_SEAT = 3,
	INFANT_ON_LAP = 4,
}

export type SearchDetails = {
	flights: Flight[];
	seat: Seat;
	passengers: Passenger[];
	tripType: TripType;
};
