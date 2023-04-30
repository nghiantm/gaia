from flask import Blueprint, render_template, request, redirect
import requests
import csv
import random

auth = Blueprint('auth', __name__)

def initDict():
    global dailyDict
    totalDict = {
        'Use reusable bags to groceries': False,
        'Use reusable water bottles': False,
        'Use natural for at least 8 hours': False,
        '"Run errand" instead of "drive errand"': False,
        'Take public transport to work': False,
        'Turn off unused electronics': False,
        'Limit your AC usage': False,
        'Plan your meal for less food waste': False,
        'Plant or take care of a tree': False,
        'Take digital note rather than using paper': False,
        'Hang clothes instead of using a dryer': False,
        'Bring a reusable coffee cup to coffee shops': False,
        'Recycle your plastic bottles': False,
        'Turn off the tap when brushing or shaving': False,
        'Bring your own reusable lunchbox': False,
        'Take a shorter shower to save water': False,
        'Support a charity second hand store': False,
        'Donate an old cloth item': False,
        'Clean your house with natural cleaners': False,
        'Use kitchen waste as compost': False
    }
    dailyDict = {}
    keys = random.sample(sorted(totalDict.keys()), 10)
    for key in keys:
        dailyDict[key] = totalDict[key]

initDict()

counter = 0
treeviaBool = True

@auth.route('/main', methods=['GET', 'POST'])
def main():
    global counter, treeviaBool

    #running score for tree development
    treeScore = 0
    for key, value in dailyDict.items():
        if dailyDict[key] == True:
            treeScore += 1
    
    if treeScore <= 2:
        level = 1
    elif treeScore <= 4:
        level = 2
    elif treeScore <= 6:
        level = 3
    elif treeScore <= 8:
        level = 4
    elif treeScore > 8:
        level = 5

    if request.method == 'POST':
        if request.form.get('next') == 'clicked':
            counter += 1
            initDict()
            return redirect('#')
        
        if request.form.get('reset') == 'clicked':
            initDict()
            counter = 1
            return redirect('#')

        if request.form.get('treevia') == 'clicked':
            treeviaBool = True
            return redirect('#')
        
        if request.form.get('minigame') == 'clicked':
            treeviaBool = False
            return redirect('#')
    
        newKey = request.form.get('doneness')
        #reverse boolean value when clicked
        dailyDict[newKey] = not dailyDict[newKey]
        #redirect to avoid duplicate POST request
        return redirect('#')

    return render_template('main.html', dailyDict=dailyDict, treeScore=treeScore, level=level, counter=counter, treeviaBool=treeviaBool)

