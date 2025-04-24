import protobuf from "protobufjs";
import type { SearchDetails } from "./SearchDetails";

const HOST = "https://www.google.com";
const ENDPOINT_PREFIX = "/travel/flights/search?tfs=";
const btoa = require('btoa');

function addStaticValues(searchDetails: SearchDetails): Object {
	const newObject: any = { ...searchDetails };
	newObject.UNKNOWN_1 = 28;
	newObject.UNKNOWN_2 = 2;
	newObject.UNKNOWN_14 = 1;
	newObject.UNKNOWN_16 = { UNKNOWN_1: -1 };
	return newObject;
}

function convertBase64ToUrl(base64: string): string {
	const url = base64
		.replace(/=/g, "")
		.replace(/\+/g, "-")
		.replace(/\//g, "_");
	return url;
}

export function convertSearchData(searchDetails: SearchDetails): {
	URL: string;
	URLPath: string;
	protobufData: string;
} {
	const protobufRoot = protobuf.Root.fromJSON(
		require("./googleFlightsFormat.json")
	);
	const SearchDetailsProto = protobufRoot.lookupType("SearchDetails");
	const error = SearchDetailsProto.verify(searchDetails);
	if (error) {
		throw new Error(`Invalid SearchDetails: ${error}`);
	}
	const encoded = SearchDetailsProto.encode(
		addStaticValues(searchDetails)
	).finish();
	const encodedAsBase64 = btoa(
		String.fromCharCode(...new Uint8Array(encoded))
	);
	const urlQuery = convertBase64ToUrl(encodedAsBase64);

	return {
		URL: `${HOST}${ENDPOINT_PREFIX}${urlQuery}`,
		URLPath: `${ENDPOINT_PREFIX}${urlQuery}`,
		protobufData: encodedAsBase64,
	};
}

export {
	LocationType,
	Location,
	Flight,
	Seat,
	TripType,
	Passenger,
} from "./SearchDetails";
