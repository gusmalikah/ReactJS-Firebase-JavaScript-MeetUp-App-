import MeetupList from "../Components/meetups/MeetupList"
const Data = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
          'https://www.swedishnomad.com/wp-content/images/2020/03/Duomo-di-Milano.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
          'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
      },
      {
        id: 'm2',
        title: 'This is a second meetup',
        image:
          'https://www.swedishnomad.com/wp-content/images/2020/03/Duomo-di-Milano.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
          'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
      },
]

function AllMeetupsPage() {
    return(
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={Data}/>
        </section>
    )
}
export default AllMeetupsPage