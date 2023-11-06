import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>People's Favourite Places</p>
    <div className="tripcard"><TripData image="https://th.bing.com/th/id/OIP.JKyEcfWB3CscRh3gnO7d4gHaE8?w=300&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" heading="Kerela,India" text="text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network or "/>
    <TripData image="https://th.bing.com/th/id/OIP.dPeHw7p6hQYXruXMRmgKBgHaFH?w=288&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" heading="Agra,India" text="text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network or "/>
    <TripData image="https://th.bing.com/th/id/OIP.wMNacXqFSRKJz98kYgZEGwHaFj?w=211&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" heading="Manali,India" text="text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network or "/> </div>
    </div>
  );
}

export default Trip;
