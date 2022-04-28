const { usuarios, perfis } = require('../data/db');

module.exports = {
    usuarioLogado() {
        return {
            id: 1,
            nome: "ana da web",
            email: "ana@email.com",
            idade: 12,
            salario_real: 1.7999,
            vip: true
        }
    }, produtoEmDestaque() {
        return {
            nome: "arroz",
            preco: 4.90,
            desconto: 10
        }
    },
    numeroDaMegaSena() {
        return [1, 2, 3, 4, 5]
    },
    usuarios() {
        return usuarios
    },
    usuario(_, args) {
        const selecionados = usuarios
            .filter(u => u.id == args.id);
        return selecionados ? selecionados[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(_, args) {
        const selecionados = perfis
            .filter(u => u.id == args.id);
        return selecionados ? selecionados[0] : null
    },
}