# Module used to connect Python with MongoDb
import pymongo

# The default port used by MongoDB is 27017
# https://docs.mongodb.com/manual/reference/default-mongodb-port/
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# Define the 'classDB' database in Mongo
db = client.classDB

# Query all students
# Here, db.students refers to the collection 'classroom '
classroom = db.classroom.find()

# Iterate through each student in the collection
for student in classroom:
    print(student)

# Insert a document into the 'students' collection
db.classroom.insert_one(
    {
        'name': 'Ahmed',
        'row': 3,
        'favorite_python_library': 'Matplotlib',
        'hobbies': ['Running', 'Stargazing', 'Reading']
    }
)

# Update a document
db.classroom.update_one(
    {'name': 'Ahmed'},
    {'$set':
        {'row': 4}
     }
)

# Add an item to a document array
db.classroom.update_one(
    {'name': 'Ahmed'},
    {'$push':
        {'hobbies': 'Listening to country music'}
     }
)

# Delete a field from a document
db.classroom.update_one({'name': 'Ahmed'},
                        {'$unset':
                         {'gavecandy': ""}
                         }
                        )


# Delete a document from a collection
db.classroom.delete_one(
    {'name': 'Ahmed'}
)
