function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5dOkxTObjbb":
        Script1();
        break;
      case "6TA8GHrZzts":
        Script2();
        break;
      case "5bewB5ePWUQ":
        Script3();
        break;
      case "65rEQoO7PSI":
        Script4();
        break;
      case "66nJQLFqIJO":
        Script5();
        break;
      case "5sD7upDVXIr":
        Script6();
        break;
      case "6SCy4J38zAA":
        Script7();
        break;
      case "6XhE14khqF5":
        Script8();
        break;
      case "5iJzoY8RSm1":
        Script9();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script8()
{
  $("#tab-customlink").show();
}

function Script9()
{
  window.print();
}

