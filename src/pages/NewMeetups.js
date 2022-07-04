import NewMeetupForm from "../Components/meetups/NewMeetupForm"
function NewMeetupPage() {
    function addMeetuphandler(meetupData) {
        fetch(
        "https://react-meetups-e28af-default-rtdb.firebaseio.com/meetups.json",
        {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
            "Content-Type": "application/json"
            }
        }
        )
    }
    return(
        <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddmeetup={addMeetuphandler}/>
        </section>
    )
}
export default NewMeetupPage