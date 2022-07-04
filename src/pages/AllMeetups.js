import React from "react"
import MeetupList from "../Components/meetups/MeetupList"

function AllMeetupsPage() {
  const [isloading, setIsLoading] = React.useState(true)
  const [loadedMeetups, SetLoadedMeetups] = React.useState([])
  
  React.useEffect(() => {
    setIsLoading(true)
    fetch("https://react-meetups-e28af-default-rtdb.firebaseio.com/meetups.json"
  ).then(response => {
    return response.json()
  }).then(data => {
    const meetups = []
    for(const key in data) {
      const meetup = {
        id:key,
        ...data[key]
      }

      meetups.push(meetup)
    }
    setIsLoading(false)
    SetLoadedMeetups(meetups)
  })
  },[])

  if(isloading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }
    return(
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    )
}
export default AllMeetupsPage