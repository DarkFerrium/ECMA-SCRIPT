
// main.js
import { getData } from "./api.js";
export function solution() {

  const solucion = getData()
    .then((response) => response)
    .catch();
  return solucion;
}

//Archivo api.js
export async function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{
                movie: "El despertar de los michis",
                year: 2021,
                protagonist: "Mr. Michi"
            }, {
                movie: "101 Michis",
                year: 2019,
                protagonist: "Tommy Michiguire"
            }]);
        }, 1000);
    });
}
export default getData;