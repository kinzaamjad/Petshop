import React from 'react'

const Contact = () => {
  return (
    <div>

<section className="section gray-bg mt-5" id="contactus">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="section-title text-primary">
          <h2>Get In Touch</h2>
        </div>
      </div>
    </div>
    <div className="row flex-row-reverse">
      <div className="col-md-7 col-lg-8 m-15px-tb">
        <div className="contact-form">
          <form action="https://getform.io/f/d415c94b-2ef3-4c0f-995b-70f89d581091" method="post" className="contactform contact_form" id="contact_form">
            <div className="returnmessage valid-feedback p-15px-b" data-success="Your message has been received, We will contact you soon." />
            <div className="empty_notice invalid-feedback p-15px-b"><span>Please Fill Required Fields</span></div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input id="name" type="text" name='name' placeholder="Full Name" className="form-control" /> 
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input id="email" type="text" name='email' placeholder="Email Address" className="form-control" />  
                </div>
                <br/>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input id="subject" name='subject' type="text" placeholder="Subject" className="form-control" /> 
                </div>
                <br/>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea id="message" placeholder="Message" name='message' className="form-control" rows={3}  /> 
                </div>
              </div>
              <div className="col-md-12">
                <div className="send">
                  <button id="send_message" name='contact us' className="px-btn theme" ><span>Contact Us</span> <i className="arrow" /></button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-5 col-lg-4 m-15px-tb">
        <div className="contact-name">
          <h5>Mail</h5>
          <p>kinza.amjad098@gmail.com</p>
        </div>
        <div className="contact-name">
          <h5>Visit us</h5>
          <p>Gulberg <br />Lahore</p>
        </div>
        <div className="contact-name">
          <h5>Phone</h5>
          <p>000000000000</p>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Contact ;