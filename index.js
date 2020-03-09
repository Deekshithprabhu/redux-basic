const redux=require('redux')
const createStore=redux.createStore
const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'
function buycakes(){
    return{
    type:BUY_CAKE
    }}
function buyicecream(){
    return{
        type:BUY_ICECREAM
    }
}    

const initial={
    numOfCake:10,
    numOficecream:20

}

const reducer =(state=initial,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCake:state.numOfCake-1}
        
             
        case BUY_ICECREAM:return{
            ...state,
            numOficecream:state.numOficecream -1
          
        }
        default : return state 


        
    }
} 
const store=createStore(reducer)
console.log('initial state ',store.getState())
const unsubscribe = store.subscribe(()=>console.log('updated state',store.getState()))
store.dispatch(buycakes())
store.dispatch(buyicecream())
store.dispatch(buycakes())
unsubscribe()
