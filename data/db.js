const perfis = [
    { id: 1, nome: 'comum' },
    { id: 2, nome: 'administrador' },
]

const usuarios = [
    {
        id: 1,
        nome: "ana da web",
        email: "ana@email.com",
        idade: 12,
        salario_real: 1.7999,
        vip: true,
        perfil_id: 2,
        status: "ATIVO"
    },
    {
        id: 1,
        nome: "ana da web",
        email: "ana@email.com",
        idade: 12,
        salario_real: 1.7999,
        vip: true,
        perfil_id: 1,
        status: "INATIVO"
    },
    {
        id: 1,
        nome: "ana da web",
        email: "ana@email.com",
        idade: 12,
        salario_real: 1.7999,
        vip: true,
        perfil_id: 1,
        status: "BLOQUEADO"
    },
]

module.exports = { usuarios, perfis }