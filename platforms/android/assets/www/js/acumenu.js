var win=null;
function printIt(printThis)
{
	win = window.open();
	self.focus();
	win.document.open();
	win.document.write('<'+'html'+'><'+'head'+'><'+'style'+'>');
	win.document.write('body, td { font-family: Verdana; font-size: 10pt;}');
	win.document.write('<'+'/'+'style'+'><'+'/'+'head'+'><'+'body'+'>');
	win.document.write(printThis);
	win.document.write('<'+'/'+'body'+'><'+'/'+'html'+'>');
	win.document.close();
	win.print();
	win.close();
}

function place(name, longitudedeg, longitudemin, latitudedeg,latitudemin, zonehr, zonemin, east, south) {
  this.name      = name;
  this.longitudedeg  = longitudedeg;
  this.longitudemin        = longitudemin;
  this.latitudedeg = latitudedeg;
  this.latitudemin        = latitudemin;
  this.zonehr      = zonehr;
  this.zonemin       = zonemin;
  this.east       = east;
  this.south       = south;
}

var atlas_tn = new Array(

new place("Chennai", "80", "16", "12", "59", "05", "30", true, false),
new place("Ariyalur", "79", "5", "11", "8", "05", "30", true, false),
new place("Coimbatore", "77", "0", "11", "0", "05", "30", true, false),
new place("Cuddalore", "79", "49", "11", "43", "05", "30", true, false),
new place("Dharmapuri", "78", "13", "12", "8", "05", "30", true, false),
new place("Dindigul", "78", "0", "10", "22", "05", "30", true, false),
new place("Erode", "77", "46", "11", "20", "05", "30", true, false),
new place("Kanchipuram", "79", "45", "12", "50", "05", "30", true, false),	
new place("Kanniyakumari", "77", "34", "8", "5", "05", "30", true, false),	
new place("Karur", "78", "7", "10", "58", "05", "30", true, false),	
new place("Krishnagiri", "78", "16", "12", "32", "05", "30", true, false),	
new place("Madurai", "78", "10", "9", "58", "05", "30", true, false),	
new place("Nagapattinam", "79", "50", "10", "46", "05", "30", true, false),	
new place("Namakkal", "78", "13", "11", "13", "05", "30", true, false),	
new place("Nilgiris", "76", "42", "11", "24", "05", "30", true, false),	
new place("Perambalur", "78", "56", "11", "14", "05", "30", true, false),	
new place("Pudukkottai", "78", "52", "10", "23", "05", "30", true, false),	
new place("Ramanathapuram", "78", "52", "9", "22", "05", "30", true, false),	
new place("Salem", "78", "12", "11", "39", "05", "30", true, false),	
new place("Sivaganga", "78", "29", "9", "50", "05", "30", true, false),	
new place("Thanjavur", "79", "10", "10", "47", "05", "30", true, false),	
new place("Theni", "77", "30", "10", "6", "05", "30", true, false),	
new place("Thoothukudi", "78", "7", "8", "48", "05", "30", true, false),	
new place("Thiruvarur", "79", "39", "10", "46", "05", "30", true, false),	
new place("Tirunelveli", "77", "44", "8", "44", "05", "30", true, false),	
new place("Tiruchirappalli", "78", "46", "10", "50", "05", "30", true, false),	
new place("Thiruvallur", "79", "57", "13", "09", "05", "30", true, false),	
new place("Tiruppur", "77", "20", "11", "05", "05", "30", true, false),	
new place("Tiruvannamalai", "79", "07", "12", "15", "05", "30", true, false),	
new place("Vellore", "79", "11", "12", "55", "05", "30", true, false),	
new place("Villupuram", "79", "32", "11", "57", "05", "30", true, false),	
new place("Virudhunagar", "77", "57", "9", "35", "05", "30", true, false)	
);

var atlas_kn = new Array(
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false),
new place("", "", "", "", "", "", "", true, false)

);

var atlas_in = new Array(
new place("Bangalore", "77", "40", "12", "59", "05", "30", true, false),	
new place("Ahmedabad", "72", "40", "23", "00", "05", "30", true, false),	
new place("Calcutta", "88", "24", "22", "36", "05", "30", true, false),	
new place("Chennai", "80", "16", "12", "59", "05", "30", true, false),
new place("Cochin", "76", "20", "09", "58", "05", "30", true, false),	
new place("Hyderabad", "78", "29", "17", "22", "05", "30", true, false),	
new place("kozhikode", "75", "43", "11", "15", "05", "30", true, false),	
new place("Mangalore", "74", "47", "12", "55", "05", "30", true, false),	
new place("Mumbai", "72", "50", "18", "55", "05", "30", true, false),	
new place("Mysore", "77", "00", "13", "15", "05", "30", true, false),	
new place("New Delhi", "77", "17", "28", "38", "05", "30", true, false),	
new place("Pondicherry", "79", "50", "11", "59", "05", "30", true, false),	
new place("Pune", "73", "57", "18", "29", "05", "30", true, false),	
new place("Trivendrum", "77", "00", "08", "41", "05", "30", true, false),	
new place("Vijayawada", "80", "39", "16", "31", "05", "30", true, false),

new place("Thiruvananthapuram", "76", "59", "08", "29", "05", "30", true, false),
new place("Kannur", "75", "25", "11", "52", "05", "30", true, false),	
new place("Kasargod", "75", "00", "12", "30", "05", "30", true, false),	
new place("Kozhikode", "75", "49", "11", "15", "05", "30", true, false),	
new place("Wayanad", "", "", "", "", "05", "30", true, false),	
new place("Eranakulam", "", "", "", "","05", "30", true, false),	
new place("Idukki", "", "", "", "", "05", "30", true, false),	
new place("Palakkad", "", "", "", "", "05", "30", true, false),	
new place("Thrissur ", "", "", "", "", "05", "30", true, false),	
new place("Alappuzha", "", "", "", "", "05", "30", true, false),	
new place("Kollam", "", "", "", "", "05", "30", true, false),	
new place("Kottayam", "", "", "", "", "05", "30", true, false),	
new place("Pathanamthitta", "", "", "", "", "05", "30", true, false),	



new place("Hyderabad", "78", "28", "17", "21", "05", "30", true, false),
new place("Adilabad", "78", "32", "19", "40", "05", "30", true, false),
new place("Anantapur", "77", "38", "14", "41", "05", "30", true, false),
new place("Chittoor", "79", "07", "13", "12", "05", "30", true, false),
new place("Kakinada", "82", "20", "16", "58", "05", "30", true, false),
new place("Guntur", "80", "26", "16", "18", "05", "30", true, false),
new place("Kadapa", "78", "55", "14", "28", "05", "30", true, false),
new place("Karimnagar", "79", "07", "18", "26", "05", "30", true, false),
new place("Khammam", "80", "09", "17", "15", "05", "30", true, false),
new place("Machilipatnam", "81", "08", "16", "10", "05", "30", true, false),
new place("Kurnool", "78", "03", "15", "50", "05", "30", true, false),
new place("Mahabubnagar", "78", "00", "16", "45", "05", "30", true, false),
new place("Sangareddi", "78", "05", "17", "37", "05", "30", true, false),
new place("Nalgonda", "79", "16", "17", "03", "05", "30", true, false),
new place("Nellore", "79", "58", "14", "26", "05", "30", true, false),
new place("Nizamabad", "78", "05", "18", "40", "05", "30", true, false),
new place("Ongole", "80", "03", "15", "30", "05", "30", true, false),
new place("Srikakulam", "83", "54", "18", "18", "05", "30", true, false),
new place("Vishakhapatnam", "83", "13", "17", "41", "05", "30", true, false),
new place("Vizianagaram", "83", "25", "18", "07", "05", "30", true, false),
new place("Warangal", "79", "35", "18", "00", "05", "30", true, false),
new place("Eluru", "81", "06", "16", "42", "05", "30", true, false),
	
new place("Singapore", "103", "55", "01", "14", "08", "00", true, false),
new place("Abu Dhabi", "54", "23", "24", "27", "04", "00", true, false),	
new place("Colombo", "79", "52", "06", "55", "05", "30", true, false),	
new place("Dubai", "55", "18", "25", "16", "04", "00", true, false),	
new place("George Town", "100", "16", "23", "00", "08", "00", true, false),	
new place("Ipoh", "101", "06", "05", "00", "08", "00", true, false),	
new place("Johor Bahru", "103", "44", "01", "29", "08", "00", true, false),	
new place("Kuala Lumpur", "101", "42", "03", "08", "08", "00", true, false),	
new place("Kuwait", "47", "39", "29", "20", "04", "00", true, false),	
new place("Masqat", "58", "35", "23", "37", "04", "00", true, false),	
new place("Petaling Jaya", "72", "40", "23", "00", "08", "00", true, false),	
new place("Riyadh", "46", "46", "24", "38", "04", "00", true, false),

new place("Austin", "97", "44", "30", "17", "-6", "00", false, false),
new place("Birmingham", "01", "55", "52", "30", "00", "00", false, false),
new place("Charlotte", "80", "50", "35", "05", "-4", "00", false, false),
new place("Chicago", "87", "38", "41", "53", "-6", "00", false, false),
new place("Houston", "95", "22", "29", "45", "-6", "00", false, false),
new place("London", "00", "07", "51", "30", "00", "00", false, false),
new place("Los Angeles", "118", "15", "34", "03", "-8", "00", false, false),
new place("Melbourne", "144", "58", "37", "49", "10", "00", true, false),
new place("New York", "74", "01", "40", "43", "-5", "00", false, false),
new place("San Francisco", "122", "26", "37", "46", "-8", "00", false, false),
new place("San Jose", "121", "53", "37", "20", "-8", "00", false, false),
new place("Sydney", "151", "12", "33", "52", "10", "00", true, false),
new place("Toronto", "79", "23", "43", "39", "-5", "00", false, false),
new place("Washington", "77", "02", "38", "54", "-5", "00", false, false)

);
	
		function updateRegion(sLang)
		{
		
			gLang=sLang;
			
			if (gLang=="TA") {
			atlas_local = atlas_tn;
			}
			if (gLang=="TE") {
			atlas_local = atlas_te;
			}
			if (gLang=="ML") {
			atlas_local = atlas_ml;
			}
			if (gLang=="KN") {
			atlas_local = atlas_kn;
			}
			
			
			if (frmInput.Region.selectedIndex=="0"){
			frmInput.Place.options.length = 0;
				for (var i=0; i < atlas_local.length;++i){
					frmInput.Place.options[i] = new Option(atlas_local[i].name,atlas_local[i].name);
			
				}
			}
			
			if (frmInput.Region.selectedIndex=="1"){
			frmInput.Place.options.length = 0;
				for (var i=0; i < atlas_in.length;++i){
					frmInput.Place.options[i] = new Option(atlas_in[i].name,atlas_in[i].name);
			
				}
			}
			
			if (frmInput.Region.selectedIndex=="2"){
			frmInput.Place.options.length = 0;
				for (var i=0; i < atlas_as.length;++i){
					frmInput.Place.options[i] = new Option(atlas_as[i].name,atlas_as[i].name);
			
				}
			}
			
			if (frmInput.Region.selectedIndex=="3"){
			frmInput.Place.options.length = 0;
				for (var i=0; i < atlas_wo.length;++i){
					frmInput.Place.options[i] = new Option(atlas_wo[i].name,atlas_wo[i].name);
			
				}
			}
			
			updatePlace();
		
		}
	
		
		function updatePlace(){
		
			var ndx=frmInput.Place.selectedIndex;			
			
			if (frmInput.Region.selectedIndex=="0"){
			frmInput.LonDeg.value = atlas_local[ndx].longitudedeg;
			frmInput.LonMin.value = atlas_local[ndx].longitudemin;
			frmInput.LatDeg.value = atlas_local[ndx].latitudedeg;
			frmInput.LatMin.value = atlas_local[ndx].latitudemin;
			frmInput.ZHour.value = atlas_local[ndx].zonehr;
			frmInput.ZMin.value = atlas_local[ndx].zonemin;
			frmInput.East.checked=atlas_local[ndx].east;
			frmInput.South.checked= atlas_local[ndx].south;
			}
				
			if (frmInput.Region.selectedIndex=="1"){
			frmInput.LonDeg.value = atlas_in[ndx].longitudedeg;
			frmInput.LonMin.value = atlas_in[ndx].longitudemin;
			frmInput.LatDeg.value = atlas_in[ndx].latitudedeg;
			frmInput.LatMin.value = atlas_in[ndx].latitudemin;
			frmInput.ZHour.value = atlas_in[ndx].zonehr;
			frmInput.ZMin.value = atlas_in[ndx].zonemin;
			frmInput.East.checked=atlas_in[ndx].east;
			frmInput.South.checked= atlas_in[ndx].south;
			}	

			if (frmInput.Region.selectedIndex=="2"){
			frmInput.LonDeg.value = atlas_as[ndx].longitudedeg;
			frmInput.LonMin.value = atlas_as[ndx].longitudemin;
			frmInput.LatDeg.value = atlas_as[ndx].latitudedeg;
			frmInput.LatMin.value = atlas_as[ndx].latitudemin;
			frmInput.ZHour.value = atlas_as[ndx].zonehr;
			frmInput.ZMin.value = atlas_as[ndx].zonemin;
			frmInput.East.checked=atlas_as[ndx].east;
			frmInput.South.checked= atlas_as[ndx].south;
			}
			
			if (frmInput.Region.selectedIndex=="3"){
			frmInput.LonDeg.value = atlas_wo[ndx].longitudedeg;
			frmInput.LonMin.value = atlas_wo[ndx].longitudemin;
			frmInput.LatDeg.value = atlas_wo[ndx].latitudedeg;
			frmInput.LatMin.value = atlas_wo[ndx].latitudemin;
			frmInput.ZHour.value = atlas_wo[ndx].zonehr;
			frmInput.ZMin.value = atlas_wo[ndx].zonemin;
			frmInput.East.checked=atlas_wo[ndx].east;
			frmInput.South.checked= atlas_wo[ndx].south;
			}	
			
		}
