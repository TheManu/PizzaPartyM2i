export class Hero {

  constructor(
    public id?: number,
    public name?: string,
    public email?: string,
    public pass?: string
  ) {  
    this.id = id || this.getRandomInt(999999999);
  }

  private getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}