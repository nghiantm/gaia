from flask import Blueprint, render_template, request, redirect, url_for
import requests
import csv

auth = Blueprint('auth', __name__)

def initDict():
    global dailyDict
    dailyDict = {
        'Use reusable bags': False,
        'Use reusable water bottles': False,
        'Use natural for at least 8 hours': False,
        'Walk or use public transports instead of drive': False,
        'Turn off unused electronics': False,
        'Limit your AC usage': False,
        'Plan your meal for less food waste': False,
        'Plant or take care of a tree': False,
        'Take digital note rather than using paper': False,
        'random': False
    }

initDict()

@auth.route('/main', methods=['GET', 'POST'])
def main():
    #running score for tree development
    treeScore = 0
    for key, value in dailyDict.items():
        if dailyDict[key] == True:
            treeScore += 1
 
    if request.method == 'POST':
        newKey = request.form.get('doneness')
        #reverse boolean value when clicked
        dailyDict[newKey] = not dailyDict[newKey]
        #redirect to avoid duplicate POST request
        return redirect('#')

    return render_template('main.html', dailyDict=dailyDict, treeScore=treeScore)