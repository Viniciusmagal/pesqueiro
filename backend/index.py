from flask import Flask
from flask_cors import CORS
from api.reservas import reservas_bp
from api.usuarios import usuarios_bp
from api.login import login_bp

app = Flask(__name__)
CORS(app)

# Registra os blueprints das rotas
app.register_blueprint(reservas_bp)
app.register_blueprint(usuarios_bp)
app.register_blueprint(login_bp)

if __name__ == "__main__":
    app.run(debug=True)