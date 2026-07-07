export const initialStore = () => {
    return {
        message: null,
        people: [],    // cajón para los personajes
        planets: [],   // cajón para los planetas
        vehicles: [],  // cajón para los vehículos
        favorites: []  // la lista de favoritos que exige la tarea
    }
}

export default function storeReducer(store, action = {}) {
    switch (action.type) {
        case 'set_people':
            return {
                ...store,
                people: action.payload
            };
        case 'set_planets':
            return {
                ...store,
                planets: action.payload
            };
        case 'set_vehicles':
            return {
                ...store,
                vehicles: action.payload
            };
        case 'add_favorite':
            // si ya está en favoritos, no lo duplicamos
            if (store.favorites.some(fav => fav.uid === action.payload.uid)) return store;
            return {
                ...store,
                favorites: [...store.favorites, action.payload]
            };
        case 'remove_favorite':
            return {
                ...store,
                favorites: store.favorites.filter(fav => fav.uid !== action.payload.uid)
            };
        default:
            throw Error('Unknown action.');
    }
}