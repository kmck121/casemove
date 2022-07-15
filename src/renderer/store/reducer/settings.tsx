import { Settings } from "renderer/interfaces/states";

const initialState: Settings = {
  fastMove: false,
  currency: 'USD',
  locale: 'EN-GB',
  os: '',
  devmode: false,
  columns: ["Price", "Stickers/patches", "Storage", "Tradehold", 'Moveable', 'Inventory link'],
  currencyPrice: {},
  source: {
    title: 'Steam Community Market'
  }
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SETTINGS_SET_FASTMOVE':
      return {
        ...state,
        fastMove: action.payload,
      };
    case 'SETTINGS_SET_COLUMNS':
      return {
        ...state,
        columns: action.payload,
      };
    case 'SETTINGS_SET_CURRENCY':
      if (action.payload == true) {
        return {
          ...state
        }
      }
      return {
        ...state,
        currency: action.payload,
      };
    case 'SETTINGS_SET_SOURCE':
      return {
        ...state,
        source: action.payload,
      };
      case 'SETTINGS_SET_LOCALE':
      return {
        ...state,
        locale: action.payload,
      };
      case 'SETTINGS_SET_OS':
      return {
        ...state,
        os: action.payload,
      };
      case 'SETTINGS_SET_DEVMODE':
      return {
        ...state,
        devmode: action.payload,
      };
      case 'SETTINGS_ADD_CURRENCYPRICE':
        let currencyDict = state.currencyPrice
        currencyDict[action.payload.currency] = action.payload.rate
      return {
        ...state,
        currency: action.payload.currency,
        currencyPrice: currencyDict,
      };

    default:
      return { ...state };
  }
};

export default settingsReducer;
