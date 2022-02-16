import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";

function Contact() {
  // const [formdata, setFormdata] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const [error, setError] = useState(false);
  // const [message, setMessage] = useState("");

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   if (!formdata.name) {
  //     setError(true);
  //     setMessage("Name is required");
  //   } else if (!formdata.email) {
  //     setError(true);
  //     setMessage("Email is required");
  //   } else if (!formdata.subject) {
  //     setError(true);
  //     setMessage("Subject is required");
  //   } else if (!formdata.message) {
  //     setError(true);
  //     setMessage("Message is required");
  //   } else {
  //     setError(false);
  //     setMessage("You message has been sent!!!");
  //   }
  // };

  // const handleChange = (event) => {
  //   setFormdata({
  //     ...formdata,
  //     [event.currentTarget.name]: event.currentTarget.value,
  //   });
  // };

  // const handleAlerts = () => {
  //   if (error && message) {
  //     return <div className="alert alert-danger mt-4">{message}</div>;
  //   } else if (!error && message) {
  //     return <div className="alert alert-success mt-4">{message}</div>;
  //   } else {
  //     return null;
  //   }
  // };

  return (
    <section id="contact">
      <div className="container">
        <Pagetitle title="Get in Touch" />
        <div className='endpic'>
    <img src='images/maddow.png' alt='maddow'/>
    </div>
        <div className="row">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
              </ScrollAnimation>
      
          <div className='container'>
          <ul id="mypdf" className="social-icons light list-inline mb-0 mt-4">
          <li className="list-inline-item"> 
            <a href="mailto:pages.kelsey@gmail.com" target='_blank' rel='noreferrer' className='text'>
                <img src ="/images/mail.png" alt='mycv'/>
              </a>
            </li>
            <li className="list-inline-item">
            <a href="https://github.com/paigekelsey" target='_blank' rel='noreferrer'className='text'>
                <img src='images/git.png' alt='github'/>
              </a>
            </li>
            <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/kelseyspaige/" target='_blank' rel='noreferrer'className='text'>
                 <img src='images/link.png' alt='github'/>
              </a>
            </li>
            </ul>
                  </div>
          </div>
        </div>
    
    </section>
  );
}

export default Contact;
