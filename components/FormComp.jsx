export default function Form() {
    return (
      <form action="/api/form" method="post">

        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />
   
        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="last" required />

        <label htmlFor="income">Income</label>
        <input type="text" id="income" name="income" required />

        <label htmlFor="age">Age</label>
        <input type="text" id="age" name="age" required />

        <label htmlFor="gender">Gender</label>
        <input type="text" id="gender" name="gender" required />

        <label htmlFor="usesTobacco">Do you use tobacco?</label>
        <input type="text" id="gender" name="gender" required />

        <label htmlFor="market">Market type?</label>
        <input type="text" id="market" name="market" required />

        <label htmlFor="state">State</label>
        <input type="text" id="state" name="state" required />

        <label htmlFor="zipcode">zipcode</label>
        <input type="text" id="gender" name="gender" required />

        <label htmlFor="year">Year</label>
        <input type="text" id="year" name="year" required />
   
        <button type="submit">Submit</button>
      </form>
    );
  }