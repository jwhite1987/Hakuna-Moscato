from flask import Flask, render_template, redirect, url_for, jsonify
from config import DB_PASSWORD
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy import func

######
# Database Setup
######
engine = create_engine(f'postgresql://postgres:{DB_PASSWORD}@uncc-database.cdwa3ro17u26.us-east-2.rds.amazonaws.com:5432/postgres')

Base = automap_base()
Base.prepare(engine, reflect=True)

GWS = Base.classes.gws_cleaned_dataset
wine_mag = Base.classes.winemag_cleaned_dataset


app = Flask(__name__)


# app.config["SQLALCHEMY_DATABASE_URI"] = f'postgresql://postgres:{DB_PASSWORD}@uncc-database.cdwa3ro17u26.us-east-2.rds.amazonaws.com:5432/postgres'
# db = SQLAlchemy(app)

@app.route("/")
def home():
    session = Session(engine)

    results = session.query(GWS.wine, GWS.color, GWS.country, GWS.vintage, GWS.score).all()
    return jsonify(results)

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
