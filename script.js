
// Below function is used to readily display row & column count of existing table when page loads.
window.onload=function(){
	var table=document.getElementById('dynaTable');
	var rcount=table.rows.length;
	var ccount=table.rows[0].cells.length;
	document.getElementById('rcount').innerHTML="Total Rows="+rcount;
	document.getElementById('ccount').innerHTML="Total Columns="+ccount;
}

// This function is called from each of below functions to dynamically calculate
// row and column count after completing modification of table.
function calcCount(){
	var table=document.getElementById('dynaTable');
	var rcount=table.rows.length;
	var ccount=table.rows[0].cells.length;
	document.getElementById('rcount').innerHTML="Total Rows="+rcount;
	document.getElementById('ccount').innerHTML="Total Columns="+ccount;
}

// As name suggests, this function adds a row to our table each time html button is clicked.
function addRow(){
	var table=document.getElementById('dynaTable');
	var row=table.insertRow(rcount); //No.of rows
	var cell=row.insertCell(0);
	var ccount=table.rows[0].cells.length; //No. of columns
	var rcount=table.rows.length;
	cell.innerHTML="row-"+(rcount)+" col-1";
	var i=1;
	//Below while loop adds cells(as many as no. of columns in table) to the new row added. 
	while(i<ccount){
		cell=row.insertCell(i);
		i++;
	}
	calcCount();
}

// As name suggests, this function deletes a row from our table each time html button is clicked.
function delRow(){
	var table=document.getElementById('dynaTable');
	var rcount=table.rows.length; //No.of rows
	table.deleteRow(rcount-1); //Deletes a row from the last.
	calcCount();
}

// As name suggests, this function adds a column to our table each time html button is clicked.
function addCol(){
	var table=document.getElementById('dynaTable');
	var ccount=table.rows[0].cells.length; //No. of columns
	var rcount=table.rows.length; //No.of rows
	var row=table.rows[0];
	var cell=row.insertCell(ccount);
	cell.innerHTML="row-1 col-"+(ccount+1);
	var i=1;
	//Below while loop adds cells(as many as no. of rows in table) to the new column added. 
	while(i<rcount){
		row=table.rows[i];
		cell=row.insertCell(ccount);
		i++;
	}
	calcCount();
}

// As name suggests, this function deletes a column from our table each time html button is clicked.
function delCol(){
	var table=document.getElementById('dynaTable');
	var ccount=table.rows[0].cells.length; //No. of columns
	var rcount=table.rows.length; //No.of rows
	var i=0;
	//Below while loop deletes cells(as many as no. of rows in table) from the last column.
	while(i<rcount){
		row=table.rows[i];
		row.deleteCell(ccount-1);
		i++;
	}
	calcCount();
}