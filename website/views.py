from flask import Blueprint, render_template, request, redirect, url_for
import requests

views = Blueprint('views', __name__)

@views.route('/', methods=['GET', 'POST'])
def home():
    if request.form.get('start') == 'clicked':
        return redirect(url_for('auth.main'))
    return render_template('index.html')
