post    /create/FindTurmaController
{
	"dataInicio": "2024-02-12T09:45:00.000Z",
	"dataFim": "2025-07-27T14:20:00.000Z"
}

post    /create/catequeseadulto
{
	"idTurma": 1
}

post    /create/pessoa
{
	"nome": "FulanoTal",
	"cpf": true,
	"rg": true,
	"comprovanteResidencia": true,
	"casado": true,
	"dataNasc": "2002-02-12T09:45:00.000Z"
}

post    /create/user
{
	"idPessoa": 1,
	"email": "email@email.com",
	"password": "Senha123",
	"permissao": 1
}

post    /create/sacramento
{
	"idPessoa": 2,
	"idTurma": 1,
	"dataInicioCiclo": "2022-03-27T20:00:00.000Z",
	"dataFimCiclo": "2022-06-03T14:09:45.000Z",
	"dataMissa": "2022-06-04T14:09:45.000Z"
}

post    /create/padrinhomadrinha
{
	"idPessoa": 1,
	"comprovanteBatismoAdmissao": true,
	"comprovantePrimeiraEucaristia": true,
	"comprovanteCrisma": true,
	"comprovanteCasamento": true
}

post    /create/batismo
{
	"idSacramento": 1,
	"idPadrinhoMadrinha": 1
}

post    /create/admissao
{
	"idSacramento": 1,
	"religiaoOrigem": "Umbanda",
	"dataOrigem": "2022-05-27T20:00:00.000Z"
}

post    /create/primeiraeucaristia
{
	"idSacramento": 1,
	"comprovanteBatismoAdmissao": true,
	"comprovanteCasamento": true,
	"Eucaristia": "2022-06-03T14:09:45.000Z"
}
post    /create/crisma
{
	"idSacramento": 1,
	"comprovanteBatismoAdmissao": true,
	"comprovanteCasamento": true,
	"idPadrinhoMadrinha": 1
}

get    /findbypk/turma/:idTurma                             {{ _.baseURL }}/findbypk/turma/1
get    /findbypk/catequeseadulto/:idCatequeseAdultos
get    /findbypk/pessoa/:id
get    /findbypk/user/:idPessoa
get    /findbypk/sacramento/:idSacramento
get    /findbypk/padrinhomadrinha/:cpfPessoa
get    /findbypk/batismo/:idSacramento
get    /findbypk/admissao/:idSacramento
get    /findbypk/primeiraeucaristia/:idSacramento
get    /findbypk/crisma/:idSacramento

get    /readall/turma
get    /readall/catequeseadulto
get    /readall/pessoa
get    /readall/user
get    /readall/sacramento
get    /readall/padrinhomadrinha
get    /readall/batismo
get    /readall/admissao
get    /readall/primeiraeucaristia
get    /readall/crisma

patch    /update/turma/:idTurma
patch    /update/catequeseadulto/:idCatequeseAdultos
patch    /update/pessoa/:cpf
patch    /update/user/:idPessoa
patch    /update/sacramento/:idSacramento
patch    /update/padrinhomadrinha/:cpfPessoa
patch    /update/batismo/:idSacramento
patch    /update/admissao/:idSacramento
patch    /update/primeiraeucaristia/:idSacramento
patch    /update/crisma/:idSacramento

delete    /delete/turma/:idTurma
delete    /delete/catequeseadulto/:idCatequeseAdultos
delete    /delete/pessoa/:cpf
delete    delete/user/:idPessoa
delete    /delete/sacramento/:idSacramento
delete    /delete/padrinhomadrinha/:cpfPessoa
delete    /delete/batismo/:idSacramento
delete    /delete/admissao/:idSacramento
delete    /delete/primeiraeucaristia/:idSacramento
delete    /delete/crisma/:idSacramento