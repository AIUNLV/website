# Website

### Prerequisites

- Python 3.x
- Node.js and npm

## Setup 
### Set Up the Backend (Flask)

#### Create Python Virtual Environment
To keep your dependencies organized, create a virtual environment:
```bash
cd backend  
python3 -m venv .venv
```

#### Activate venv
Activate the virtual environment with:
```bash
# On macOS/Linux
source .venv/bin/activate

# On Windows
.venv\Scripts\activate
```

#### Install Flask and Other Requirements
Ensure you have a `requirements.txt` file in your `backend` directory with Ïthe necessary dependencies. Then install the requirements:
```bash
pip install -r requirements.txt
```

### Set Up the Frontend (React)

#### Install required dependencies
Install Node.js dependencies
```bash
cd frontend
npm i
```

### Build the React App
Before connecting the React app to Flask, build the production version of the React app:
```bash
npm run build
```
This will generate the necessary files in the `build` directory.

### Connect Flask and React

#### Run the Flask Server
Navigate back to the `backend` directory (if you're not there) and run:
```bash
python3 app.py
```
The Flask server will start and serve your React app at `http://localhost:5000/`.

## Other
### Front End Development
To just build for the front end with hot reloading navigate to `frontend` and run:
```bash
npm start
```