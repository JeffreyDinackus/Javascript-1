from flask import Flask, render_template
#the commented out stuff is code I would use if I want a database later
# from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqllite:///testdb.db'
# db = SQLAlchemy(app)
#
#
# class Todo(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#this function tells SQL how to handle printing informatio when asked, from the CLI
#     def __repr__(self):
#         return 'self.id'

@app.route('/')
@app.route('/home')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/about')
@app.route('/biography')
def about():
    return render_template('about.html')

if __name__ == "__main__":
    app.run(debug=True)