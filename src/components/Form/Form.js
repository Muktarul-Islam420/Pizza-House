import React from "react";

export default function Form() {
  return (
    <form name="contact-form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact-form"/>
      <p>
        <label htmlFor="name">Name</label> <br />
        <input type="text" placeholder="Your name" id="name" name="name" required />
      </p>
      <p>
        <label htmlFor="email">Email</label> <br />
        <input type="email" placeholder="jos@gmail.com" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="message">Message</label> <br />
        <textarea id="message" placeholder="Enter your message" name="message" required></textarea>
      </p>
      <p>
        <button type="submit" >Submit</button>
      </p>
    </form>
  );
}