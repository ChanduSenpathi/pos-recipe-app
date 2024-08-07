import {
    configureStore,
    createSlice,
} from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    total: 0,
    cardItems: [{
            id: 1,
            title: 'CHICKEN WINGS',
            src: './images/cardimages/image-1.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 2,
            sub: 'N',
            cost: 10,
            quantity: 1
        },
        {
            id: 2,
            title: 'FRENCH FRIES',
            src: './images/cardimages/image-2.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 1,
            sub: 'N',
            cost: 20,
            quantity: 1
        },
        {
            id: 3,
            title: 'SUMMER SALAD',
            src: './images/cardimages/image-3.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 2,
            sub: 'G',
            cost: 30,
            quantity: 1
        },
        {
            id: 4,
            title: 'EGG PULAV',
            src: './images/cardimages/image-4.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 0,
            sub: 'G',
            cost: 10,
            quantity: 1
        },
        {
            id: 5,
            title: 'BAMBOO CHICKEN',
            src: './images/cardimages/image-5.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 1,
            sub: 'N',
            cost: 10,
            quantity: 1
        },
        {
            id: 6,
            title: 'BIRYANI',
            src: './images/cardimages/image-6.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 2,
            sub: 'N',
            cost: 10,
            quantity: 1
        },
        {
            id: 7,
            title: 'CHICKEN BIRYANI',
            src: './images/cardimages/image-2.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 0,
            sub: 'N',
            cost: 20,
            quantity: 1
        },
        {
            id: 8,
            title: 'MUTTON CURRY',
            src: './images/cardimages/image-4.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 1,
            sub: 'G',
            cost: 10,
            quantity: 1
        },
        {
            id: 9,
            title: 'CHICKEN CURRY',
            src: './images/cardimages/image-5.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 2,
            sub: 'N',
            cost: 10,
            quantity: 1
        },
        {
            id: 10,
            title: 'CHICKEN WINGS',
            src: './images/cardimages/image-1.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 1,
            sub: 'G',
            cost: 10,
            quantity: 1
        },
        {
            id: 11,
            title: 'BUTTER CHICKEN',
            src: './images/cardimages/image-3.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 2,
            sub: 'N',
            cost: 30,
            quantity: 1
        },
        {
            id: 12,
            title: 'TANDOORI CHICKEN',
            src: './images/cardimages/image-6.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 0,
            sub: 'G',
            cost: 10,
            quantity: 1
        }
    ],
    searchItem: [{
        id: 1,
        title: 'CHICKEN WINGS',
        src: './images/cardimages/image-1.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 2,
        sub: 'N',
        cost: 10,
        quantity: 1
    },
    {
        id: 2,
        title: 'FRENCH FRIES',
        src: './images/cardimages/image-2.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 1,
        sub: 'N',
        cost: 20,
        quantity: 1
    },
    {
        id: 3,
        title: 'SUMMER SALAD',
        src: './images/cardimages/image-3.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 2,
        sub: 'G',
        cost: 30,
        quantity: 1
    },
    {
        id: 4,
        title: 'EGG PULAV',
        src: './images/cardimages/image-4.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'G',
        cost: 10,
        quantity: 1
    },
    {
        id: 5,
        title: 'BAMBOO CHICKEN',
        src: './images/cardimages/image-5.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 1,
        sub: 'N',
        cost: 10,
        quantity: 1
    },
    {
        id: 6,
        title: 'BIRYANI',
        src: './images/cardimages/image-6.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 2,
        sub: 'N',
        cost: 10,
        quantity: 1
    },
    {
        id: 7,
        title: 'CHICKEN BIRYANI',
        src: './images/cardimages/image-2.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'N',
        cost: 20,
        quantity: 1
    },
    {
        id: 8,
        title: 'MUTTON CURRY',
        src: './images/cardimages/image-4.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 1,
        sub: 'G',
        cost: 10,
        quantity: 1
    },
    {
        id: 9,
        title: 'CHICKEN CURRY',
        src: './images/cardimages/image-5.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 2,
        sub: 'N',
        cost: 10,
        quantity: 1
    },
    {
        id: 10,
        title: 'CHICKEN WINGS',
        src: './images/cardimages/image-1.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 1,
        sub: 'G',
        cost: 10,
        quantity: 1
    },
    {
        id: 11,
        title: 'BUTTER CHICKEN',
        src: './images/cardimages/image-3.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 2,
        sub: 'N',
        cost: 30,
        quantity: 1
    },
    {
        id: 12,
        title: 'TANDOORI CHICKEN',
        src: './images/cardimages/image-6.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'G',
        cost: 10,
        quantity: 1
    }
    ],
    totalDiscount: 0,
    serviceCharges: 0
};



const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingCartItem = state.cart.find(item=>item.id===action.payload);
            state.total = 0;
            state.totalDiscount = 0;
            if(existingCartItem) {
                existingCartItem.quantity +=1;
                existingCartItem.amount = existingCartItem.cost * existingCartItem.quantity; 
            }else {
                const addItem = state.cardItems.find(item=>item.id === action.payload)
                if(addItem){
                    addItem.amount = addItem.cost;
                    state.cart.push(addItem)
                }
            }
            if(state.cart.length >0){
                state.cart.forEach(amount => {
                    state.total += amount.amount
                });
                state.totalDiscount = state.total * 1.1;
                state.serviceCharges = state.totalDiscount-state.total;
            }
        },
        deleteItem: (state, action) => {
            const existingCartItem = state.cart.filter(item=> {
                if(item.id !== action.payload){
                    return item;
                }else {
                    item.quantity = 1;
                    state.total -= item.amount;
                    state.totalDiscount = state.total * 1.1;
                    state.serviceCharges = state.totalDiscount-state.total;
                    item.amount = 0;
                }
            });
            state.cart =existingCartItem;            
        },
        searchItems: (state, action) => {
            state.searchItem = state.cardItems.filter(items => items.title.toLowerCase().includes(action.payload.toLowerCase()));
        }
    },
});



const store = configureStore({
    reducer: {
        cards: cardSlice.reducer
    }
})

export default store;
export const {
    addItem, deleteItem, searchItems
} = cardSlice.actions