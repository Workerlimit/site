const options = Array.from(new Array(100), (_, index) => ({
    label: `Item ${index}`,
    value: index
  }));
  
  const INITIAL_STATE = {
    options
  };
  
  function searchApp(state = INITIAL_STATE, action) {
    switch (action.type) {
      default:
        return state;
    }
  }
  
  export default searchApp;