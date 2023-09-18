import { createReducer,on } from "@ngrx/store";
import { addDataAction, removeDataAction, updateDataAction } from "./data.actions";
import { initData } from "./data.state";

const _dataReducer = createReducer(initData,on(addDataAction,(state, {newData})=>{
    return{
        ...state,
        componentName: newData
    };
}),
on(updateDataAction, (state, {updatedData}) => {
    return{
        ...state,
        componentName: updatedData
    }
}),
on(removeDataAction, (state, {dataToRemove}) => {
    return{
        ...state,
        componentName: dataToRemove 
    }
})

)

export function dataReducer(state:any, action:any){
    return _dataReducer(state,action);
}