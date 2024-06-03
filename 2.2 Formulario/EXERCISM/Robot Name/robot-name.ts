export class Robot {
    public nameRobot: string;
    public allNames: string[] = []
    
    constructor() {
      this.nameRobot = Robot.releaseNames()
      this.allNames.push(this.nameRobot)
    }
  
    public get name(): string {
      return this.nameRobot
    }
  
    public resetName(): void {
      this.nameRobot = Robot.releaseNames()
      while(this.allNames.indexOf(this.nameRobot) !== -1){
        this.nameRobot = Robot.releaseNames()
      }
      this.allNames.push(this.nameRobot)
    }
  
    public static releaseNames(): string {
      const alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
      let name: string = ''
  
      for(let i=0; i<2; i++){
        name += alphabet[getRandomNum(0,26)]
      }
      for(let i=0; i<3; i++){
        name += getRandomNum(0,10).toString()
      }
      
      return name
  
      function getRandomNum(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
      }
    }
  }