# google-flights-url-generator

A JavaScript/TypeScript utility for generating Google Flights search URLs based on search details.

## Why I built this

Google Flights is an incredible utility for researching flight bookings across airlines. In addition to having tons of data and an efficient experience, the search results are very portable. It is one of the only travel booking websites where you can copy your browser URL at any point, send it to a friend, and have them see exactly the same search state from where you left off.

Unfortunately, the syntax for generating these URLs, at first glance, is complicated and opaque. For example:

```
// JFK to LHR, Feb 18, one way
https://www.google.com/travel/flights/search?tfs=CBwQAhoeEgoyMDI2LTAyLTE4agcIARIDSkZLcgcIARIDTEhSQAFIAXABggELCP___________wGYAQI
```

While the search querystring looks complicated, it is actually a fairly simple implementation of [Protocol Buffers](https://protobuf.dev)—a mechanism designed by Google for serializing data as an alternative to JSON or other syntaxes. Protobuf produces incredibly short outputs by separating schema and data, and is what allows Google to store so much information in just the URL.

This project is a simple implementation of the Protobuf library, using a schema derived from manual manipulation of Google Flights search queries to reverse engineer certain fields.

## Example

```typescript
import {
	convertSearchData,
	LocationType,
	Seat,
	TripType,
	Passenger,
} from "google-flights-url-generator";

window.open(
	convertSearchData(
		seat: Seat.ECONOMY,
		passengers: [Passenger.ADULT, Passenger.ADULT],
		tripType: TripType.ONE_WAY,
		flights: [{
			source: {
				type: LocationType.AIRPORT,
				name: "JFK"
			},
			destination: {
				type: LocationType.AIRPORT,
				name: "LHR"
			},
			date: "2027-03-10",
			airline: ["UA", "BA"],
			maxStops: 1
		}],
	).URL
)
```

## Development

The Protobuf schema as used by Google Flights is defined in `src/googleFlightsFormat.proto`. This must be "compiled" to a JSON file to be used synchronously during runtime. This is done with the command:

```bash
npm run generate-protobuf-json
```

[`protobufjs-cli`](https://www.npmjs.com/package/protobufjs-cli) must be installed. Unfortunately, this installation is currently manual, as there are challenges running this command with `npx`: since the intended CLI usage includes piping `stdout` to a file, the `npx` warnings get written to the file instead.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
