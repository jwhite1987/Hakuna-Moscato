import flask
from google.cloud import bigquery
from google.cloud import storage
import pandas as pd
import os
import json
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = 'hakuna.json'


app = flask.Flask(__name__)

@app.route("/")
def index():
    return flask.render_template("index.html")

@app.route("/home")
def home():
    return flask.render_template("home.html")



@app.route('/search', methods=['GET', 'POST'])
def search():
    client = bigquery.Client()
    if flask.request.method == 'POST':
      wine = flask.request.form['wine']
      query = """
          SELECT
          *
          FROM
          hakunamoscato.wine_list.gwswinelist
          WHERE vintage = @wine
          ORDER BY score DESC;
          """
      job_config = bigquery.QueryJobConfig(
          query_parameters=[
          bigquery.ScalarQueryParameter("wine", "INT64", wine),
          ]
      )
      query_job = client.query(query, job_config=job_config)
      return flask.render_template('search.html', results=query_job.result())
    else:
        return flask.render_template('search.html')

@app.route('/search2', methods=['GET', 'POST'])
def search2():
    client = bigquery.Client()
    if flask.request.method == 'POST':
        country = flask.request.form['country']
        query = """
            SELECT
            *
            FROM
            hakunamoscato.wine_list.gwswinelist
            WHERE country = @country
            ORDER BY score DESC;
        """
        job_config = bigquery.QueryJobConfig(
            query_parameters=[
            bigquery.ScalarQueryParameter("country", "STRING", country),
            ]
        )
        query_job = client.query(query, job_config=job_config)

        return flask.render_template('search2.html', results=query_job.result())
    else:
        return flask.render_template('search2.html')

#
@app.route('/colors', methods=['GET', 'POST'])
def colors():
    client = bigquery.Client()
    if flask.request.method == 'POST':
        color = flask.request.form['colorWine']
        query = """
            SELECT
            *
            FROM
            hakunamoscato.wine_list.gwswinelist
            WHERE color = @color
            ORDER BY score DESC;
        """
        job_config = bigquery.QueryJobConfig(
            query_parameters=[
            bigquery.ScalarQueryParameter("color", "STRING", color),
            ]
        )
        query_job = client.query(query, job_config=job_config)
        return flask.render_template('colors.html', results=query_job.result())
    else:
        return flask.render_template('colors.html')
#
@app.route("/map")
def map():

    # Return template and data
    return flask.render_template("map.html")

@app.route("/new_charts")
def new_charts():

    # Return template and data
    return flask.render_template("new_charts.html")

@app.route("/team")
def team():

    # Return template and data
    return flask.render_template("team.html")
#
# @app.route('/test', methods=['GET', 'POST'])
# def test():    # GET request
#     if flask.request.method == 'GET':
#         client = bigquery.Client()
#         query = """
#             SELECT
#             *
#             FROM
#             hakunamoscato.wine_list.gwswinelist
#             ORDER BY score DESC;
#             """
#         query_job = client.query(query)
#         results = query_job.result()
#         return results



@app.route("/icons")
def icons():

    # Return template and data
    return flask.render_template("icons.html")

@app.route("/winemag")
def winemag():

    # Return template and data
    return flask.render_template("wine-mag.html")

@app.route("/charts")
def charts():

    # Return template and data
    return flask.render_template("charts.html")

if __name__ == "__main__":
    app.run(debug=True)
