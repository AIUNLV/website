from flask import Flask, render_template
from texts import texts

app = Flask(__name__)


@app.route('/')
def home():  # put application's code here
    return render_template('index.html', texts=texts)


if __name__ == '__main__':
    app.run(debug=True)
