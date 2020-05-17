from flask import Flask, render_template, flash
from flask_restful import Api,Resource
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from flask_sqlalchemy import SQLAlchemy
import os

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'data.db') + "?check_same_thread=False"
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SECRET_KEY'] = "12345"
db = SQLAlchemy(app)
api = Api(app)


map = {
    "1": ["小规模", "较低", "低", "较高", "低", "偏低"],
    "2": ["小规模", "较低", "偏低", "较高", "偏高", "偏低"],
    "3": ["小规模", "略高", "偏低", "中低", "偏高", "偏低"],
    "4": ["小规模", "较低", "低", "较高", "偏高", "偏低"],
    "5": ["大规模", "较低", "较好", "中低", "偏高", "高"],
    "6": ["中等规模", "较低", "偏低", "高", "偏高", "较高"],
    "7": ["中等规模", "较高", "偏低", "较高", "较低", "偏低"],
    "8": ["小规模", "较低", "偏低", "高", "偏高", "偏低"],
    "9": ["中等规模", "较高", "偏低", "较高", "偏高", "偏低"],
    "10": ["中等规模", "较低", "偏低", "较高", "偏高", "较高"],
}

colname=["企业规模","司法风险","经营能力","经营风险","信用风险","技术水平"]


class Ent(db.Model):
    __tablename__ = 'entdata'
    entname = db.Column(db.String(255), primary_key=True)
    cluster = db.Column(db.String(255))


class EntForm(FlaskForm):
    entname = StringField("ent name")
    cluster = StringField("cluster")
    submit = SubmitField("submit")


@app.route("/", methods=['GET', 'POST'])
def login():
    entform = EntForm()
    entinfo = Ent.query.filter_by(entname="")
    if entform.validate_on_submit():
        entname = entform.entname.data
        cluster = entform.cluster.data
        if entname:
            entinfo = Ent.query.filter_by(entname=entname)
        elif cluster:
            entinfo = Ent.query.filter_by(cluster=cluster)
        else:
            flash("none")
    return render_template("index.html", entinfo=entinfo,colname=colname, form=entform)


if __name__ == "__main__":
    app.run()
