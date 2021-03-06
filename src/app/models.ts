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

export interface SignupFormResponse {
  status: number;
  message: string;
  user: Object;
}

export interface Interest {
  interestID: number;
  interest: string;
}

export interface InterestResponse {
  status: number;
  message: string;
  data: Interest[];
}

export interface UserResponse {
  status: number;
  message: string;
  users: any[];
}