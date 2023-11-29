# GC
Cadeira de Gerencia de Configuração
Projeto de Restaurante Universitario
versão Web usando HTML,CSS,JavaScript(Futuramente talves seja migrado para TypeScript)

```
classDiagram
    Clie    nt "1" -- "*"ItemCompra
    Client "1"-- "*"Endereco
    ItemCompra "*"-- "1"Produto
    Client "1" -- "*"Compra
    Estoque "*" -- "*"Produto
    Produto "*" -- "*"Fornecedor
    Fornecedor "1" -- "*" Endereco    
class Client{
    -id :Integer 
    -cpf: String
    -nome : String
    -fone : String
    -email : String
    -endereco : Endereco
}
class Endereco{
    -cep : String
    -numero : String
    -rua : String
    -bairro : String
    -cidade : String
    -estado : String
}
class Produto{
    -id : Integer
    -nome : String
    -dataValidade : LocalDate
    -qtdProduto : Integer
    -preco : float
}
class Compra{
    -id : Integer
    -dataHora : LocalDate
    +getValorTotal() float
}
class ItemCompra{
    -id : Integer
    -quantidade : Integer
    -valorUnitario : float
    +getValorTotal() : float
}
class Fornecedor{
    -id : Integer
    -Endereco : Endereco
    -List<Produto> : List<>
    -fone : String 
}
class Estoque{
    -idProduto : Produto
    -qtdProduto : List<Produto>
}
```