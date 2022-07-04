import MainNavigation from "./MainNavigation";
import "./layout.css";
function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className="main">{props.children}</main>
    </div>
  );
}
export default Layout
