from flask import Blueprint, render_template

auth = Blueprint('auth', __name__)

@auth.route('/main')
def main():
    return render_template('main.html', bool=True)

@auth.route('/logout')
def logout():
    return "<p>Logout<p>"

@auth.route('/sign-up')
def sign_up():
    return "<p>Sign up<p>"