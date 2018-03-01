export class Hamburger{
    constructor(
      private _name: string, 
      private price: number){ }
  
    get name() {
      return this._name;
    }
  }