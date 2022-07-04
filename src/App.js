 import {Route, Switch} from "react-router-dom"

 import AllMeetupsPage from "./pages/AllMeetups";
 import NewMeetupPage from "./pages/NewMeetups";
 import Favorities from "./pages/Favorites";
 import Layout from "./Components/layout/Layout"
 function App() {
   return (
   <div>
    <Layout>
     <Switch>
      <Route path="/" exact={true}>
       <AllMeetupsPage/>
     </Route>
     <Route path="/new-meetup">
       <NewMeetupPage/>
     </Route>
     <Route path="/favorites">
       <Favorities/>
     </Route> 
     </Switch>
     </Layout>
   </div>
   );
 }

 export default App;
