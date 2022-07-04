import "./newmeetupform.css"
import Card from "../ui/Card"
function NewMeetupForm() {
    function submitHandler(event) {
        event.preventDefault();
        
    }
    return(
        <Card>
        <form className="form" onSubmit={submitHandler}>
        <div className="control">
        <label htmlFor="title">Meetup Title</label>
        <input type="text" required id ="title"/>
        </div>
        <div className="control">
        <label htmlFor="image">Meetup Image(url)</label>
        <input type="url" required id ="image"/>
        </div>
        <div className="control">
        <label htmlFor="address">Address</label>
        <input type="text" required id ="address"/>
        </div>
        <div className="control">
        <label htmlFor="description">Description</label>
        <textarea required id ="description" rows="5"></textarea>
        </div>
        <div className="actions">
        <button>Add Meetup</button>
        </div>
        </form>
        </Card>
    )
}
export default NewMeetupForm