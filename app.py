from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/table', methods=['GET'])
def get_table_data():
    data = [
        {"id": 1, "name": "Item 1", "value": 100, "data": "sample_data_1"},
        {"id": 2, "name": "Item 2", "value": 200, "data": "sample_data_2"},
        {"id": 3, "name": "Item 3", "value": 300, "data": "sample_data_3"},
        {"id": 4, "name": "Item 4", "value": 100, "data": "sample_data_4"}
    ]

    columns = ["id", "name", "value", "data"]  # 👈 define order here
    return jsonify({"columns": columns, "rows": data})

@app.route('/table/2', methods=['GET'])
def table_data():
    data = [
        {"id": 1, "name": "Item 1", "value": 100},
        {"id": 2, "name": "Item 2", "value": 200}
      
    ]

    columns = ["id", "name", "value"]  # 👈 define order here
    return jsonify({"columns": columns, "rows": data})

if __name__ == '__main__':
    app.run(debug=True)
