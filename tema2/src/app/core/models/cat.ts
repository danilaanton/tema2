export interface Cat {
  image: string;
  name: string;
  breed: string;
  sex: string;
  months: number;
  furPattern: string;
  furColor: string[];
  eyes: string[];
  healthStatus: string[];
  additionalComment: string;
}

export enum Eye {
  Green = 'Green',
  Hazel = 'Hazel',
  Yellow = 'Yellow',
  Orange = 'Orange',
  Copper = 'Copper',
  Blue = 'Blue',
  Turquoise = 'Turquoise',
  Mismatched = 'Mismatched',
  Albino = 'Albino',
  Other = 'Other',
}

export enum FurPattern {
  Tortoiseshell = 'Tortoiseshell',
  Calico = 'Calico',
  SolidColor = 'Solid Color',
  Bicolor = 'Bicolor',
  Tabby = 'Tabby',
  Caliby = 'Caliby',
  ColorPoint = 'Color Point',
  Other = 'Other',
}

export enum FurColor {
  White = 'White',
  Gray = 'Gray',
  Red = 'Red',
  Blue = 'Blue',
  Black = 'Black',
  Cream = 'Cream',
  Cinnamon = 'Cinnamon',
  Brown = 'Brown',
  Lilac = 'Lilac',
  Other = 'Other',
}

export enum Sex {
  Female = 'Female',
  Male = 'Male',
  Undefined = 'Undefined',
}

export enum Health {
  Sterilised = 'Sterilised',
  Vaccinated = 'Vaccinated',
  SpecialNeeds = 'Special Needs',
}
