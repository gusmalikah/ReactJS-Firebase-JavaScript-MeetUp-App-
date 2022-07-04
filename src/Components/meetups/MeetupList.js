import MeetUpItem from "./MeetupItem"
import "./meetuplist.css"

function MeetupList(props) {
    return (
        <div className="list">
        {props.meetups.map(meetup => 
        <MeetUpItem 
        key={meetup.id}
        id={meetup.id}
        image={meetup.image}
        title={meetup.title}
        address={meetup.address}
        description={meetup.description}/>
        )}
        </div>

    )
}
export default MeetupList