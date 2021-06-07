from flask import Flask, render_template, redirect, url_for, jsonify
from config import DB_PASSWORD
# from flask_cors import CORS
# import psycopg2
# import os

###################################### I G N O R E ################
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy import func
import numpy as np
######
# Database Setup
######
# Base = automap_base()
#
# engine = create_engine(f'postgresql://postgres:{DB_PASSWORD}@uncc-database.cdwa3ro17u26.us-east-2.rds.amazonaws.com:5432/postgres')
#
# Base.prepare(engine, reflect=True)
#
# GWS = Base.classes.gws_cleaned_dataset
# wine_mag = Base.classes.winemag_cleaned_dataset
###################################### I G N O R E ################

# DATABASE = os.getenv('uncc-database.cdwa3ro17u26.us-east-2.rds.amazonaws.com')
# DATABASE_USERNAME = os.getenv('postgres')
# DATABASE_PASSWORD = os.getenv(f'{DB_PASSWORD}')
#
app = Flask(__name__)
#
# CORS(app)


# app.config["SQLALCHEMY_DATABASE_URI"] = f'postgresql://postgres:{DB_PASSWORD}@uncc-database.cdwa3ro17u26.us-east-2.rds.amazonaws.com:5432/postgres'
# db = SQLAlchemy(app)

@app.route("/")
def home():
    # session = Session(engine)
    #
    # results = session.query(GWS.wine, GWS.color, GWS.country, GWS.vintage, GWS.score).all()
    # all_names = list(np.ravel(results))
    # return jsonify(all_names)

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
