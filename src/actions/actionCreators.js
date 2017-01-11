import axios from 'axios';

function requestData() {
  return {type: "POST_REQUEST"}
};

function receiveData(json) {
  return{
    type: "POST_RECEIVED",
    data: json
  }
};

function receiveError(json) {
  return {
    type: "POST_ERROR",
    data: json
  }
};

export function fetchData(url) {
  return function(dispatch) {
    dispatch(requestData());
    return axios({
      url: 'https://restcountries.eu/rest/v1/all',
      method: 'get',
      responseType: 'json'
    })
      .then(function(response) {
        dispatch(receiveData(response.data));
      })
      .catch(function(response){
        dispatch(receiveError(response.data));
        //dispatch(pushState(null,'/error'));
      })
  }
};
export function requestRemoveCountry(){
  return {
    type: "REQUEST_REMOVE_COUNTERY"
  }
}

export function addNewCountry(newCountry){
  console.log("Adding New country");
  console.log(newCountry)
  return {
    type:"ADD_NEW_COUNTRTY",
    data:newCountry
  }
}

export function removeThisCountry(index, country){
  return {
    type: "REMOVE_COUNTERY",
    i:index,
    data: {
      id:index,
      country:country
    }
  }
}
