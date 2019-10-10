import * as types from './actionTypes'

const initialState = {
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: ["gggg", "lllll"]
  },
  store: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
}

export const appReducer = (state = initialState, action) => {
  let newFeatures;
  switch (action.type) {
    case types.ADD_ITEM:
      newFeatures = state.car.features
        .filter(id => id !== action.payload)
        .concat(action.payload);
      return {
        ...state,
        car: {
          ...state.car,
          features: newFeatures
        },
      }

    case types.REMOVE_ITEM:
      newFeatures = state.car.features.filter(id => id !== action.payload);
      return {
        ...state,
        car: {
          features: newFeatures
        },
      }

    default:
      return state;
  }
}























// export const additionalPrice = 0;

// export const car = {
//   price: 26395,
//   name: '2019 Ford Mustang',
//   image:
//     'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
//   features: ["gggg", "lllll"]
// };

// export const store = [
//   { id: 1, name: 'V-6 engine', price: 1500 },
//   { id: 2, name: 'Racing detail package', price: 1500 },
//   { id: 3, name: 'Premium sound system', price: 500 },
//   { id: 4, name: 'Rear spoiler', price: 250 }
// ];

// export const initialState = {
//   additionalPrice: additionalPrice,
//   car: car,
//   store: store
// }

// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case type.ADD_ITEM:
//       return {
//         ...state,
//         additionalPrice: state.additionalPrice + action.payload.price,
//         car: {
//           ...state.car,
//           features: state.car.features.concat({
//             id: action.payload.id,
//             name: action.payload.name,
//             price: action.payload.price,
//           })
//         }
//       }
//     case type.REMOVE_ITEM:
//       const addedFeature = state.car.features.filter((itm) => {
//         return itm.id !== action.payload;
//       })
//       return {
//         ...state,
//         car: {
//           features: addedFeature
//         }
//         additionalPrice: addedFeature.reduce((total, itm) => total + isTemplateElement.price, 0)
//       }
//   }

//     default:
// break;
//   }
// }