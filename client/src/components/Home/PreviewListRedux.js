const mock = [{
  "key": 1,
  "ticker" : "aapl",
  "Company-Name" : "Apple Inc.",
  "Exchange-Name" : "NMS",
  "previous_close_price" : 101.1200
}, {
  "key": 2,
  "ticker" : "axp",
  "Company-Name" : "American Express Company Common",
  "Exchange-Name" : "NYQ",
  "previous_close_price" : 59.0500
}, {
  "key": 3,
  "ticker" : "ba",
  "Company-Name" : "Boeing Company (The) Common Sto",
  "Exchange-Name" : "NYQ",
  "previous_close_price" : 122.8600
}, {
  "key": 4,
  "ticker" : "cat",
  "Company-Name" : "Caterpillar, Inc. Common Stock",
  "Exchange-Name" : "NYQ",
  "previous_close_price" : 71.8700
}, {
  "key": 5,
  "ticker" : "csco",
  "Company-Name" : "Cisco Systems, Inc.",
  "Exchange-Name" : "NMS",
  "previous_close_price" : 27.6100
}, {
  "key": 6,
  "ticker" : "cvx",
  "Company-Name" : "Chevron Corporation Common Stoc",
  "Exchange-Name" : "NYQ",
  "previous_close_price" : 92.8200
}, {
  "key": 7,
  "ticker" : "dd",
  "Company-Name" : "E.I. du Pont de Nemours and Com",
  "Exchange-Name" : "NYQ",
  "previous_close_price" : 63.4500
}, {
  "key": 8,
  "ticker" : "dis",
  "Company-Name" : "Walt Disney Company (The) Commo",
  "Exchange-Name" : "NYQ",
  "previous_close_price" : 97.6600
}, {
  "key": 9,
  "ticker" : "ko",
  "Company-Name" : "Coca-Cola Company (The) Common ",
  "Exchange-Name" : "NYQ",
  "previous_close_price" : 44.8100
}, {
  "key": 10,
  "ticker" : "mmm",
  "Company-Name" : "3M Company Common Stock",
  "Exchange-Name" : "NYQ",
  "previous_close_price" : 160.0900
}]

const initialState = {
  loading: true,
  error: false,
  dowjonesList: []
}

const LOAD_DOWJONES = 'LOAD_DOWJONES'
const LOAD_DOWJONES_SUCCESS = 'LOAD_DOWJONES_SUCCESS'
const LOAD_DOWJONES_ERROR = 'LOAD_DOWJONES_ERROR'

export function loadDowjones() {
  return {
    types: [LOAD_DOWJONES, LOAD_DOWJONES_SUCCESS, LOAD_DOWJONES_ERROR],
    url: '/api/dowjones.json'
  } 
}

function previewList(state = initialState, action) {
  switch (action.type) {
  case LOAD_DOWJONES: 
    return {
      ...state,
      loading: true,
      error: false
    }
  case LOAD_DOWJONES_SUCCESS: 
    return {
      ...state,
      loading: false,
      error: false,
      //dowjonesList: action.payload.dowjonesList
      dowjonesList: mock
    }
  case LOAD_DOWJONES_ERROR:
    return {
      ...state,
      loading: false,
      error: true
    }
  default: 
    return state
  }
}

export default previewList
