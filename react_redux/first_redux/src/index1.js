//https://github.com/udacity/reactnd-redux-todos-goals/commit/67e60069e303d30bf1a73ed081ec184d3adf033c
//getting-the-state
function createStore () {
  // The store should have four parts
  // 1. The state
  // 2. Get the state.
  // 3. Listen to changes on the state.
  // 4. Update the state

  let state

  const getState = () => state

  return {
    getState
  }
}