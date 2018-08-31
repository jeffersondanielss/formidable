const root = async (ctx) => {
  ctx.body = {

    "questions": [
      {
        "label": "Qual seu nome?",
        "type": "input",
        "placeholder": "Digite seu nome"
      },
      {
        "label": "Qual sua idade?",
        "type": "select",
        "options": [
          {
            "label": "Maior de 18 anos",
            "value": "1"
          },
          {
            "label": "Menor de 18 anos",
            "value": "0"
          }
        ]
      }

    ]

  }
}

module.exports = { root }