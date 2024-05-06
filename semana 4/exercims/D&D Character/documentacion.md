/**
 * Clase que representa un personaje de Dungeons & Dragons con atributos y puntos de golpe.
 */
export class DnDCharacter {

  /**
   * Fuerza del personaje.
   */
  strength: number
  /**
   * Destreza del personaje.
   */
  dexterity: number
  /**
   * Constitución del personaje.
   */
  constitution: number
  /**
   * Inteligencia del personaje.
   */
  intelligence: number
  /**
   * Sabiduría del personaje.
   */
  wisdom: number
  /**
   * Carisma del personaje.
   */
  charisma: number

  /**
   * Puntos de golpe del personaje.
   */
  hitpoints: number

  /**
   * Constructor de la clase DnDCharacter. Inicializa los atributos del personaje y calcula sus puntos de golpe.
   */
  constructor() {
    this.strength = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore()
    this.constitution = DnDCharacter.generateAbilityScore()
    this.intelligence = DnDCharacter.generateAbilityScore()
    this.wisdom = DnDCharacter.generateAbilityScore()
    this.charisma = DnDCharacter.generateAbilityScore()

    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }

  /**
   * Genera un puntaje de habilidad aleatorio entre 3 y 18.
   * @returns El puntaje de habilidad generado.
   */
  public static generateAbilityScore(): number {
    return Math.floor(Math.random() * 15) + 3;
  }

  /**
   * Calcula el modificador de habilidad para un valor de habilidad dado.
   * @param abilityValue El valor de habilidad para el que se desea calcular el modificador.
   * @returns El modificador de habilidad calculado.
   */
  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue-10)/2)
  }
}

[video minuto 1.2 ](https://youtu.be/0rV98CMguJc)