from flask import Flask, render_template, redirect, url_for, jsonify, request, redirect
from config import DB_PASSWORD
from flask_cors import CORS
import psycopg2
# import os

###################################### I G N O R E ################
# import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine
# from sqlalchemy import func
# import numpy as np
###################################### I G N O R E ################

app = Flask(__name__)

CORS(app)

try:
    con = psycopg2.connect(
        database='postgres',
        user='postgres',
        password=DB_PASSWORD,
        host='uncc-database.cdwa3ro17u26.us-east-2.rds.amazonaws.com',
        port='5432'
    )

    cur = con.cursor()

except:
    print('Error')

@app.route("/")
def home():

    # Return template and data
    return render_template("index.html")

@app.route('/search', methods=['GET', 'POST'])
def search():
    if request.method == "POST":
        wine = request.form['wine']
        cur.execute(f'SELECT * FROM gws_cleaned_dataset WHERE vintage = {wine} ORDER BY score DESC;')
        con.commit()
        data = cur.fetchall()
        if len(data) == 0 and wine == 'all':
            cur.execute("SELECT * FROM gws_cleaned_dataset")
            con.commit()
            data = cursor.fetchall()
        return render_template('search.html', data=data)
    return render_template('search.html')

    cur.rollback()

@app.route('/search2', methods=['GET', 'POST'])
def search2():
    if request.method == "POST":
        country = request.form['country']
        cur.execute(f'SELECT * FROM gws_cleaned_dataset WHERE country = \'{country}\' ORDER BY score DESC;')
        con.commit()
        data = cur.fetchall()
        if len(data) == 0 and wine == 'all':
            cur.execute("SELECT * FROM gws_cleaned_dataset")
            con.commit()
            data = cursor.fetchall()
        return render_template('search2.html', data=data)
    return render_template('search2.html')

    cur.rollback()

@app.route("/map")
def map():

    # Return template and data
    return render_template("map.html")

@app.route("/charts")
def charts():

    # Return template and data
    return render_template("charts.html")



if __name__ == "__main__":
    app.run(debug=True)
