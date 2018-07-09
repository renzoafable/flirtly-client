export const getUserInterests = `http://localhost:3001/api/user/interest`;
export const addInterests = `http://localhost:3001/api/user/interest/add`;
export const getUsers = `http://localhost:3001/api/user`;
export const getSentConnections = `http://localhost:3001/api/user/connection/sent`;
export const getReceivedConnections = `http://localhost:3001/api/user/connection/received`;
export const getUserConnections = `http://localhost:3001/api/user/connection`;
export const sendChat = connectionID => 
  `http://localhost:3001/api/user/message/send/${connectionID}`;
export const getChats = connectionID => 
  `http://localhost:3001/api/user/message/chat/${connectionID}`;
export const requestConnection = connectionID => 
  `http://localhost:3001/api/user/connection/send/${connectionID}`;
export const deleteSentConnections = connectionID => 
  `http://localhost:3001/api/user/connection/sent/delete/${connectionID}`;
export const approveConnection = userID => 
  `http://localhost:3001/api/user/connection/approve/${userID};`
export const deleteReceivedConnection = userID => 
  `http://localhost:3001/api/user/connection/received/delete/${userID}`;
export const deleteInterest = interestID => 
  `http://localhost:3001/api/user/interest/delete/${interestID}`;