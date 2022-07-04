import "./meetupitem.css"
import Card from "../ui/Card"
import {useContext} from "react"
import FavoritesContext from "../../store/favorites-context"

function MeetUpItem(props) {
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
    function toggleFavoritesStatusHandler() {
        if(itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id)
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            })
        }
    }
    return(
        <div className="item">
        <Card>
        <div className="image">
        <img src={props.image} alt={props.title}/>
        </div>
        <div className="content">
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
        </div>
        <div className="actions">
        <button onClick={toggleFavoritesStatusHandler}>
        {itemIsFavorite ? "Remove from favorites" : "To Favorites"}
        </button>
        </div>
        </Card>
        </div>
    )
}
export default MeetUpItem