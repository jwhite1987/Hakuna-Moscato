from flask import Flask, render_template, redirect, url_for
from flask_pymongo import PyMongo


app = Flask(__name__)

# Use PyMongo to establish Mongo connection
myclient = PyMongo.MongoClient(app, uri="mongodb+srv://jimmywhite87:Ruger2012@cluster0.kmis8.mongodb.net/pitchfork-review?retryWrites=true&w=majority")
mydb = myclient['pitchfork-db']
artists = mydb['artists']

# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Find one record of data from the mongo database
    # artists_1 = artists.find( {} )

    # Return template and data
    return render_template("index.html")


@app.route("/icons")
def icons():

    # Return template and data
    return render_template("icons.html")

@app.route("/map")
def map():

    # Return template and data
    return render_template("map.html")

@app.route("/notifications")
def notifications():

    # Return template and data
    return render_template("notifications.html")

@app.route("/tables")
def tables():

    # Return template and data
    return render_template("tables.html")

@app.route("/typography")
def typography():

    # Return template and data
    return render_template("typography.html")

@app.route("/user")
def user():

    # Return template and data
    return render_template("user.html")

if __name__ == "__main__":
    app.run(debug=True)
