import mysql.connector

def get_conexao():
    return mysql.connector.connect(
        host='localhost',
        user='root',
        password='',
        database='pesqueiro'
    )
