import { Dog, Location, Coordinates } from "../types/index";
export async function fetchDogs(filters: Dog) {
  const { img, name, age, zip_code, breed } = filters;

  // Set the required headers for the API request
    const response = await fetch(`https://frontend-take-home-service.fetch.com/dogs`, {
      method: "POST",
      headers: headers,
      body: {
        name: string,
        email: string,
      },
    });

  // Parse the response as JSON
  const result = await response.json();

  return result;
}
