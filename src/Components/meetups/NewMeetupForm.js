import React from "react"
import "./newmeetupform.css"
import Card from "../ui/Card"
function NewMeetupForm(props) {
    const titleInputRef = React.useRef()
    const imageInputRef = React.useRef()
    const addressInputRef = React.useRef()
    const descriptionInputRef = React.useRef()

    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value
        const enteredImage = imageInputRef.current.value
        const enteredAddress = addressInputRef.current.value
        const enteredDescription = descriptionInputRef.current.value

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }
       props.onAddmeetup(meetupData)
    }
    return(
        <Card>
        <form className="form" onSubmit={submitHandler}>
        <div className="control">
        <label htmlFor="title">Meetup Title</label>
        <input type="text" required id ="title" ref={titleInputRef}/>
        </div>
        <div className="control">
        <label htmlFor="image">Meetup Image(url)</label>
        <input type="url" required id ="image" ref={imageInputRef}/>
        </div>
        <div className="control">
        <label htmlFor="address">Address</label>
        <input type="text" required id ="address" ref={addressInputRef}/>
        </div>
        <div className="control">
        <label htmlFor="description">Description</label>
        <textarea required id ="description" rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className="actions">
        <button>Add Meetup</button>
        </div>
        </form>
        </Card>
    )
}
export default NewMeetupForm