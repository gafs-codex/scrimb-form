import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import './form.css'


// Form basics in react
function App() {

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log("submitted");
  //   const formEl = event.currentTarget
  //   const formData = new FormData(formEl)
  //   {/* using the name attributes from the input */ }
  //   const email = formData.get("email");
  //   const password = formData.get("password")
  //   console.log(email)
  //   console.log(password);
  //   formEl.reset();
  // }



  console.log("hey");

  // react-19 makes things easier

  // so the sign up function doesn't receive an event
  // it automatically receives the formdata
  function signUp(formData) {
    // behind the scenes the action will prevent default
    // and also resets theform automatically for us and other things
    const email = formData.get("email")
    const password = formData.get("password")
    const jobStatus = formData.get("employmentStatus");
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    console.log(email);
    console.log(password);
    console.log(jobStatus);
    console.log(dietaryRestrictions);
    
  }
  return (
    <section>
      <h1>Sign up form</h1>
      <form action={signUp} /*onSubmit={handleSubmit}*/ >
        <label htmlFor="email">Email:</label>
        {/*name attribute will be used to access data that is inputted into the input by user*/}
        <input id="email" type="email" name="email" defaultValue="joe@schmoe.com" placeholder="Joe@schmoe.com" />
        <br />
        <br />

        <label htmlFor="password">Password:</label>
        <input type="password" defaultValue="password123" id="password" name='password' />

        <label htmlFor="description">Description:</label>
        <textarea name="description" id="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status</legend>

          <label htmlFor="">
            <input type="radio" name='employmentStatus' value="Unemployed" defaultChecked={true} />
            Unemployed
          </label>

          <label htmlFor="">
            <input type="radio" name='employmentStatus' value="Part-Time" />
            Part-Time
          </label>

          <label htmlFor="">
            <input type="radio" name='employmentStatus' value="Full-Time" />
            Full-Time
          </label>
        </fieldset>



        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
            Gluten-free
          </label>
        </fieldset>


        <button>Submit</button>
      </form>
    </section>
  )
}

export default App
