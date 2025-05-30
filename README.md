# Google Flight URL Generator (REST API)

This project is a REST API-based Google Flights URL generator built using the logic from the original [Google Flights URL Generator](https://github.com/jjshammas/google-flights-url-generator) by [jjshammas](https://github.com/jjshammas).

## 🔄 Key Difference

Unlike the original project, which is designed as a JavaScript module, this project provides a **standalone REST API**. This approach makes it easier to use the functionality in environments that are not JavaScript-based, particularly Java applications.

## ❓ Why This Project?

While building a Java application, I needed the ability to generate Google Flights URLs. The original tool was JavaScript-based and could not be used directly in a Java environment. To address this, I created a REST API that wraps the original logic, enabling language-agnostic integration.

## 🚀 How to Run

To quickly run the API using Docker:

```bash
docker pull ghcr.io/khalifarsm/google-flight-url-generator:latest
docker run -p 3000:3000 ghcr.io/khalifarsm/google-flight-url-generator:latest
```

## 📱 API Endpoint

**POST** `http://localhost:3000/google`

### Request Headers

```
Content-Type: application/json
```

### Request Body Example

```json
{
  "flights": [
    {
      "date": "{{FROM_DATE}}",
      "source": { "type": 1, "name": "{{FROM}}" },
      "destination": { "type": 1, "name": "{{TO}}" }
    },
    {
      "date": "{{TO_DATE}}",
      "source": { "type": 1, "name": "{{TO}}" },
      "destination": { "type": 1, "name": "{{FROM}}" }
    }
  ],
  "seat": 1,
  "passengers": [1],
  "tripType": 1
}
```

### Parameters Description

* `flights`: An array of flight segments with dates and airport codes.
* `seat`: Cabin class (e.g., 1 = Economy).
* `passengers`: List of passenger counts (e.g., `[1]` for one adult).
* `tripType`: Type of trip (e.g., 1 = round trip).

## 🔗 Response

Returns a JSON object containing a valid Google Flights URL for the specified trip.

```json
{
  "url": "https://www.google.com/flights?..."
}
```

## 🔧 Built With

* Node.js / Express
* Docker

## 📄 License

This project respects the original [MIT License](https://github.com/jjshammas/google-flights-url-generator/blob/main/LICENSE) of the upstream repository.
