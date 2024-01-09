setScreen("screen1");
onEvent("buttonEat", "click", function( ) {
  setScreen("screenEat");
});
onEvent("buttonBolo", "click", function( ) {
  setScreen("screenBOLO");
});
onEvent("buttonStop", "click", function( ) {
  setScreen("screen1");
});
onEvent("buttonSopa", "click", function( ) {
  setScreen("screenBOLO");
});
onEvent("buttonStop", "click", function( ) {
  setScreen("screen1");
});
onEvent("buttonAipo", "click", function( ) {
  setScreen("screenAipo");
});
onEvent("buttonWater", "click", function( ) {
  setScreen("screenDrink");
});
onEvent("buttonDrinkEnd", "click", function( ) {
  setScreen("screen1");
});
onEvent("buttonOut", "click", function( ) {
  setScreen("screen1");
});
onEvent("buttonEsporte", "click", function( ) {
  setScreen("screenEsporte");
});
onEvent("buttonRun", "click", function( ) {
  setScreen("screenEsporteRun");
});
onEvent("buttonOut1", "click", function( ) {
  setScreen("screen1");
});
onEvent("buttonPeso", "click", function( ) {
  setScreen("screenEsportePeso");
});
onEvent("buttonOut2", "click", function( ) {
  setScreen("screen1");
});
onEvent("buttonBanho", "click", function( ) {
  setScreen("screenBanhos");
});
onEvent("buttonBanheira", "click", function( ) {
  setScreen("screenBanheira");
});
onEvent("buttonEnd", "click", function( ) {
  setScreen("screen1");
  setImageURL("image1", "assets/Panda.gif");
});
onEvent("buttonPiscina", "click", function( ) {
  setScreen("screenPool");
});
onEvent("buttonEnd1", "click", function( ) {
  setScreen("screen1");
});
onEvent("buttonCarinho", "click", function( ) {
  setScreen("screenLove");
});
onEvent("buttonEEEEE", "click", function( ) {
  setScreen("screen1");
});
onEvent("buttonDormir", "click", function( ) {
  setScreen("screenSleep");
});
onEvent("buttonAcordar", "click", function( ) {
  var x = randomNumber(1, 3);
  if (x == 1) {
    playSound("assets/Ninar,1.mp3", false);
  } else if ((x == 2)) {
    playSound("assets/Ninar,2.mp3", false);
  } else {
    playSound("assets/Ninar,3.mp3", false);
  }
  setImageURL("image1", "assets/Panda.gif");
  setScreen("screen1");
});
onEvent("buttonSleep", "click", function( ) {
  var x = randomNumber(1, 3);
  if (x == 1) {
    playSound("assets/Ninar,4.mp3", false);
  } else if ((x == 2)) {
    playSound("assets/Ninar,5.mp3", false);
  } else {
    playSound("assets/Ninar,6.mp3", false);
  }
  setImageURL("image1", "assets/Panda10.gif");
  setScreen("screen1");
});
onEvent("buttonAprontar", "click", function( ) {
  var x = randomNumber(1, 3);
  if (x == 1) {
    setImageURL("image1", "assets/Bear.png");
    playSound("assets/Lama.mp3", false);
  } else if ((x == 2)) {
    setImageURL("image1", "assets/Panda22-5.gif");
    playSound("assets/Vizinho.mp3", false);
  } else {
    setImageURL("image1", "https://code.org/images/logo.png");
    playSound("assets/Ninar,6.mp3", false);
  }
});
onEvent("buttonDoença", "click", function( ) {
  var x = randomNumber(1, 3);
  if (x == 1) {
    setImageURL("image1", "assets/Bear.png");
    playSound("assets/Lama.mp3", false);
  } else if ((x == 2)) {
    setImageURL("image1", "assets/Panda22-5.gif");
    playSound("assets/Vizinho.mp3", false);
  } else {
    setImageURL("image1", "https://code.org/images/logo.png");
    playSound("assets/Ninar,6.mp3", false);
  }
  setScreen("screenDoente");
});
onEvent("button19", "click", function( ) {
  setImageURL("image1", "assets/Panda11.gif");
  playSound("assets/Atchin.mp3", false);
  setScreen("screen1");
});
onEvent("buttonCurar", "click", function( ) {
  setImageURL("image1", "assets/Panda.gif");
  playSound("assets/Tô Melhor.mp3", false);
  setScreen("screen1");
});
timedLoop(120000, function() {
  showElement("image11");
  playSound("assets/Fome.mp3", false);
});
timedLoop(300000, function() {
  playSound("assets/Banheirar.mp3", false);
});
timedLoop(310000, function() {
  playSound("assets/Acabei.mp3", false);
});
timedLoop(35000, function() {
  hideElement("image11");
});
function Irritar() {
  setImageURL("image1", "assets/Panda3.gif");
  setImageURL("image12", "assets/Panda3.gif");
}
function Entristecer() {
  setImageURL("image1", "assets/Panda14.gif");
  setImageURL("image12", "assets/Panda14.jpg");
}
function Cosquinhas() {
  setImageURL("image1", "assets/Panda15.gif");
  setImageURL("image12", "assets/Panda15.gif");
}
function Contar_piadas() {
  setImageURL("image1", "assets/Panda15.gif");
  setImageURL("image12", "assets/Panda15.gif");
}
function Ofender() {
  setImageURL("image1", "assets/Panda14.jpg");
  setImageURL("image12", "assets/Panda14.gif");
}
function Dar_bronca() {
  setImageURL("image1", "assets/Panda16.gif");
  setImageURL("image12", "assets/Panda16.gif");
}
function Dar_tapa() {
  setImageURL("image1", "assets/Panda17.gif");
  setImageURL("image12", "assets/Panda17.gif");
}
function 
Tranquilizar() {
  setImageURL("image1", "assets/Panda18.gif");
  setImageURL("image12", "assets/Panda18.gif");
}
function Gritar_com_ele() {
  setImageURL("image1", "assets/Panda17.gif");
  setImageURL("image12", "assets/Panda17.gif");
}
onEvent("buttonInteração", "click", function( ) {
  setScreen("screenInteragir");
});
onEvent("buttonTalk", "click", function( ) {
  getText("dropdown1")();
});
onEvent("buttonVoltar", "click", function( ) {
  setScreen("screen1");
});
onEvent("buttonDoar", "click", function( ) {
  setScreen("screenDoação");
});
onEvent("buttonDesitir", "click", function( ) {
  setScreen("screen1");
});
onEvent("buttonDoar-lo", "click", function( ) {
  setScreen("screenNão");
});
onEvent("buttonMe-aperte!", "click", function( ) {
  setScreen("screen1");
});
onEvent("buttonBath", "click", function( ) {
  setScreen("screenBath");
});
onEvent("buttonLimpar", "click", function( ) {
  setScreen("screen1");
});
onEvent("Door", "click", function( ) {
  playSound("assets/Nãooo!.mp3", false);
});
onEvent("buttonInsistir", "click", function( ) {
  playSound("assets/Nãooo!,2.mp3", false);
});
