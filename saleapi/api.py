import time
from flask import Flask,request,jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
#from marshmallow_sqlalchemy import ModelSchema

app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"]="sqlite:///saledash.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]=False
db=SQLAlchemy(app)

ma=Marshmallow(app)

class Prodlist(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    product=db.Column(db.Text)

    def __str__(self):
        return f'{self.id}{self.product}'
class Prodlistschema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model=Prodlist

# def pro_serializer(pro):
#     return{
#         'id':pro.id,
#         'product':pro.product
#     }
@app.route('/product/<id>')
def get_product(id):
    return jsonify({'prodnum':id})


@app.route('/time')
def get_current_time():
    #pro=Prodlist.query.all()
    #return jsonify((*map[pro_serializer,pro]))
    one_prodlist=Prodlist.query.all()
    print(one_prodlist)
    #print(one_prodlist.count)
    one_schema=Prodlistschema(many=True)
    output=one_schema.dump(one_prodlist)
    return jsonify(output)
    #return jsonify({'msg':'hello world'})
    #return {'time': time.time()}