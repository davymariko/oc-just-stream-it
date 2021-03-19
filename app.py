from flask import Flask, request, render_template
app = Flask(__name__)


@app.route('/', methods=['GET'])
def upload():
    return render_template('js/main.html')


if __name__ == 'main':
    app.run(host="0.0.0.0", threaded=True, port=5000, debug=True)