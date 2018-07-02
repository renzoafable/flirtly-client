export interface SessionResponse {
  status: number,
  message: string,
  session: Object
}

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
  province: string
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

export interface SignupFormResponse {
  userID: string;
  username: string;
  firstName: string;
  middleName: string;
  lastName: string;
  contactNumber: string;
  emailAddress: string;
  sex: string;
  city: string;
  province: string;
}