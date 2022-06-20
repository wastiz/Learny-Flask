from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import sqlite3


app = Flask(__name__)
app.config['SQLALCCHEMY_DATABASE-URI'] = 'sqlite:///blog.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

def init_db():
    db.init_app(app)
    db.app = app
    db.create_all()


class Article(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    intro = db.Column(db.String(300), nullable=False)
    text = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Article %r>' % self.id


@app.route('/')
@app.route('/home')
def index():
    return render_template('index.html')


@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/task', methods=['POST', 'GET'])
def task():
    return render_template('task.html')


# @app.route('/task', methods=['POST', 'GET'])
# def task():
#     if request.method == 'POST':
#         title = request.form['title']
#         intro = request.form['intro']
#         text = request.form['text']
#         article = Article(title=title, intro=intro, text=text)
#         try:
#             db.session.add(article)
#             db.session.commit()
#             return redirect('/')
#         except:
#             return "An error occurred"
#     else:
#         return render_template('task.html')



@app.route('/user/<string:name>/<int:id>')
def user(name, id):
    return "User:" + name + str(id)


if __name__ == '__main__':
    app.run(debug=True)
