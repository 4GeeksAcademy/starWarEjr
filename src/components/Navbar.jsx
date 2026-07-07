import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <nav className="navbar navbar-light bg-light mb-3 p-3">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">Star Wars Blog</span>
                </Link>
                <div className="ml-auto">
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Favorites ({store.favorites?.length || 0})
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            {store.favorites && store.favorites.length > 0 ? (
                                store.favorites.map((fav, index) => (
                                    <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                        {fav.name}
                                        <button 
                                            className="btn btn-sm btn-outline-danger ms-2"
                                            onClick={() => dispatch({ type: 'delete_favorite', payload: index })}
                                        >
                                            🗑️
                                        </button>
                                    </li>
                                ))
                            ) : (
                                <li className="dropdown-item text-muted">No favorites yet</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};