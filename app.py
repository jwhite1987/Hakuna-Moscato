from flask import Flask, render_template, redirect, url_for
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

# Use PyMongo to establish Mongo connection
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:Ruger2012@uncc-database.cdwa3ro17u26.us-east-2.rds.amazonaws.com:5432/postgres"
db = SQLAlchemy(app)
# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # artists = mongo.db.content.find()

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
