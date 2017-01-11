import axios from 'axios';

export function setUserData() {
  return {type: "SET_USER"}
};

export function getUser(json) {
  return{
    type: "GET_USER"
  }
};