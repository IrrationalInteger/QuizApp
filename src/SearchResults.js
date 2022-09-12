import "bootstrap/dist/css/bootstrap.min.css";
import GeneralLook from "./Components/GeneralLook";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Data from "./MOCK_DATA.json";
import "./styles.css";
function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = location.state.query;

  return (
    <GeneralLook className="75 searchBox " width="50%">
      {Data.filter((post) => {
        if (query === "") {
          return post;
        } else if (post.Name.toLowerCase().includes(query.toLowerCase())) {
          return post;
        }
        return null;
      }).map((item) => (
        <div className="box" key={item.ID}>
          <p key={item.ID}>{item.Name}</p>
        </div>
      ))}
    </GeneralLook>
  );
}

export default SearchResults;
