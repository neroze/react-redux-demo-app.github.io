function countries(state = [], action) {
  switch (action.type) {
    case "POST_REQUEST":
      console.log("sending request ....")
      return state;
      break;
    case "POST_RECEIVED":
      console.log('data received');
      return state.concat(action.data );
      break;
    case "POST_ERROR":
      console.log("There was error while fetching user post");
      return state;
      break;
    case "REMOVE_COUNTERY":
     console.log("Country removed")
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ];
      break;
    case "ADD_NEW_COUNTRTY" :
      return [...state, {
        name:action.data.name
      }];
      break;
    case "REQUEST_REMOVE_COUNTERY":
      console.log("request send to remove country ....")
      return state;
      break;
    default:
      return state;
  }
}

export default countries;