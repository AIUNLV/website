from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_folder='../frontend/build')

@app.route('/')
def serve_react_app():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
