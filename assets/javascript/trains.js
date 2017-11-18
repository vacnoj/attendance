 var config = {
    apiKey: "AIzaSyASsgDZbALwqRRLZdkMOppx_D_NjTS15a8",
    authDomain: "weddemo-25d99.firebaseapp.com",
    databaseURL: "https://weddemo-25d99.firebaseio.com",
    projectId: "weddemo-25d99",
    storageBucket: "weddemo-25d99.appspot.com",
    messagingSenderId: "402451811080"
  };

firebase.initializeApp(config);

var database = firebase.database();

var name="";
var dinner=false;
var show=false;
var both = false;
var owe = "$17.50"

// database.ref().push({
// 	name: name,
// 	dinner: dinner,
// 	show: show,
// 	both: both,
// });


$("#submit").click(function(){

	event.preventDefault();

	name= $("#name").val().trim();
	dinner= $("#dinner").val().trim();
	show= $("#show").val().trim();
	both= $("#both").val().trim();

	$("#name").val("");
	$("#dinner").val("");
	$("#show").val("");
	$("#both").val("");

	database.ref().push({
		name: name,
		dinner: dinner,
		show: show,
		both: both,
		owe: owe
	});	

});

database.ref().on("child_added", function(childSnapshot) {
	
	$("#table-body").append(`<tr>`);
	$("#table-body").append(`<td class="table-name">${childSnapshot.val().name}</td>`);
	$("#table-body").append(`<td class="table-destination">${childSnapshot.val().dinner}</td>`);
	$("#table-body").append(`<td class="table-frequency">${childSnapshot.val().show}</td>`);
	$("#table-body").append(`<td class="table-next-arrival">${childSnapshot.val().both}</td>`);
	$("#table-body").append(`<td class="owe">${childSnapshot.val().owe}</td>`);
	$("#table-body").append(`</tr>`);

});

