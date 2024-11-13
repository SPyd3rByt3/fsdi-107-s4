from flask import Flask, request
import json
from config import db


app = Flask(__name__)

@app.get("/")
def home():
    return "hello from flask"
# this is just an example
# @app.post("/")
# def homePost():
# return "hello from flask post"

# Endpoints
@app.get("/test")
def test():
    return "hello from the test server"

# Endpoint using Json
@app.get("/api/about")
def aboutGet():
    name = {"name": "Adrian"}
    return json.dumps(name)


# create a new route /greet/{name}, this route should accept name 
# as part of the url and return an html message saying hello {name}
@app.get("/greet/<name>")
def greet(name):
    return f"""
<h1 style=color:blue>Hello {name}!</h1>"""

# maybe an EXAMPLE!?
# @app.post
# def home.Post
#return "blah blah"

# by creating the farewell message
@app.get("/farewell/<name>")
def farewell(name):
    return f"""
<h1 style=color:red>bye bye {name}!</h1>"""

# ###################################

products = []

def fix_id(obj):
    obj["_id"] = str(obj["_id"])  #(fix_)
    return obj

#@app.get("/api/products")
#def get_products():
#    return json.dumps(products)

@app.get("/api/products")
def get_products():
    products_db = []
    cursor = db.products_db.find({})
    for prod in cursor:
        products_db.append(fix_id(prod))
    return json.dumps(products_db)

@app.post("/api/products")
def save_products():
    item = request.get_json()
    print(item)
    # products.append(item) #db db.products.insert_one(item)
    db.products.insert_one(item)
    # return json.dumps(item)    # (fix_id(item))
    return json.dumps(fix_id(item))

# need to provide a LIST(python) or, same as an array like JS (<int index>)
@app.put("/api/products/<int:index>")
def update_products(index):
    updated_item=request.get_json()
    if 0<= index <=len(products):
        products[index] = updated_item
        return json.dumps(updated_item)
    else:
        return "that INDEX does NOT exist"

# reASSIGN elements 
@app.delete("/api/products/")
def delete_products(index):
    delete_item = request.get_json()
    if 0<= index <=len(products):
        delete_item = products.pop(index)
        return json.dumps(delete_item)
    else:
        return "that index does not exist"
    
#patch -- the method to UPDATE a specific ELEMENT into PYthon is: list_update
@app.patch("/api/products/<int:index>")
def patch_products(index):
    updated_field = request.get_json()
    if 0<= index <=len(products):
        updated_field(index).update(updated_field)
        return json.dumps(updated_field)
    else:
        return "that index has been PATCHed"
#@app.patch("/api/products/")
#def update_products(index):
 #   list_update = request.get_json()
  #  if 0<= index <=len(products):
   #     update_item = products.pop(index)
    #    return json.dumps(list_update)
    #else:
    #    return "that index does is updated"
    
    
    
@app.get("api/catalog")


return json.dumps(list_name)


catalog.append

app.run(debug=True)