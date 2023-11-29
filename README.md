# GC
Cadeira de Gerencia de Configuração
Projeto de Restaurante Universitario
versão Web usando HTML,CSS,JavaScript(Futuramente talves seja migrado para TypeScript)

``` mermaid
classDiagram
    Aluno "1" -- "1" Refeicao
    Aluno "1"-- "*" Endereco
    Admin "1" -- "1" Refeicao
    Admin "1"-- "*" Endereco
    Refeicao "1" -- "*" Alimento
    Alimento "*" -- "1" Enum 
class Aluno{
    -id :Integer 
    -cpf: String
    -nome : String
    -fone : String
    -email : String
    -endereco : Endereco
    +addCredits()  void
    +feedBack()  void
    +newCard() void
}
class Endereco{
    -cep : String
    -numero : String
    -rua : String
    -bairro : String
    -cidade : String
    -estado : String
}
class Admin{
    -id :Integer 
    -cpf: String
    -nome : String
    -fone : String
    -email : String
    -endereco : Endereco
    +addCredits(): void
    +cRefeicao() : void
    +rRefeicao() : void
    +uRefeicao() : void
    +dRefeicao() : void
}
class Alimento{
    -id : Integer
    -tipo: Enum
    -nome : String
    -dataValidade : LocalDate
    -qtdAlimento : Integer
}
class Refeicao{
    -id : Integer
    -List<Alimento> alimentos: Alimento
    -tipo: Enum
    -valorUnitario : float
    +qtdAlimento() : Integer
}
class Enum{
    -arrozIntegral: Integer
    -arrozBranco : Integer
    -feijoPreto : Integer
    -feijoCarioca : Integer
    -feijoCorda : Integer
    -feijoada : Integer
    -carnePorcoFrito : Integer
    -carneFrango : Integer
    -carneFrangoFrito : Integer
    -carnePeixe : Integer
    -carnePeixeFrito : Integer
    -Vegetariano : Integer
}
```