from flask import Blueprint, render_template, request
import requests

views = Blueprint('views', __name__)

@views.route('/', methods=['GET', 'POST'])
def home():
    if request.form.get('start') == 'clicked':
        return render_template('main.html')
    return render_template('index.html')
