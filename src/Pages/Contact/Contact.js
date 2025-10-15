import React from "react";
import "./Contact.css";
import emailjs from 'emailjs-com';
import LightSpeed from "react-reveal/LightSpeed";
import { SiIndeed, SiYoutube } from "react-icons/si";
import { toast } from 'react-toastify';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaAtlassian, FaHandPointDown, FaInstagram } from "react-icons/fa";
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
      const result = emailjs.sendForm('service_key', 'template_key', e.target, 'public_key')
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

  // Youtube
  function Youtube() {
    toast.success('Comming soon...', {
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
                    <div className="text-center">
                      <h4><b>Find Me Here</b> <FaHandPointDown /></h4>
                    </div>
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
                <div className="card2 d-flex card border-0 px-4 py-2">
                  <div className="row">
                    <div className="row">
                      <h6 className="text-center">
                        <a target="_blanck" href="https://www.linkedin.com/in/ashutosh-kumar-0b03472ba/"><BsLinkedin color="blue" size={20} className="ms-3" /></a>
                        <a target="_blanck" href="https://github.com/httpsashu404"><BsGithub color="black" size={20} className="ms-3" /></a>
                        <a target="_blanck" href="https://apna.co/profile"><FaAtlassian color="purple" size={20} className="ms-3" /></a>
                        <a target="_blanck" href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage&_ga=2.170532585.893985890.1710697104-1928171510.1710697104"><SiIndeed color="blue" size={20} className="ms-3" /></a>
                        <button className="btn" href=" " onClick={Youtube}><FaInstagram color="orange" size={20} /></button>
                        <button className="btn" href=" " onClick={Youtube}><SiYoutube color="red" size={20} /></button>
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
                      <div className="mb-3 text-bold">
                        <input type="text" name="name" className="form-control shadow" id=" " placeholder="Your Name*" required />
                      </div>
                      <div className="mb-3">
                        <input type="tel" name="tel" className="form-control shadow" id=" " maxLength={10} placeholder="Your Phone" />
                      </div>
                      <div className="mb-3">
                        <input type="email" name="email" className="form-control shadow" id=" " placeholder="Your E-mail*" required />
                      </div>
                      <div className="mb-3">
                        <textarea name="message" className="form-control shadow" id=" " placeholder=" Your Message*" required ></textarea>
                      </div>
                      <button type="submit" id="myButton" onClick={buttonDisable} className="btn btn-primary"><b>Send</b></button>
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





