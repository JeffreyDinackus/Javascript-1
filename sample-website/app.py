#if you don't understand flask, use this video https://www.youtube.com/watch?v=Z1RJmh_OqeA. the first 15 minutes or so will help you explain flask without databases. 
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

#these are the routes I can reference to go to index.html. It is also the route route. It is referenced in the HTML as /home or / or /index, not by the file name.  
@app.route('/')
@app.route('/home')
@app.route('/index')
def index():
    return render_template('index.html')

#these are the routes I can reference to go to about.html. 
@app.route('/about')
@app.route('/biography')
def about():
    return render_template('about.html')

if __name__ == "__main__":
    app.run(debug=True)
