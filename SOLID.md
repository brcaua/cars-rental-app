# SOLID
* S => SRP (SINGLE RESPONSABILITY PRINCIPLE)
* O => OCP (OPEN-CLOSED PRINCIPLE)
* L => LSP (LISKOW SUBSTITUITON PRINCIPLE)
* I => ISP (INTERFACE SEGREGATION PRINCIPLE)
* D => DIP (DEPENDENCY INVERSION PRINCIPLE)

## SRP
- É usado para separar as funções de cada parte do código
- Ex: Na nossa app, tinhamos como função da rota verificar e criar uma categoria, isso não é recomendável.
  Para isso, usamos o SRP para separar essa função num "service" específico, que atual como um middleware.

## DIP
- Ele determina como se dara o relacionamento entre as camdas da aplicação
- Ex: o nosso "execute()" do service não tem que saber os tipos das categorias, isso é papel da rota.

# LSP
- Basicamente, ele trata de herança.
- Ex: Podemos ter vários tipos de repo na nossa app, mas se precisarmos mudar, será necesssário mudar o código em si. Então, basta usar uma interface/contrato no qual vai ser setado os tipos dos dados e partir daí setar que tipos de repos estão disponíveis para uso. Podemos fazer essa alternância nas rotas sem que cause probema.