const values = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  } as const;
  
  const multipliers = ["", "kilo", "mega", "giga"] as const;
  
  export function decodedResistorValue(colors: string[]) {
    const value = (10 * values[colors[0] as keyof typeof values] + 
      values[colors[1] as keyof typeof values]) / 10;
    const exponent = values[colors[2] as keyof typeof values] + 1;
    return `${value * 10 ** (exponent % 3)} ${multipliers[(exponent / 3) | 0]}ohms`;
  }