import React from "react";
import "./Contact.css";
import emailjs from 'emailjs-com';
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { SiIndeed } from "react-icons/si";
import { BsGithub, BsLinkedin, BsGlobe } from "react-icons/bs";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_gkzq216', 'template_kxxmdk4', e.target, 'hzJ1vckYghaSEDVmP')
      .then((result) => {
        //  alert(result.text);
        alert("Comment send successfull.");
      }, (error) => {
        //  alert(error.text);
        alert("Comment send unsuccessfull");
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
                  <LightSpeed>
                    <a target="_blanck" href="https://maps.app.goo.gl/xCkZiJjutCddeKcf8">
                      <img src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1" alt="ocontact" className="image rounded shadow" />
                    </a>
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6 className="text-center">
                        <a target="_blanck" href="https://www.linkedin.com/in/ashutosh-kumar-0b03472ba/"><BsLinkedin color="blue" size={20} className="ms-3" /></a>
                        <a target="_blanck" href="https://github.com/httpsashu404"><BsGithub color="black" size={20} className="ms-2" /></a>
                        <a target="_blanck" href="https://orxnpgxfkuxth4njhzo0cq.on.drv.tw/www.ashuhost.com/myweb.html"><BsGlobe color="black" size={20} className="ms-3" /></a>
                        <a target="_blanck" href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage&_ga=2.170532585.893985890.1710697104-1928171510.1710697104"><SiIndeed color="blue" size={20} className="ms-3" /></a>
                      </h6>
                    </div>
                  </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3 mb-4">
                    <form onSubmit={sendEmail}>
                      <div class="mb-3">
                        <input type="text" name="name" class="form-control" id=" " placeholder="Your name" />
                      </div>
                      <div class="mb-3">
                        <input type="email" name="email" class="form-control" id=" " placeholder="Your email" />
                      </div>
                      <div class="mb-3">
                        <textarea name="message" class="form-control" id=" " placeholder=" Your comments"></textarea>
                      </div>
                      <button type="submit" class="btn btn-primary">Comment</button>
                    </form>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
      <script src="">
      </script>
    </>
  );
};

export default Contact;
