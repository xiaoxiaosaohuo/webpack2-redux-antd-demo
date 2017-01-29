import { combineReducers } from 'redux';

// --------------------------------
// actions
// --------------------------------
const CLAIM_MERCHANT = "CLAIM_MERCHANT";//认领按钮

const FILTER_BYSEARCH = "FILTER_BYSEARCH";//搜索

const FILTER_BYALL = "FILTER_BYALL";//全部主体

const FILTER_BYSALE = 'FILTER_BYSALE';//销售人员



export const claim = (id,data) =>({
    type:CLAIM_MERCHANT,
    id,
    data
})


// --------------------------------
// actions creators
// --------------------------------

export const filterBySearch = (data) =>({
    type:FILTER_BYSEARCH,
    data
})
export const filterByAll = (data) =>({
    type:FILTER_BYALL,
    data
})
export const filterBySale = (data) =>({
    type:FILTER_BYSALE,
    data

})





// --------------------------------
// reducer
// --------------------------------
const initialState_claim ={
    id:"",
    data:null
}
const initialState_filter={
    searchText:"",
    filter1:"",
    filter2:"",
    filter3:""
}
export const claimReducer = (state=initialState_claim,action) =>{
    switch(action.type){
        case CLAIM_MERCHANT:
            return {...state,id:action.id,data:action.data}
        default:
        return state
    }

}
export const filterData = (state=initialState_filter,{type,data}) =>{
    switch (type) {
        case FILTER_BYSEARCH:
            return {...state,searchText:data}
        case FILTER_BYALL:
            return {...state,filter1:data}
        case FILTER_BYSALE:
            return {...state,filter2:data}
        default:
        return state

    }

}

const merchantTagsReducer = combineReducers({
  claimInfo: claimReducer,
  filterData:filterData,
});

export default merchantTagsReducer
