from flask import Blueprint, jsonify, request
from banco.conexao import get_conexao

reservas_bp = Blueprint("reservas", __name__)

# Rota para criar uma reserva
@reservas_bp.route('/api/reservas', methods=['POST'])
def criar_reserva():
    dados = request.get_json()
    usuario_id = dados.get('usuario_id')
    data_reserva = dados.get('data_reserva')
    tanque = dados.get('tanque')  # nome do tanque em texto

    if not all([usuario_id, data_reserva, tanque]):
        return jsonify({'erro': 'Dados incompletos'}), 400

    try:
        conexao = get_conexao()
        cursor = conexao.cursor()

        cursor.execute("""
            INSERT INTO reservas (usuario_id, data_reserva, tanque)
            VALUES (%s, %s, %s)
        """, (usuario_id, data_reserva, tanque))

        conexao.commit()
        cursor.close()
        conexao.close()

        return jsonify({'mensagem': 'Reserva criada com sucesso'})

    except Exception as erro:
        print(f"Erro ao criar reserva: {erro}")
        return jsonify({'erro': 'Erro ao criar reserva'}), 500

# Rota para listar reservas de um usuário
@reservas_bp.route('/api/reservas/usuario/<int:usuario_id>', methods=['GET'])
def listar_reservas_usuario(usuario_id):
    try:
        conexao = get_conexao()
        cursor = conexao.cursor(dictionary=True)

        cursor.execute("""
            SELECT id, data_reserva, tanque
            FROM reservas
            WHERE usuario_id = %s
            ORDER BY data_reserva DESC
        """, (usuario_id,))

        reservas = cursor.fetchall()

        cursor.close()
        conexao.close()

        return jsonify(reservas)

    except Exception as erro:
        print(f"Erro ao buscar reservas: {erro}")
        return jsonify({'erro': 'Erro ao buscar reservas'}), 500

# Rota para cancelar (deletar) uma reserva pelo ID
@reservas_bp.route('/api/reservas/<int:reserva_id>', methods=['DELETE'])
def cancelar_reserva(reserva_id):
    try:
        conexao = get_conexao()
        cursor = conexao.cursor()

        cursor.execute("DELETE FROM reservas WHERE id = %s", (reserva_id,))
        conexao.commit()

        cursor.close()
        conexao.close()

        return jsonify({'mensagem': 'Reserva cancelada com sucesso!'})

    except Exception as erro:
        print(f"Erro ao cancelar reserva: {erro}")
        return jsonify({'erro': 'Erro ao cancelar reserva'}), 500
