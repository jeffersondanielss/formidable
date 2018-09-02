export class Forms {
  getQuestions() {
    fetch('http://localhost:7777')
      .then( response => response.text() )
      .then( data => JSON.parse(data) )
      .then( l => console.log( l )  )
  }
}