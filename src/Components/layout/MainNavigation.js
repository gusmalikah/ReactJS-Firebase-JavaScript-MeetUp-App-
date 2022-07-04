import { useContext } from "react";
import { Link } from "react-router-dom"
import "./mainNavigation.css"
import FavoritesContext from "../../store/favorites-context"
function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext)

    return(
        <header className="header">
            <div className="logo">React Meetups</div>
            <nav>
                <ul>
                <li>
                <Link to="/">All Meetups</Link>
                </li>
                <li>
                <Link to="/new-meetup">Add New Meetup</Link>
                </li>
                <li>
                <Link to="/favorites">My Favorites
                <span className="badge">{favoritesCtx.totalFavorites}</span>
                </Link>
                </li>
                </ul>
            </nav>
        </header>
    );
}
export default MainNavigation