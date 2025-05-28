import { Component } from "react";
import BookingForm from "../../components/BookingForm/BookingForm";
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Header from "../../components/Header/Header";
import "./Reservation.css";


// Function wraps a component to inject URL params
const withParams = (WrappedComponent) => {
    // Returns wrapped component with new functionality
    return function WithParams(props) {

        // Extracts URL parameters using 'useParams' hook
        const params = useParams();

        // 'useNavigate' hook provides navigation function, allowing us to redirect
        const navigate = useNavigate();

        // 'useLocation' hook provides access to the current location object, the room object passed down in state
        const location = useLocation();

        // Passes original props and adds URL params as props
        return <WrappedComponent {...props} params={params} navigate={navigate} location={location}/>;
    };
};

class Reservation extends Component {
    render() {
        const room = this.props.location?.state?.room;

        return (
            <div className="Reservation">
                <Header />
                <BookingForm room={room} />
            </div>
        );
    }
}

export default withParams(Reservation);