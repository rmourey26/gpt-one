export default async function handler(req, res) {
  const data = {
    household: {
      income: 52000,
      people: [
        {
          age: 27,
          aptc_eligible: true,
          gender: "Female",
          uses_tobacco: false,
        },
      ],
    },
    market: "Individual",
    place: {
      countyfips: "37057",
      state: "NC",
      zipcode: "27360",
    },
    year: 2019,
  };
  
  
   
  

  const response = await fetch(
    "https://marketplace.api.healthcare.gov/api/v1/plans/search?apikey=WYm5KaoiTFESYFkdf63m8bAfsB5Aw0ec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const responseData = await response.json();

  if (!response.ok) {
    return res.status(response.status).json(responseData);
  };

  res.status(200).json(responseData);
  console.log(JSON(responseData):
};

