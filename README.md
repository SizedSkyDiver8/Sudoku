## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed on your system:

- React.js
- Firebase

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repository
   ```
2. Install the dependencies:
   `npm install`
   `npm install vanta three`
   `npm install firebase`

3. Set Up Firebase Configuration:
   Create a file called ‘firebaseConfig.ts’ under ‘src’ directory
   And add the following:

```
// firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export default app;

```

### Help Sources

Vanta.js was implemented using resources from the official website:
https://www.vantajs.com/
