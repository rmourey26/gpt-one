export default function PageWithJSbasedForm() {

    // API endpoint where we send form data.
    const endpoint = "https://marketplace.api.healthcare.gov/api/v1"
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault();
   
      // Get data from the form.
      const data = {
        first: event.target.first.value,
        last: event.target.last.value,
        income: event.target.income.value,
        age: event.target.age.value,
        gender: event.target.gender.value,
        usesTobacco: event.target.usesTobacco.value,
        market: event.target.market.value,
        state: event.target.state.value,
        zipcode: event.target.zipcode.value,
        year: event.trigger.year.value, 
      };
   
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data);
   
      
    
   
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Accept': 'application/json',
          'mode': 'cors',
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      };
   
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options);
   
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json();
      alert(`Is this your full name: ${result.data}`);
    };

     // We pass the event to the handleSubmit() function on submit.
    return (
      <div className="grid gap-4 mb-6 md:grid-cols-4">
     
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />
   </div>

   <div>
        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="last" required />
  </div>

       <div>
        <label htmlFor="income">Income</label>
        <input type="text" id="income" name="income" required />
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input type="text" id="age" name="age" required />
      </div>

      <div>
        <label htmlFor="gender">Gender</label>
        <input type="text" id="gender" name="gender" required />
     </div>

     <div>
        <label htmlFor="usesTobacco">Do you use tobacco?</label>
        <input type="text" id="gender" name="gender" required />
      </div>

     <div>
        <label htmlFor="market">Individual | Family</label>
        <input type="text" id="market" name="market" required />
    </div>
    <div>
        <label htmlFor="state">State</label>
        <input type="text" id="state" name="state" required />
    </div>

    <div>
        <label htmlFor="zipcode">Zipcode</label>
        <input type="text" id="zipcode" name="zipcode" required />
     </div>

     <div>
        <label htmlFor="year">Year</label>
        <input type="text" id="year" name="year" required />
   
   </div>

   <div>
        <button type="submit">Submit</button>

        </div>
      </form>
      </div>
    );
  }