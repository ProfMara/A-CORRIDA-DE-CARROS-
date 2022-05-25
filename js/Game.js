class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  start() {

    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    //código para criar as sprites dos carros e colocá-los na matriz

    var carro1 = createSprite(width/2 - 100, height - 100);
    carro1.addImage(carroimg1);
    carro1.scale = 0.07;

    var carro2 = createSprite(width/2 + 100, height - 100);
    carro2.addImage(carroimg2);
    carro2.scale = 0.07;

    carros = [carro1, carro2];


    //grupo de sprites
    grupoMoedas = new Group();
    //chamar função para criar as sprites
   


  }

  //função que adiciona sprites
 /* addSprites(){
    //for que irá repetir os comandos pelo número de sprites do parâmetro
    for(var i=0; i < ; i++){
      
  }
*/

  play(){
    this.handleElements();

    //chamar função para pegar informações dos jogadores do banco de dados
    Player.pegarInfo();

    //verificar se os players são diferentes de indefinido
    if(allPlayers !== undefined){
      image(estradaimg, 0, -height*5, width, height*6 )

      var i = 0;
     
       for(var plr in allPlayers){     
        i++;
        var x = allPlayers[plr].posX;
        var y = height - allPlayers[plr].posY;
        carros[i-1].position.x = x;
        carros[i-1].position.y = y;

        
       //se o i tiver o mesmo valor do indice do player, fazer a câmera acompanhá-lo e coletar as moedas
        
        
    }
    //código para desenhar as sprites
    drawSprites();   
    //código para controlar o carro

   
  }

  


     
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  
  
  update(state){
    database.ref("/").update({
      gameState:state
    })
  }
  //fazer função para controlar o carro e atualizar o novo valor no banco de dados
  controlarCarro(){


  }

  //função para coletar a moeda
  coletarMoeda(i){
    
  
  }



}
