#if you don't understand flask, use this video https://www.youtube.com/watch?v=Z1RJmh_OqeA. the first 15 minutes or so will help you explain flask without databases. This is also a video I referenced when making this file.
#Notes on accessability: I did my best to follow the checklist you gave us and follow what you said in class. A lot of stuff did not apply to my website because my website is so small in scope. Some of the definitions need to be explained in common english and not industry jargon. 
from flask import Flask, render_template, redirect
#the commented out stuff is code I would use if I want a database later
# from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
#ignore the database stuff unless I actually implement a database
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

#these are the routes, the first one is for a href to /about or /biography. when you reference the app.route, it will serve a function which renders a template(the html in the templates folder) 
@app.route('/about')
@app.route('/biography')
def about():
    return render_template('about.html')

@app.route('/youtube')
def youtube():
    return render_template('youtube.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/registration')
def registration():
    return render_template('registration.html')

@app.route('/hwlandingpage')
def hwlandingpage():
    return render_template('hwlandingpage.html')

@app.route('/assignment1')
def assignment1():
    return render_template('assignment1.html')

@app.route('/assignment2')
def assignment2():
    return render_template('assignment2.html')

@app.route('/assignment3')
def assignment3():
    return render_template('assignment3.html')

@app.route('/assignment4')
def assignment4():
    return render_template('assignment4.html')

@app.route('/extracredit1')
def extracredit1():
    return render_template('extracredit1.html')

@app.route('/extracredit2')
def extracredit2():
    return render_template('extracredit2.html')

@app.route('/blog1')
def blog1():
    return redirect("http://54.173.75.78/") #this is a redirect to my blog, it is not hosted on this website

#these are for the dummy social media buttons, they are simply show I know how to redirect to a social media page (I have no social media for this website)

@app.route('/externalyoutube')
def externalyoutube():
    return redirect("http://www.youtube.com")

@app.route('/externalreddit')
def externalreddit():
    return redirect("http://www.reddit.com")

@app.route('/externaltwitter')
def externaltwitter():
    return redirect("http://www.twitter.com")

@app.route('/externaltelegram')
def externaltelegram():
    return redirect("http://www.telegram.org")

#debug=true means it will change on refresh, this is not to be used for production level websites. if __name__ == __main__ is a check to make sure it is working properly
if __name__ == "__main__":
    app.run(debug=True)
