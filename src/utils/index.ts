import { Dog, BreedFilter } from "../types";

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};

export async function fetchDogs(filters: BreedFilter) {
  const { img, name, age, zip_code, breed } = { filters };

  const response = await fetch(`https://frontend-take-home-service.fetch.com/dogs?name=${name}&age=${age}&zip_code=${zip_code}&breed=${breed}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(filters),
  });

  const result = await response.json();

  return result;
}

export async function fetchBreeds(breeds) {

  const response = await fetch(`https://frontend-take-home-service.fetch.com/dogs/breeds`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(breeds),
  });

  const result = await response.json();

  return result;
}
