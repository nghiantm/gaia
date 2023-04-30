from flask import Blueprint, render_template, request, redirect, url_for
import requests
import csv

auth = Blueprint('auth', __name__)

@auth.route('/main', methods=['GET', 'POST'])
def main():
    dailyDict = {}
    with open('website/static/dailyChallenge.csv') as daily:
        dailyReader = csv.reader(daily, delimiter=',')

        #skip header row
        next(dailyReader)
    
        for row in dailyReader:
            key = row[0]
            value = bool(row[1])
            dailyDict[key] = value

    return render_template('main.html', dailyDict=dailyDict)

@auth.route('/waste')
def waste():
    return render_template('waste.html', Boolean=True)