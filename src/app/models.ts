export interface User {
  userID: number;
  username: string;
  firstName: string;
  middleName: string;
  lastName: string;
  contactNumber: string;
  emailAddress: string;
  sex: string;
  city: string;
  province: string;
  confirmed: number;
}

export interface SigninForm {
  username: string;
  password: string;
}

export interface SignupForm {
  username: string;
  password: string;
  firstName: string;
  middleName: string;
  lastName: string;
  contactNumber: string;
  emailAddress: string;
  sex: string;
  city: string;
  province: string;
}

export interface Interest {
  interestID: number;
  interest: string;
}

export interface Response {
  status: number;
  message: string;
  data;
}