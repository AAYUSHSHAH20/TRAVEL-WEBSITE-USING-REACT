import { Link } from "react-router-dom";
import "./TripStyles.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
import Details from "../routes/Details";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img alt="image" src={props.image}/>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <Link to='/detail'>
        <button>Details</button>
      </Link>
    </div>
  );
}

export default TripData;
