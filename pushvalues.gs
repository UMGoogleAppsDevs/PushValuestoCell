//the column numbers will have to change--the ones given here are just examples

function onEdit(e){
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
  var active = e.range;
 //below:  execute function only if the cell being edited is in the correct column (in this case, column C) and is not a header cell
  if (active.getColumnIndex() == 3 && active.getRowIndex() > 1) {

 //get the row index of the cell being edited in order to get and set cell values

 var activeCellRow = active.getRowIndex();
  
 var allCells = sheet.getRange("A:AZ");

  // Get the destination cell (in this case, the one in column E on the same row as the cell being edited in column C), and split it into an array, then get the value of the source cell for comparison
  var target = allCells.getCell(activeCellRow, 5).getValue();
  var targetArray = target.split('\r');
 //if the first element in the array isn’t equal to the value of the source cell (in other words, there’s a NEW edit in the source cell and not just a click, add the value of the source cell plus a carriage return to the destination cell

  if (targetArray[0] != e.value) { 
   var insert = sheet.getRange(activeCellRow, 5).setValue(e.value +'\r' + target);
   }
  }
  
  //else if //add same procedure for other columns you want to do this to
  
}
