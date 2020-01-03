import mysql.connector
import random
import string


myDb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="root",
  database="urls"
)

myCursor=myDb.cursor()

class Database:
    
    def insertURL(self,url):
        N=7
        res = ''.join(random.choices(string.ascii_uppercase + string.digits, k = N))
        myCursor.execute("insert into url(original_url, created_url) values(%s,%s)",(url,res))
        myDb.commit()
        return res
    
    def getOriginalUrl(self, token):
        myCursor.execute('select * from url where created_url = %s',(token,))
        myResult = myCursor.fetchall()
        return myResult