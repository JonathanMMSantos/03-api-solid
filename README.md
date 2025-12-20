# APP

GymPass style app.

## RFs (Requisitos funcionais)

- [ ] Deve ser possível efetuar um cadastro;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter um número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter seu historico de check-ins;
- [ ] Deve ser possível o usuário buscar academias proximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia

## RNs (Regras de negócio)

- [ ] O usuário não deve se cadastrar com um email duplicado
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia
- [ ] O usuário não pode azer check-in se não estiver perto (100m) da academia
- [ ] O check-in só pode ser validado até 20min após criado
- [ ] O check-in só pode ser validado por admin
- [ ] A academia só pode ser cadastrada por admin

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário deve estar criptografada
- [ ] Os dados da aplicação precisam estar em um banco PostgressSQL
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por pagina
- [ ] O usuário deve ser idenfiticado por um JWT