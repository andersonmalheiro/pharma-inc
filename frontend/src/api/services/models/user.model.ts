export interface User {
  gender: string;
  name: Name;
  full_name: string;
  location: Location;
  email: string;
  login: Login;
  dob: DateOfBirth;
  birth_date: string;
  registered: DateOfBirth;
  phone: string;
  cell: string;
  id: Identification;
  picture: Picture;
  nat: string;
}

interface DateOfBirth {
  date: string;
  age: number;
}

interface Identification {
  name: string;
  value: string;
}

interface Location {
  street: string;
  city: string;
  state: string;
  postcode: string;
  coordinates: Coordinates;
  timezone: Timezone;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Timezone {
  offset: string;
  description: string;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
