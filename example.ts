import { convertSearchData } from "./src/index";
import { Seat, TripType, Passenger, LocationType } from "./src/SearchDetails";

const result = convertSearchData({
	flights: [
		{
			date: "2025-05-22",
			source: { type: LocationType.AIRPORT, name: "EWR" },
			destination: { type: LocationType.AIRPORT, name: "LAX" },
		},
		{
			date: "2025-06-22",
			source: { type: LocationType.AIRPORT, name: "LAX" },
			destination: { type: LocationType.AIRPORT, name: "EWR" },
		},
	],
	seat: Seat.ECONOMY,
	passengers: [Passenger.ADULT],
	tripType: TripType.ROUND_TRIP,
});

console.log("URL:", result.URL);
console.log("URLPath:", result.URLPath);
console.log("protobufData:", result.protobufData);
