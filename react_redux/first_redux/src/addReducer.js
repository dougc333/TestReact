
function addReducer(state,action){
  states=[]
  state.forEach(x=>{

    if (action.type==='DELETE_FLAVOR'){
      if (x['flavor'] !== action.flavor)
        states.push(x)  
    }
  })
  return states;

}


const iceCreams = [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }];
const action = { type: 'DELETE_FLAVOR', flavor: 'Vanilla' };

console.log('result:', addReducer(iceCreams, action));
