from flask import Blueprint, request, jsonify
from banco.conexao import get_conexao

usuarios_bp = Blueprint("usuarios", __name__, url_prefix="/api/usuarios")

@usuarios_bp.route("/cadastro", methods=["POST"])
def cadastrar_usuario():
    dados = request.get_json()
    nome = dados.get("nome")
    email = dados.get("email")
    senha = dados.get("senha")

    if not nome or not email or not senha:
        return jsonify({"erro": "Preencha todos os campos."}), 400

    conexao = get_conexao()
    cursor = conexao.cursor()

    # Verifica se o email já existe
    cursor.execute("SELECT id FROM usuarios WHERE email = %s", (email,))
    if cursor.fetchone():
        return jsonify({"erro": "Email já cadastrado."}), 409

    try:
        cursor.execute(
            "INSERT INTO usuarios (nome, email, senha) VALUES (%s, %s, %s)",
            (nome, email, senha)
        )
        conexao.commit()
        return jsonify({"mensagem": "Usuário cadastrado com sucesso!"}), 201
    except Exception as erro:
        print("Erro no cadastro:", erro)
        return jsonify({"erro": "Erro ao cadastrar usuário."}), 500
    finally:
        cursor.close()
        conexao.close()
