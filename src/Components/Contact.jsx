import { Link } from "react-router-dom";

const Contact = () =>{
    return(
        <div>
            <p className="Title">
                <Link id="head1" to ="/">Home</Link>
                <Link id="head1" to ="/CRUD">Students</Link>
                <Link id="head1" to ="/Contact">Contact</Link>
            </p>
            <p id="heading">Contact Us</p>
        </div>
    )
}

export default Contact;
