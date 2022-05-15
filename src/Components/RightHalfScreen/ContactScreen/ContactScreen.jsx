import React, { useState } from 'react'
import {FiMail, FiPhoneCall} from "react-icons/fi"

function ContactScreen() {

  const [error, setError] = useState();
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [values, setValues] = useState(initialState);

  const submitForm = async (e) => {
    e.preventDefault();
    setError();
    if (!values.name || !values.email || !values.subject || !values.message)
      setError("All fields are necessary");

    // Example POST method implementation:

    // Default options are marked with *
    const response = await fetch("https://arpitdas.herokuapp.com/contact", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(values), // body data type must match "Content-Type" header
    });
    try {
      const data = await response.json(); // parses JSON response into native JavaScript objects
      console.log(data);
      setValues(initialState);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='xl:w-3/4 w-5/6 sm:w-5/6 w-11/12 flex mx-auto my-8'>
     <div className='font-mono w-1/4 text-md 3lg/2:block hidden text-gray-500 my-auto'><div className='text-3xl text-lightslate font-semibold my-6 underline'>Let's Talk</div>Do you have some big ideas to work or opportunity? Then please reach out, I would love to hear more about you, your project and how we can work!</div>
       
      <div className='w-[28rem] mx-auto py-6 xs:px-8 px-2 dark-gradient-bgRL shadow-2xl rounded-2xl transition duration-200 ease-out transition-all animate-slide-in'>
        <div className='text-white font-semibold tracking-widest text-center border-b-2 border-slate-500 md:text-3xl text-2xl'>Write to me</div>
        <form
              id="contact-form"
            >
          <input type="text" placeholder='Name' name="name" className='block w-full sm:my-6 my-4 font-mono p-2 rounded outline-none' value={values.name}
            onChange={(e) =>
                      setValues((prev) => {
                        return { ...prev, name: e.target.value };
                      })
                    }/>
          <input type="mail" placeholder='Mail-id' name="email" className='block w-full font-mono sm:my-6 my-4 p-2 rounded outline-none' value={values.email}
                    onChange={(e) =>
                      setValues((prev) => {
                        return { ...prev, email: e.target.value };
                      })
                    }/>
          <input type="text" placeholder='Subject' name="subject" className='block w-full font-mono sm:my-6 my-4 p-2 rounded outline-none' value={values.subject}
                onChange={(e) =>
                  setValues((prev) => {
                    return { ...prev, subject: e.target.value };
                  })
                }/>
          <textarea type="text" placeholder='Message' name="msg" className='block w-full font-mono resize-y sm:my-6 my-4 p-2 h-32 rounded outline-none' value={values.message}
                onChange={(e) =>
                  setValues((prev) => {
                    return { ...prev, message: e.target.value };
                  })
                }/>
         <div className='text-center'> <button type="submit" className='m-auto bg-gray-700 mb-3 p-2 shdow-xl cursor-pointer font-mono hover:bg-darkslate text-white text-base rounded shadow-2xl '  onClick={(e) => submitForm(e)}>Send</button> </div>
        </form>
        <div className='text-white font-semibold tracking-widest border-t-2 border-slate-500 '>
          <div  className='text-center text-slate-400 hover:text-white cursor-pointer'><a  href="mailto:arpitdas.dev@gmail.com"> <FiMail className='inline'/> : arpitdas.dev@gmail.com</a></div>
          <div className='text-slate-400 text-center hover:text-white cursor-pointer'> <FiPhoneCall className='inline'/> : +91-7701961032</div>
        </div>
     </div>
  </div>
  )
}

export default ContactScreen
