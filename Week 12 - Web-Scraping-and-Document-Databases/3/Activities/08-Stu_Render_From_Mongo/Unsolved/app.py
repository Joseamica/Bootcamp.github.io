from flask import Flask, render_template
import pymongo

app = Flask(__name__)

# @TODO: setup mongo connection
conn = 'mongodb://localhost:27017'

client = pymongo.MongoClient(conn)

# @TODO: connect to mongo db and collection
db = client.store_inventory
db.produce.drop()


db.produce.insert_many(
    [
        {
            "type": "apples",
            "cost": .23,
            "stock": 333
        },
        {
            "type": "oranges",
            "cost": .30,    
            "stock": 400
        },
        {
            "type": "mango",
            "cost": .50,
            "stock": 100
        }

    ]
)

# Set route
@app.route('/')
def index():
    # Store the entire team collection in a list
    produces = list(db.produce.find())
    print(produces)

    # Return the template with the teams list passed in
    return render_template('index.html', p=produces)


if __name__ == "__main__":
    app.run(debug=True)

