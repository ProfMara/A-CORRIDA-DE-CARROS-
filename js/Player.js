class Player {
  constructor() {
    this.nome = null;
    this.indice = null;
    this.posX = 0;
    this.posY = 0;
    this.pontos = 0;
    
  } 

  addPlayer(){
    var playerIndice = "players/player " + this.indice;

    if(this.indice == 1){
      this.posX = width/2 - 100;
    }else{
      this.posX = width/2 + 100;
    }

    database.ref(playerIndice).set({
      posX: this.posX,
      posY: this.posY,
      nome: this.nome,
      indice: this.indice,
      pontos: this.pontos
    });


  }
  


  getCount(){
    var playerCountRef = database.ref("playerCount");
     playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }
  //atualizar valores no banco de dados
  
  updateCount(quantidade){
    database.ref("/").update({
      playerCount: quantidade
    })
  }
  
  //atualizar os valores no banco de dados
  update(){
    var playerIndice = "players/player " + this.indice;
   //referenciar o banco de dados e colocar as informações novas do player local no banco de dados  
   
  }

  //pegar informações do banco de dados sobre os players
  static pegarInfo(){
    var ref  = database.ref("players")
    ref.on("value", data => {
      allPlayers = data.val();
    })
  }


  //pegar a distância no banco de dados
  pegarPos() {
    var playerRef = database.ref("players/player " + this.indice);
    
  }

}
