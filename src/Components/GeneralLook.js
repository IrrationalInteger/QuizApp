import Footer from "./Footer";
import Header from "./Header";

function GeneralLook(props) {
  return (
    <div>
      <Header></Header>
      <div
        className={
          "card w-" + props.style + " text-center  justify-content-center"
        }
        style={{ margin: "auto", width: props.width, height: props.height }}
      >
        {props.children}
      </div>
      <Footer></Footer>
    </div>
  );
}
export default GeneralLook;
