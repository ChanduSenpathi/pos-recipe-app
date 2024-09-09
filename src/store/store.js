import {
    configureStore,
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    total: 0,
    cardItems: [
        {
        id: 1,
        title: 'CHICKEN WINGS',
        src: './images/cardimages/image-1.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 2,
        sub: 'N',
        cost: 10,
        quantity: 1,
        type: 'starter'
    },
    {
        id: 2,
        title: 'FRENCH FRIES',
        src: './images/cardimages/image-2.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 1,
        sub: 'N',
        cost: 20,
        quantity: 1,
        type: 'starter'
    },
    {
        id: 3,
        title: 'SUMMER SALAD',
        src: './images/cardimages/image-3.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 2,
        sub: 'G',
        cost: 30,
        quantity: 1,
        type: 'starter'
    },
    {
        id: 4,
        title: 'EGG PUFF',
        src: './images/cardimages/image-4.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'G',
        cost: 10,
        quantity: 1,
        type: 'starter'
    },
    {
        id: 5,
        title: 'BAMBOO CHICKEN',
        src: './images/cardimages/image-5.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 1,
        sub: 'N',
        cost: 10,
        quantity: 1,
        type: 'starter'
    },
    {
        id: 6,
        title: 'PIZZA',
        src: './images/cardimages/image-6.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 2,
        sub: 'N',
        cost: 10,
        quantity: 1,
        type: 'starter'
    },
    {
        id: 7,
        title: 'PASTA',
        src: './images/cardimages/image-2.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'N',
        cost: 20,
        quantity: 1,
        type: 'starter'
    },
    {
        id: 8,
        title: 'CHILLI WINGS',
        src: './images/cardimages/image-4.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 1,
        sub: 'G',
        cost: 10,
        quantity: 1,
        type: 'starter'
    },
    {
        id: 9,
        title: 'BURGER',
        src: './images/cardimages/image-5.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 2,
        sub: 'N',
        cost: 10,
        quantity: 1,
        type: 'starter'
    },
    {
        id: 10,
        title: 'SWEET POTATOES',
        src: './images/cardimages/image-1.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 1,
        sub: 'G',
        cost: 10,
        quantity: 1,
        type: 'starter'
    },
    {
        id: 11,
        title: 'CHEESY SPICY',
        src: './images/cardimages/image-3.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 2,
        sub: 'N',
        cost: 30,
        quantity: 1,
        type: 'starter'
    },
    {
        id: 12,
        title: 'EGG WITH BACON',
        src: './images/cardimages/image-6.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'G',
        cost: 10,
        quantity: 1,
        type: 'starter'
    },
    {
        id: 13,
        title: 'VEG-PULAV-BIRYANI',
        src: 'https://img.freepik.com/premium-photo/biryani-food_884653-32091.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725408000&semt=ais_hybrid',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 2,
        sub: 'N',
        cost: 60,
        quantity: 1,
        type: "course"
    },
    {
        id: 14,
        title: 'VEG-BIRYANI',
        src: 'https://img.freepik.com/premium-photo/veg-biryani-veg-pulav-served-bowl-background_136354-23016.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725408000&semt=ais_hybrid',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 1,
        sub: 'N',
        cost: 90,
        quantity: 1,
        type: "course"
    },
    {
        id: 15,
        title: 'CHICKEN-BIRYANI',
        src: 'https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4=',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 2,
        sub: 'G',
        cost: 100,
        quantity: 1,
        type: "course"
    },
    {
        id: 16,
        title: 'CHICKEN-J-BIRYANI',
        src: 'https://media.istockphoto.com/id/1333127665/photo/chicken-biryani-spicy-indian-malabar-biryani-hyderabadi-biryani-dum-biriyani-pulao-golden.jpg?s=612x612&w=0&k=20&c=63UXYPOISm8nJ8SNK79dDm0w1gY6jXzYQP0heL6fnOg=',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 3,
        sub: 'G',
        cost: 90,
        quantity: 1,
        type: "course"
    },
    {
        id: 17,
        title: 'CHICKEN-BUTTER-BIRYANI',
        src: 'https://img.freepik.com/premium-photo/top-view-delicious-spicy-chicken-biryani-traditional-bowl-white-background-indian-food_667286-7331.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 2,
        sub: 'G',
        cost: 120,
        quantity: 1,
        type: "course"
    },
    {
        id: 18,
        title: 'CHICKEN-ROYAL-BIRYANI',
        src: 'https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4=',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 1,
        sub: 'A',
        cost: 150,
        quantity: 1,
        type: "course"
    },
    {
        id: 19,
        title: 'MUTTON-BIRYANI',
        src: 'https://img.freepik.com/premium-photo/top-view-spicy-mutton-biryani-with-fresh-herbs_960396-872359.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725580800&semt=ais_hybrid',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 3,
        sub: 'Y',
        cost: 130,
        quantity: 1,
        type: "course"
    },
    {
        id: 20,
        title: 'MUTTON-TANDOORI',
        src: 'https://img.freepik.com/premium-photo/indian-meat-dish-spicy-mutton-biryani-photographed-food-generative-ai_1219132-33187.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725580800&semt=ais_hybrid',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 3,
        sub: 'R',
        cost: 200,
        quantity: 1,
        type: "course"
    },
    {
        id: 21,
        title: 'MUTTON-JOINT-BIRYANI',
        src: 'https://img.freepik.com/premium-photo/mutton-biryani-with-garnish-fresh-dill-parsle_1177965-44205.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 3,
        sub: 'G',
        cost: 90,
        quantity: 1,
        type: "course"
    },
    {
        id: 22,
        title: 'MUTTON-DUM-BIRYANI',
        src: 'https://img.freepik.com/premium-photo/mutton-biryani-with-bowl-rice-bowl-food-table_1013720-270.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 3,
        sub: 'N',
        cost: 100,
        quantity: 1,
        type: "course"
    },
    {
        id: 23,
        title: 'MUTTON-JOINT-BIRYANI',
        src: 'https://png.pngtree.com/thumb_back/fw800/background/20240328/pngtree-mutton-biryani-meal-in-a-plate-on-table-image_15645442.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 2,
        sub: 'G',
        cost: 40,
        quantity: 1,
        type: "course"
    },
    {
        id: 24,
        title: 'FRIED-RICE',
        src: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/garimasgautam-gmail.com/Nepalese_Veg_Pulao.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 1,
        sub: 'C',
        cost: 50,
        quantity: 1,
        type: "course"
    },
    {
        id: 25,
        title: 'SPIRIT-750ML',
        src: 'https://5.imimg.com/data5/SELLER/Default/2023/1/LC/LM/CD/29998190/spirit-cold-drink.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 95,
        quantity: 1,
        type: "drinks"
    },
    {
        id: 26,
        title: 'SPIRIT-2L',
        src: 'https://www.bigbasket.com/media/uploads/p/m/251040-9_2-sprite-soft-drink-lime-flavoured.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 75,
        quantity: 1,
        type: "drinks"
    },
    {
        id: 27,
        title: 'COCA-COLA-2L',
        src: 'https://www.pngitem.com/pimgs/m/599-5998729_coca-cola-2-25-liter-bottle-hd-png-download.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 65,
        quantity: 1,
        type: "drinks"
    },
    {
        id: 28,
        title: 'COCA-COLA-TIN',
        src: 'https://pngimg.com/uploads/cocacola/cocacola_PNG22.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 120,
        quantity: 1,
        type: "drinks"
    },
    {
        id: 29,
        title: 'PEPSI-TIN',
        src: 'https://i.pinimg.com/736x/c5/f9/2e/c5f92e07f73b9a369a642243569f1a39.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 80,
        quantity: 1,
        type: "drinks"
    },
    {
        id: 30,
        title: 'PEPSI-2L',
        src: 'https://e7.pngegg.com/pngimages/937/787/png-clipart-pepsi-pepsi-thumbnail.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 65,
        quantity: 1,
        type: "drinks"
    },
    {
        id: 31,
        title: 'MAAZA-1L',
        src: 'https://m.media-amazon.com/images/I/61+jGc7vLIL.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 50,
        quantity: 1,
        type: "drinks"
    },
    {
        id: 32,
        title: 'MAAZA-2L',
        src: 'https://m.media-amazon.com/images/I/61GTxEvFnOL.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 100,
        quantity: 1,
        type: "drinks"
    },
    {
        id: 33,
        title: 'MOCKTAIL-500ML',
        src: 'https://png.pngtree.com/png-vector/20240530/ourmid/pngtree-a-colorful-cocktail-with-splash-of-water-and-fruit-png-image_12576392.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 70,
        quantity: 1,
        type: "drinks"
    },
    {
        id: 34,
        title: 'MOCKTAIL-COMBO-300L',
        src: 'https://png.pngtree.com/png-clipart/20210418/original/pngtree-two-glasses-of-cocktail-drinks-png-image_6240890.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 40,
        quantity: 1,
        type: "drinks"
    },
    {
        id: 35,
        title: '7UP-2L',
        src: 'https://toppng.com/uploads/preview/7up-photo-11538592906yx4xvnoq8h.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 65,
        quantity: 1,
        type: "drinks"
    },
    {
        id: 36,
        title: '7UP-TIN',
        src: 'https://w7.pngwing.com/pngs/505/944/png-transparent-7-up-aluminum-can-fizzy-drinks-coca-cola-diet-coke-biryani-7-up-7-grocery-store-7-up-soft-drink-thumbnail.png',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 70,
        quantity: 1,
        type: "drinks"
    },
    {
        id: 37,
        title: 'CHOCOLATE',
        src: 'https://img.freepik.com/free-photo/delicious-fresh-chocolate-dessert-restaurant_23-2148001611.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 35,
        quantity: 1,
        type: "deserts"
    },
    {
        id: 38,
        title: 'VANILLA',
        src: 'https://img.freepik.com/free-photo/side-view-souffle-cake-with-chocolate-berry-jelly-whipped-cream-strawberry-chocolate-chips-plate_141793-3681.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 95,
        quantity: 1,
        type: "deserts"
    },
    {
        id: 39,
        title: 'STRAWBERRY',
        src: 'https://img.freepik.com/premium-photo/imagine-farmtotable-restaurant-specializing-desserts-made-with-seasonal-fruits_1247965-40143.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 100,
        quantity: 1,
        type: "deserts"
    },
    {
        id: 40,
        title: 'CHOCOLATE-STRAWBERRY',
        src: 'https://img.freepik.com/premium-photo/imagine-farmtotable-restaurant-specializing-desserts-made-with-seasonal-fruits_1247965-40143.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'G',
        cost: 50,
        quantity: 1,
        type: "deserts"
    },
    {
        id: 41,
        title: 'CHOCOLATE-ROYALTY',
        src: 'https://www.shutterstock.com/image-photo/bonet-typical-chocolate-sweet-piedmont-600nw-2449634269.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 55,
        quantity: 1,
        type: "deserts"
    },
    {
        id: 42,
        title: 'CHOCO-STARWBERY',
        src: 'https://assets-prd-weg.unataops.com/web/recipe_header/10d82e3e96064f95b5a9cba10c9e492d.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 20,
        quantity: 1,
        type: "deserts"
    },
    {
        id: 43,
        title: 'CHOCO-CAKE',
        src: 'https://confessionsofabakingqueen.com/wp-content/uploads/2020/05/half-eaten-flourless-chocolate-cake-on-a-white-plate-with-a-fork-and-raspberries-1-of-1.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 45,
        quantity: 1,
        type: "deserts"
    },
    {
        id: 44,
        title: 'VEGGI-CHOCOLATE',
        src: 'https://img.freepik.com/premium-photo/imagine-farmtotable-restaurant-specializing-desserts-made-with-seasonal-fruits_1247965-40149.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 80,
        quantity: 1,
        type: "deserts"
    },
    {
        id: 45,
        title: 'SPECIAL-MIXED-VANILLA',
        src: 'https://img.freepik.com/premium-photo/imagine-farmtotable-restaurant-specializing-desserts-made-with-seasonal-fruits_1247965-40143.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 80,
        quantity: 1,
        type: "deserts"
    },
    {
        id: 46,
        title: 'ROYAL-VANILLA',
        src: 'https://www.shutterstock.com/image-photo/sweet-dessert-on-black-background-260nw-427677541.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 15,
        quantity: 1,
        type: "deserts"
    },
    {
        id: 47,
        title: 'PRIMIUM-CHOCOLATE',
        src: 'https://www.shutterstock.com/image-photo/sweet-dessert-on-black-background-260nw-427677541.jpg',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 25,
        quantity: 1,
        type: "deserts"
    },
    {
        id: 48,
        title: 'VANILLA-CAKE',
        src: 'https://suncorefoods.com/cdn/shop/articles/SUNCORE_FOODS_LUSCIOUS_VEGAN_CHOCOLATE_RED_BEET_JELLO_MOUSSE_800X800_1f8338ab-8b13-42e6-9925-431e721aecb0_large.jpg?v=1612970488',
        chilliSrc: './images/cardimages/chilli.png',
        nos: 0,
        sub: 'D',
        cost: 60,
        quantity: 1,
        type: "deserts"
    },
    ],
    searchItem: [
        {
            id: 1,
            title: 'CHICKEN WINGS',
            src: './images/cardimages/image-1.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 2,
            sub: 'N',
            cost: 10,
            quantity: 1,
            type: 'starter'
        },
        {
            id: 2,
            title: 'FRENCH FRIES',
            src: './images/cardimages/image-2.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 1,
            sub: 'N',
            cost: 20,
            quantity: 1,
            type: 'starter'
        },
        {
            id: 3,
            title: 'SUMMER SALAD',
            src: './images/cardimages/image-3.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 2,
            sub: 'G',
            cost: 30,
            quantity: 1,
            type: 'starter'
        },
        {
            id: 4,
            title: 'EGG PUFF',
            src: './images/cardimages/image-4.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 0,
            sub: 'G',
            cost: 10,
            quantity: 1,
            type: 'starter'
        },
        {
            id: 5,
            title: 'BAMBOO CHICKEN',
            src: './images/cardimages/image-5.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 1,
            sub: 'N',
            cost: 10,
            quantity: 1,
            type: 'starter'
        },
        {
            id: 6,
            title: 'PIZZA',
            src: './images/cardimages/image-6.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 2,
            sub: 'N',
            cost: 10,
            quantity: 1,
            type: 'starter'
        },
        {
            id: 7,
            title: 'PASTA',
            src: './images/cardimages/image-2.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 0,
            sub: 'N',
            cost: 20,
            quantity: 1,
            type: 'starter'
        },
        {
            id: 8,
            title: 'CHILLI WINGS',
            src: './images/cardimages/image-4.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 1,
            sub: 'G',
            cost: 10,
            quantity: 1,
            type: 'starter'
        },
        {
            id: 9,
            title: 'BURGER',
            src: './images/cardimages/image-5.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 2,
            sub: 'N',
            cost: 10,
            quantity: 1,
            type: 'starter'
        },
        {
            id: 10,
            title: 'SWEET POTATOES',
            src: './images/cardimages/image-1.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 1,
            sub: 'G',
            cost: 10,
            quantity: 1,
            type: 'starter'
        },
        {
            id: 11,
            title: 'CHEESY SPICY',
            src: './images/cardimages/image-3.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 2,
            sub: 'N',
            cost: 30,
            quantity: 1,
            type: 'starter'
        },
        {
            id: 12,
            title: 'EGG WITH BACON',
            src: './images/cardimages/image-6.png',
            chilliSrc: './images/cardimages/chilli.png',
            nos: 0,
            sub: 'G',
            cost: 10,
            quantity: 1,
            type: 'starter'
        },
    ],
    recipeType: 'starter',
    totalDiscount: 0,
    serviceCharges: 0,
    isLoggedIn : false,
    isLoggedOut : false,
    homeTables :{
        firstFloor : [
            {
                id: 1,
                src:'./images/homeimages/table.png',
                isBooked: false,
                name: 'T1'
            },
            {
                id: 2,
                src:'./images/homeimages/table.png',
                isBooked: false,
                name: 'T2'
            },
            {
                id: 3,
                src:'./images/homeimages/table.png',
                isBooked: false,
                name: 'T3'
            },
            {
                id: 4,
                src:'./images/homeimages/table.png',
                isBooked: false,
                name: 'T4'
            },
            {
                id: 5,
                src:'./images/homeimages/table.png',
                isBooked: false,
                name: 'T5'
            },
            {
                id: 6,
                src:'./images/homeimages/table.png',
                isBooked: false,
                name: 'T6'
            },
        ],
        secondFloor : [
            {
                id: 1,
                src:'./images/homeimages/table.png',
                isBooked: false,
                name: 'T7'
            },
            {
                id: 2,
                src:'./images/homeimages/table.png',
                isBooked: false,
                name: 'T8'
            },
            {
                id: 3,
                src:'./images/homeimages/table.png',
                isBooked: false,
                name: 'T9'
            },
            {
                id: 4,
                src:'./images/homeimages/table.png',
                isBooked: false,
                name: 'T10'
            },
            {
                id: 5,
                src:'./images/homeimages/table.png',
                isBooked: false,
                name: 'T11'
            },
            {
                id: 6,
                src:'./images/homeimages/table.png',
                isBooked: false,
                name: 'T12'
            }
        ],
    },
    TableCount : 0,
    tipsCharges: 0,
    isMenuTrue: true,
    accessToken: '',
    
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
            state.tipsCharges = 0;       
        },
        searchItems: (state, action) => {
            state.searchItem = state.cardItems.filter(items => {
                if(items.type === state.recipeType){
                    return items.title.toLowerCase().includes(action.payload.toLowerCase())
                }
            });

        },
        setRecipeType: (state, action) => {
            const {item, type} = action.payload;
            state.recipeType = type;
            state.searchItem = item;
        },
        LoginHandler:(state, action) => {
            state.isLoggedIn = !action.payload;
        },
        LogoutHandler : (state, action) => {
            state.isLoggedOut = !action.payload;
        },
        selectTable:(state, action) => {
            const {id, isTrue, tableCount} = action.payload;
            if(isTrue){
                state.homeTables.firstFloor.map(table =>{
                    if(table.id === id){
                        table.isBooked = !table.isBooked;               
                      }
                    return table;
                  })
            }else {
                state.homeTables.secondFloor.map(table =>{
                    if(table.id === id){
                      table.isBooked = !table.isBooked; 
                    }
                    return table;
                  })
            }          
            const count = state.homeTables.firstFloor.filter(table=>table.isBooked === true).length + state.homeTables.secondFloor.filter(table=>table.isBooked === true).length;
            state.TableCount = count;
        },
        addTips: (state, action) => {
            state.totalDiscount -= state.tipsCharges;
            state.totalDiscount += action.payload; 
            state.tipsCharges = action.payload;
        },
        appliedVoucher: (state, action) => {
            state.totalDiscount -= action.payload;
        },
        setAccessToken : (state, action) => {
            state.accessToken = action.payload;
        },
        resetState: () => initialState
    },
});


const store = configureStore({
    reducer: {
        cards: cardSlice.reducer
    }
})

export default store;
export const {
    addItem, deleteItem, searchItems, LoginHandler, LogoutHandler, selectTable, resetState, addTips, appliedVoucher, setAccessToken, setRecipeType
} = cardSlice.actions