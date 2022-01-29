import { createStore } from "vuex";

export default createStore({
  state: {
    recipes: [
      {
        slug: "BOLO DE MILHO DE LATA NO LIQUIDIFICADOR",
        title: "BOLO DE MILHO DE LATA NO LIQUIDIFICADOR",
        description: "BOLO DE MILHO DE LATA NO LIQUIDIFICADOR",
        ingredients: [
          "1 lata de milho (sem o líquido)",
          "1 lata de leite (medida da lata de milho)",
          "1 lata de açúcar (medida da lata de milho)",
          "1 lata de flocão de milho",
          "1 lata de flocão de milho",
          "3 ovos inteiros",
          "1 colher (sopa) de fermento em pó",
          "margarina",
          "farinha de trigo",
        ],
        method: [
          "escorra o milho e use a própria lata para as medidas.",
          "Unte e enfarinhe uma forma de bolo com furo.",
          " Preaqueça o forno.",
          "Coloque no liquidificador o milho (já escorrido), o leite, açúcar, flocão de milho, óleo, ovos e bata bem até que o milho fique bem moído.",
          "Se quiser, pode acrescentar duas colheres de sopa de coco ralado.",
          "Acrescente o fermento em pó e pulse o liquidificador 3 vezes.",
          "Despeje essa massa na forma e leve ao forno médio.",
          "Deixe assar por, aproximadamente, 40 minutos.",
          "Faça o teste do palito e observe um tom dourado médio, para saber que o bolo está pronto.",
          "Espere esfriar totalmente para desenformar.",
        ],
      },
      {
        slug: "PÃO DE QUEIJO FÁCIL E DELICIOSO",
        title: "PÃO DE QUEIJO FÁCIL E DELICIOSO",
        description: "PÃO DE QUEIJO FÁCIL E DELICIOS",
        ingredients: [
          "500 g de polvilho doce",
          "1 ou 2 ovos",
          "250 ml de leite integral",
          "1/2 copo de óleo",
          "1 colher/sopa rasa de sal",
          "1 pacote de queijo ralado parmesão",
          "1 prato cheio 350 g de queijo meia cura e/ou mussarela ralado no ralador quanto mais queijo, mais gostoso o pão vai ficar",
        ],
        method: [
          "Primeiro, coloque o leite e o óleo em uma panela pra esquentar, desligue o fogo imediatamente assim que começar a ferver (você verá umas bolinhas do leite subindo).",
          "Em uma tigela grande, coloque o polvilho e o sal, e misture bem, logo em seguida, despeje o conteúdo da panela ainda quente, misture bem, primeiro com uma colher e depois com a mão.",
          "Em seguida coloque o queijo ralado e um pouco do queijo do prato e também 1 ovo, continue misturando bem.",
          "Coloque o resto do queijo e verifique se a massa esta com uma textura boa, nem muito oleosa e nem muito seca.",
          "Se você sentir que está muito seca, coloque outro ovo, se ela ficar oleosa, coloque mais um pouco de polvilho.",
          "Essa massa deverá soltar da tigela e também da sua mão.",
          "Experimente a massa e veja se esta boa de sal, algumas pessoas gostam de colocar um pouco mais de sal.",
          "Agora é só fazer bolinhas e colocar na assadeira, deixando um pequeno espaço entre um pão e o outro.",
          "Não é necessário untar a assadeira.",
          "Deixe no forno em temperatura média (230°) até dourar um pouco.",
        ],
      },
    ],
  },
  mutations: {
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe);
    },
  },
});
