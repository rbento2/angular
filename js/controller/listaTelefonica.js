angular.module("listaTelefonica").controller("listaTelefonicaCrtl", function($scope, $filter){
$scope.app= "Lista Telefonica";
$scope.contatos = [
    {nome: $filter('uppercase')("Pedro"), telefone: "9999999999", data: new Date() ,operadora:{nome: "Oi", codigo:14, categoria:"Celular"}},
    {nome: $filter('uppercase')("Thiago"), telefone: "9999999888",data: new Date() ,operadora:{nome: "Tim", codigo:15, categoria:"Celular"}},
    {nome: $filter('uppercase')("João"), telefone: "9999999777",data: new Date() ,operadora:{nome: "Claro", codigo:16, categoria:"Celular"}},
]; 
$scope.operadoras = [
    {nome: "Oi",codigo:14, categoria:"Celular",preco: 2},
    {nome: "Tim",codigo:15, categoria:"Celular",preco: 1},
    {nome: "Vivo",codigo:16, categoria:"Celular",preco: 3},
    {nome: "Claro",codigo:17, categoria:"Celular",preco: 4},
    {nome: "GVT",codigo:25, categoria:"Fixo",preco: 2},
    {nome: "Embratel",codigo:21, categoria:"Fixo",preco: 1},
]
$scope.adicionarContato = function(contato){
    $scope.contatos.push(contato);
    delete $scope.contato;
    $scope.contatoForm.$setPristine();
};
$scope.apagarContato = function(contatos){
    $scope.contatos = contatos.filter(function(contato){
        if(!contato.selecionado)
            return contato;
    });
};
$scope.isContatoSelecionado = function(contatos){
    return contatos.some(function(contato){
        return contato.selecionado;
    });
};
$scope.ordernarPor = function(campo){
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoOrdernacao = !$scope.direcaoOrdernacao;
};
});