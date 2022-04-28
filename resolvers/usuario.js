const { perfis } = require('../data/db');

module.exports = {
    salario(usuario) {
        return usuario.salario_real
    },
    perfil({perfil_id}) {
        const selecionados = perfis
        .filter(u => u.id == perfil_id);
        return selecionados ? selecionados[0] : null
    }
}