from flask import Blueprint, request, jsonify
from banco.conexao import get_conexao

login_bp = Blueprint("login", __name__, url_prefix="/api/login")

@login_bp.route("/", methods=["POST"])
def login():
    dados = request.get_json()
    email = dados.get("email")
    senha = dados.get("senha")

    if not email or not senha:
        return jsonify({"erro": "Email e senha são obrigatórios."}), 400

    conexao = get_conexao()
    cursor = conexao.cursor()

    consulta = "SELECT id, nome, email FROM usuarios WHERE email = %s AND senha = %s"
    cursor.execute(consulta, (email, senha))
    usuario = cursor.fetchone()

    cursor.close()
    conexao.close()

    if usuario:
        id_usuario, nome, email_usuario = usuario
        return jsonify({
            "id": id_usuario,
            "nome": nome,
            "email": email_usuario
        }), 200
    else:
        return jsonify({"erro": "Email ou senha inválidos."}), 401
