import pymongo
import certifi

con_string = "mongodb+srv://test:test@fsdi-107.w7k42.mongodb.net/?retryWrites=true&w=majority&appName=FSDI-107"

client = pymongo.MongoClient(con_string, tlsCAFile=certifi.where())
db = client.get_database("organika")