

function changeBackground() {

      var rInput = document.getElementById("r").value;
      var gInput = document.getElementById("g").value;
      var bInput = document.getElementById("b").value;
      document.getElementById("body").style.background = "rgb("+rInput+","+gInput+","+bInput+")";

}
