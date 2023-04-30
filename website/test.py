import csv

dailyDict = {}
with open('website/static/dailyChallenge.csv') as daily:
    dailyReader = csv.reader(daily, delimiter=',')

    #skip header row
    next(dailyReader)
    
    for row in dailyReader:
        key = row[0]
        value = bool(row[1])
        dailyDict[key] = value

for key, value in dailyDict.items():
    print(key)