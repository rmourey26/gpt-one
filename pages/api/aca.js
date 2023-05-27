export default function handler(req, res) {
    const requestMethod = req.method;
    const body = JSON.parse(req.body);
    switch (requestMethod) {
        case 'POST':
           res.staus(200).JSON({})
    }
    if (req.method === 'POST') {
      // Process a POST request
    } else {
      // Handle any other HTTP method
    }
  }