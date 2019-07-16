
interface IState {
    count: number ;
}
interface IAction {
    type: string ;
}

const iniState: IState = {
    count: 0,
};

export function reducers(state: IState = iniState , action: IAction) {
    let newState: IState ;
    switch (action.type) {
        case 'INC' : newState = {count: state.count + 1}; break;
        case 'DEC' : newState = {count: state.count - 1}; break;
        default    : newState =  state;
      }
    return newState;
}