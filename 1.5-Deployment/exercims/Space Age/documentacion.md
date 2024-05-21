/**
 * Representa los factores de conversión de los años en otros planetas en relación con la Tierra.
 */
const planets: {[key: string]: number} = {
    'mercury':  0.2408467, 
    'venus':  0.61519726, 
    'earth':  1.0,
    'mars':  1.8808158, 
    'jupiter':  11.862615, 
    'saturn':  29.447498,
    'uranus':  84.016846, 
    'neptune':  164.79132 
}

/**
 * Calcula la edad de una persona en años terrestres dados los segundos vividos y el planeta.
 * @param planet El nombre del planeta en el sistema solar.
 * @param seconds La cantidad de segundos vividos.
 * @returns La edad de la persona en años del planeta especificado.
 */
export function age(planet: string, seconds: number): number{
	let age: number;
	let earthYearInSeconds = 31557600;
	age = seconds/(earthYearInSeconds * planets[planet]);
	return Number(age.toFixed(2));
}

[link video ](https://youtu.be/0rV98CMguJc)