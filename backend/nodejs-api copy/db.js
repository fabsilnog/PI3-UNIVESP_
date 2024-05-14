const mysql = require('mysql2/promise');
 
const client = mysql.createPool(process.env.CONNECTION_STRING);

// Busca por todos os usuários na tabela usuarios
async function selectUsers() {
    const res = await client.query('SELECT * FROM usuarios');
    return res[0];
}

// Busca por usuario específico na tabela usuarios
async function selectUser(ano_ingresso) {
    const res = await client.query('SELECT * FROM usuarios WHERE ano_ingresso=?', [ano_ingresso]);
    return res[0];
}

// Deleta o usuário com o id recebido
async function deleteUser(id) {
    return await client.query('DELETE FROM usuarios where id_usuario=?;', [id]);
}

//Adicionando um usuário	
async function insertUser(usuario) {
    const sql = 'INSERT INTO usuarios(nome, instituicao, curso, ano_ingresso, email, bio) VALUES (?,?,?,?,?,?);';
    const values = [usuario.nome, usuario.instituicao, usuario.curso, usuario.ano_ingresso, usuario.email, usuario.bio];
    await client.query(sql, values);
}

//Atualiza o cadastro no banco de dados
async function updateUser(id, usuario) {
    const sql = 'UPDATE usuarios SET nome=?, instituicao=?, curso=?, ano_ingresso=?, email=?, bio=? WHERE id_usuario=?';
    const values = [usuario.nome, usuario.instituicao, usuario.curso, usuario.ano_ingresso, usuario.email, usuario.bio, id];
    await client.query(sql, values);
}
 
module.exports = { selectUsers, selectUser, deleteUser, insertUser, updateUser }