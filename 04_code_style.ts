// Необходимо оптимизировать код

let checked = false;
let selected = false;
let opened;

if (checked) {
  selected = true;
}

if (opened == null || opened == undefined) {
  opened = false;
}

interface User {
  name: string;
  age: number;
  location: IUserLocation;
  skills: UserSkillInterface[];
}

interface IUserLocation {
  region: number;
  lat: number;
  lon: number;
}

interface UserSkillInterface {
  id: number;
  title: string;
}

class User implements User {
  name: string;
  age: number;
  location = {};
  public skills: UserSkillInterface[] = [];

  constructor() { }

  public sayName(): void {
    console.log(this.name);
  }

  getLocation(): IUserLocation {
    return this.location;
  }

  public setAge(age: number) {
    this.age = age;
  }
}
