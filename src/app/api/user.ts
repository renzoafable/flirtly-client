export const getUserInterests = `http://localhost:3001/api/user/interest`;
export const addInterests = `http://localhost:3001/api/user/interest/add`;
export const getUsers = `http://localhost:3001/api/user`;
export const requestConnection = (connectionID) => 
  `http://localhost:3001/api/user/connection/send/${connectionID}`