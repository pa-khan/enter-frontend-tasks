// Необходимо написать метод, который копирует LocationModel

interface ILocation {
  region: number;
  lat: number;
  lon: number;
}

class LocationModel implements ILocation {
  public region: number;
  public lat: number;
  public lon: number;

  constructor(data: ILocation) {
    const { region, lat, lon } = data;

    this.region = region;
    this.lat = lat;
    this.lon = lon;
  }
}

const location = new LocationModel({
  region: 99,
  lat: 55.33,
  lon: 33.55,
});

let locationDuplicate1;
let locationDuplicate2;
