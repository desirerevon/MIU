//Desire Revon
//MIU:Project 3
//Term:1206
//I Remember Mobile Application


// JQUERY VALIDATION FORM

		var parseImportanceForm = function(data) {
		//uses form data here;
			console.log(data);
		};

		$(document).bind('pageinit',function(){

		var iform = $('#importanceform');

			jQuery.validator.messages.required = "Required";
			iform.validate({
				invalidHandler: function(form, validator) {},
				submitHandler: function() {
					var data = iform.serializeArray();
					parseImportanceForm(data);
		}
	});

});

// window.addEventListener("DOMContentLoaded", function() {
// 
// 	//Get Element By Id Function.
// 	function bill(x){
//         var theElement = document.getElementById(x);
//         return theElement;
//     }
// 
// 	//Create select field element and populate with options.
//     function makeField() {
//         var formTag = document.getElementsByTagName("form"), //Form tag is an array of all form tags.
//             selectLi = bill("select"),
//             makeSelect = document.createElement("select");
//             makeSelect.setAttribute("id", "friends");
//         for(var i=0; i<friendType.length; i++){
//             var makeOption = document.createElement("option");
//             var optText = friendType[i];
//             makeOption.setAttribute("value", optText);
//             makeOption.innerHTML = optText;
//             makeSelect.appendChild(makeOption);    
//         }
//         selectLi.appendChild(makeSelect);
//     }
// 
// 	//Find the value of selected radio button.
//     function getSelectedRadio() {
//         var radios = document.forms[0].importance;
//         for(var i=0; i<radios.length; i++){
//             if (radios[i].checked){
//                 importanceValue = radios[i].value;
//             }
//         }
//     }
// 
// 	//Get Selected CheckBox Value
//     function getCheckboxValue() {
//         if(bill("fav").checked){
//           favoriteValue = bill("fav").value;
//         } else {
//             favoriteValue = "No";
//         }
//     }
//      //Turn on and off form by use of case during getData()
//      function toggleControls(n) {
//         switch(n){
//             case "on":
//             	bill("friendForm").style.display ="none";
//                 bill("clear").style.display = "inline";
//                 bill("display").style.display = "none";
//                 bill("addNew").style.display = "inline";
//                 break;
//             case "off":
//             	bill("friendForm").style.display ="block";
//                 bill('clear').style.display = "inline";
//                 bill("display").style.display = "inline";
//                 bill("addNew").style.display = "none";
//                 bill("items").style.display = "none";
//                 break;
//             default:
//                 return false;
//         }
//     };
//     
//     // Gather form data and place it in an Object, Object is an array for form label and value
//     function storeData(key){
//     	//If there is no key this is new item and needs a new key.
//     			if(!key){
//         var id              = Math.floor(Math.random()*100000001);
//         }else{
//         //Set id to existing key that we are editing that will save over data
//         //The key is the same key that has been passed along edit submit handler
//         //Goes to validate function to storeData function
//         //Gather all form fields and store in an object.
//         //Object properties contain array with for label and input values.
//         		id = key;
//         }
//         getSelectedRadio();
//         getCheckboxValue();
//         var item          	= {};
//         	item.friend	  	= ["Friend:", bill("friends").value];
//             item.userName 	= ["Username:", bill("username").value];
//             item.password 	= ["Password:", bill("password").value];
//             item.importance = ["Importance:", importanceValue];
//             item.favorite   = ["Is right friend:", favoriteValue];
//             item.reminder	= ["Reminder:", bill("reminder").value];
//             item.date     	= ["Date:", bill("date").value];
//             item.notes       =  ["Note:", bill("notes").value];
//          //Save data into local storage. Use stringify to convert object to a string(local storage only stores strings). 
//          localStorage.setItem(id, JSON.stringify(item));
//          alert("Note Saved!");
//          window.location.reload();
//     }
//     
//     // Write Data from Local Storage to Browser 
//     function getData() {
//     //Write Data from local storage to the browser.
//         toggleControls("on");
//         if(localStorage.length === 0){
//             alert("There is no data in Local Storage so default data was added.");
//             autoFillData();
//         }
//         var makeDiv = document.createElement("div");
//        		makeDiv.setAttribute("id", "items");
//         var makeList = document.createElement("ul");
//         	makeDiv.appendChild(makeList);
//         	document.body.appendChild(makeDiv);
//         // Set 'items' display
//         bill("items").style.display = "block";
//         for(var i = 0, len=localStorage.length; i < len; i++){
//             var makeli = document.createElement("li");
//             var linksLi = document.createElement("li");
//             makeList.appendChild(makeli);
//             var key = localStorage.key(i);
//             var value = localStorage.getItem(key);
//             //Convert the string from local storage value back to an object using JSON.parse()
//             var obj = JSON.parse(value);
//             var makeSubList = document.createElement("ul");
//             makeli.appendChild(makeSubList);
//             getImage(obj.friend[1], makeSubList);
//             for(var n in obj){
//             var makeSubli = document.createElement("li");
//             makeSubList.appendChild(makeSubli);
//             var optSubText = obj[n][0] + " " + obj[n][1];
//             makeSubli.innerHTML = optSubText;
//             makeSubList.appendChild(linksLi); 
//             }
//             makeItemLinks(localStorage.key(i), linksLi); //Create edit and delete buttons/links for each item in local storage.
//         }
//     }
//     //Get the image for the right friend that's being displayed.
//    function getImage(imgName, makeSubList) {
// 		var imageLi = document.createElement('li');
// 		makeSubList.appendChild(imageLi);
// 		var newImage = document.createElement('img');
// 		var setSrc = newImage.setAttribute("src", "images/" + imgName + ".png");
// 		newImage.style.paddingTop = "10px";
// 		imageLi.appendChild(newImage);
// 	}
//     
//      function autoFillData() {
// 		// The actual actual JSON OBJECT data required for this to work is coming from out JSON. js file which is loaded to out HTML page.
// 		// Store the JSON Object into local storage.
// 		for(var n in json){
// 			var id   = Math.floor(Math.random()*100000001);
// 			localStorage.setItem(id, JSON.stringify(json[n]));
// 		}
// 	 }
//     
//     //Make item Links
//     //Create edit and delete links for each stored item when displayed 
//     function makeItemLinks(key, linksLi){
//     		//add edit single item link
//    	    	var editLink = document.createElement('a');
//    	    		editLink.href = "#";
//    	 			editLink.key = key;
//    	 		var editText = "Edit Note";
//    	 			editLink.addEventListener("click", editItem);  
//    	 			editLink.innerHTML = editText;
//    	 			linksLi.appendChild(editLink);
//    	 	
//    	 		//add line break
//    	 		var breakTag = document. createElement("br");
//    	 			linksLi.appendChild(breakTag);
//    	 	
//    	 		//add delete single item link
//    	 		var deleteLink = document.createElement('a');
//    	 			deleteLink.href = "#";
//    	 			deleteLink.key = key;
//    	 		var deleteText = "Delete Note";
//    	 			deleteLink.addEventListener("click", deleteItem);
//    	 			deleteLink.innerHTML = deleteText;
//    	 			linksLi.appendChild(deleteLink);
//    	 
//    	 }
//    	 
//    	function editItem(){
//    			//Grab data from our item form Local Storage.
//    		 	var value = localStorage.getItem(this.key);
//    		 	var item = JSON.parse(value);
//    		
//    		//Show the form so we can edit item.
//    		toggleControls("off");
//    		
//    		//Populate form fields with the current localStorage values.
//    		bill("friends").value  = item.friend[1];
//    		bill("username").value = item.userName[1];
//    		bill("password").value = item.password[1];
//    		//bill("confirm").value  = item.confirm[1];
//    		var radios = document.forms[0].importance;
//    		for(var i=0; i<radios.length; i++){
//    			if(radios[i].value == "Really Important" && item.importance[1] == "Really Important"){
//    				radios[i].setAttribute("checked", "checked");
//    			}else if(radios[i].value == "I can't remember everything" && item.importance[1] == "I can't remember everything"){
//    				radios[i].setAttribute("checked","checked");
//    			}	
//    		}
//    		if(item.favorite[1] == "Yes"){
//    			bill('fav').setAttribute("checked","checked");
//    		}
//    		bill("reminder").value = item.reminder[1];
//    		bill("date").value = item.date[1];
//    		bill("notes").value = item.notes[1];
//    		
//    		//Remove the inital listener from the input "save note" button 
//    		save.removeEventListener("click", storeData);
//    		//Change submit button calue to say edit button
//    		bill("save").value = "Edit Note";
//    		var editSubmit = bill("save");
//    		//Save the key value established in this function as a property of the edit submit event
//    		//So we can use that value when we save the data edited
//    		editSubmit.addEventListener("click",validate);
//    		editSubmit.key = this.key;
//    	}
//    	
//    	function deleteItem(){
// 		var ask = confirm("Would you like to delete this note?");
// 		if(ask){	
// 			localStorage.removeItem(this.key);
// 			alert("Note was deleted!");
// 			window.location.reload();
// 		}else{
// 			alert("Note was not deleted");
// 		}
// 	}
// 
// 	function clearLocal(){
// 		if( localStorage.length === 0 ){
// 			alert( "There are no saved notes." );
// 		}else{
// 			localStorage.clear();
// 			alert( "All notes have been deleted!" );
// 			window.location.reload();
// 			return false;
// 		}
// 	}
// 
//    	
//    	//Validate form fields to reuse storeData function, modify and edit not save
//    	function validate(e){ // e stands for event data
//    		//Define elements to check
//    		var getUsername = bill("username");
//    		var getPassword = bill("password");
//    		var getFriend   = bill("friends");
//    		
//    		//Reset Error Messages 
//    		errMsg.innerHTML ="";
//    		getFriend.style.border = "1px solid black";
//    		getUsername.style.border = "1px solid black"; 
//    		
//    		
//    		//Get Error Messages; Store in an array to display them all on screen
//    		var messageAry =[];
//    		
//    		//Friend Validation 
//    		if(getFriend.value==="--Choose Friend--"){
//    			var friendError = "Please choose a friend";
//    			getFriend.style.border = "1px solid red";
//    			messageAry.push(friendError);
//    		}
//    		
//    		//Username Validation
//    		var re = /^[A-Za-z0-9_]{6,8}bill/;
//    		//User name can inlcuded Capital letter, lowercase letters, numbers and an _ . 
//    		if(!re.exec(getUsername.value)){
//    			var usernameError = "Please enter a valid username";
//    			getUsername.style.border = "1px solid red"; 
//    			messageAry.push(usernameError);
//    		}
//    		
//    		//Password Validation
// 		if(getPassword.value=== ""){
// 			var passwordError = "Please enter your Password.";
// 			getPassword.style.border = "1px solid red";
// 			messageAry.push(passwordError);
// 		}
//    		
//    		//If there are errors display them on the screen
//    		//If there were errors, display them on the screen
// 		if(messageAry.length >= 1){
// 			for(var i=0, j=messageAry.length; i < j; i++){
// 				var txt = document.createElement('li');
// 				txt.innerHTML = messageAry[i];
// 				errMsg.appendChild(txt);
// 			}
//    			e.preventDefault();
//    		return false;
//    		}else{
//    			//If all is ok save our data! Send the key value that came from edit data function
//    			//Remember key value passed through editSubmit listener as a property
//    			storeData(this.key);
//    		
//    		}
//    		
//     }
//     
//     //Variable Defaults
//     var friendType = ["--Choose Friend--", "Girlfriend", "Boyfriend", "Fiance", "Friend", "Sibling", "Parent", "Other"],
//    		 importanceValue,
//    		 favoriteValue = "No",
//    	     errMsg = bill("errors");
//     ;
//     makeField();
//     
//     var save = bill("save");
//     save.addEventListener("click", validate);
//     
//     var displayData = bill("display");
//     displayData.addEventListener("click", getData);
//     
//     var clearLink = bill("clear");
//     clearLink.addEventListener("click", clearLocal);
// });