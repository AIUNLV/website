#!/bin/bash

# Navigate to the frontend directory and build the frontend
echo "Navigating to frontend and building..."
cd frontend || { echo "Failed to navigate to frontend directory."; exit 1; }
npm run build || { echo "npm run build failed"; exit 1; }

# Navigate back to backend directory
echo "Navigating to backend..."
cd ../backend || { echo "Failed to navigate to backend directory."; exit 1; }

# Check if virtual environment exists, if not, create it and install dependencies
if [ ! -d ".venv" ]; then
    echo ".venv not found. Creating virtual environment..."
    python3 -m venv .venv || { echo "Failed to create virtual environment."; exit 1; }
    echo "Installing dependencies from requirements.txt..."
    source .venv/bin/activate
    pip install -r requirements.txt || { echo "Failed to install dependencies."; exit 1; }
else
    echo "Activating virtual environment..."
    source .venv/bin/activate || { echo "Failed to activate virtual environment."; exit 1; }
fi

# Run the app with python3 if available, else fall back to python
if command -v python3 &>/dev/null; then
    echo "Running app with python3..."
    python3 app.py
elif command -v python &>/dev/null; then
    echo "Running app with python..."
    python app.py
else
    echo "Neither python3 nor python is installed."
    exit 1
fi
