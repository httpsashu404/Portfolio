import React from "react";
import "./Contact.css";
import emailjs from 'emailjs-com';
import LightSpeed from "react-reveal/LightSpeed";
import { SiIndeed } from "react-icons/si";
import { toast } from 'react-toastify';
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { Zoom } from "react-reveal";

const Contact = () => {
  // disable button
  function buttonDisable() {
    var button = document.getElementById('myButton')
    var count = 0
    var interval = setInterval(() => {
      count++
      if (count === 1) {
        button.disabled = true
        clearInterval(interval)
      }
    }, .1);
    setTimeout(function () {
      button.disabled = false
    }, 5000)
  }
  // send mail
  function sendEmail(e) {
    e.preventDefault();
    try {
      const result = emailjs.sendForm('Service_key', 'Tamplate_key', e.target, 'Public_key')
      if (result) {
        toast.success('Comment sent successfully', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error('Comment sent failed', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

      }
    } catch (error) {
      toast.warning('Comment sent problem', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">

                  {/* google map */}
                  <LightSpeed>
                    <a target="_blanck" href="https://maps.app.goo.gl/xCkZiJjutCddeKcf8">
                      <img src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1" alt="ocontact" className="image rounded shadow" />
                    </a>
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Zoom>
                {/* social media link start */}
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6 className="text-center">
                        <a target="_blanck" href="https://www.linkedin.com/in/ashutosh-kumar-0b03472ba/"><BsLinkedin color="blue" size={20} className="ms-3" /></a>
                        <a target="_blanck" href="https://github.com/httpsashu404"><BsGithub color="black" size={20} className="ms-3" /></a>
                        <a target="_blanck" href="https://www.instagram.com/httpsashu404/"><BsInstagram color="black" size={20} className="ms-3" /></a>
                        <a target="_blanck" href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage&_ga=2.170532585.893985890.1710697104-1928171510.1710697104"><SiIndeed color="blue" size={20} className="ms-3" /></a>
                      </h6>
                    </div>
                  </div>
                  {/* social media link end */}

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>

                  {/* comment form start */}
                  <div className="row px-3 mb-4">
                    <form onSubmit={sendEmail}>
                      <div className="mb-3">
                        <input type="text" name="name" className="form-control" id=" " placeholder="Your name" required />
                      </div>
                      <div className="mb-3">
                        <input type="email" name="email" className="form-control" id=" " placeholder="Your email" required />
                      </div>
                      <div className="mb-3">
                        <textarea name="message" className="form-control" id=" " placeholder=" Your comments" required ></textarea>
                      </div>
                      <button type="submit" id="myButton" onClick={buttonDisable} className="btn btn-primary">Comment</button>
                    </form>
                  </div>
                  {/* comment form end */}

                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;





