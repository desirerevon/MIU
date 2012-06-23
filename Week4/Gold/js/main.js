 //JQUERY VALIDATION FORM
	
		var parseSavenoteForm = function(data) {
		//uses form data here;
			//console.log(data);
		};

		$(document).bind('pageinit',function(){

		var sform = $('#savenoteform');

			//jQuery.validator.messages.required = "Required";
			sform.validate({
				invalidHandler: function(form, validator) {},
				submitHandler: function() {
					var data = sform.serializeArray();
					parseSavenoteForm(data);
		}
	});

});

  	//Get Element By Id Function.
 	function ge(x){
         var theElement = document.getElementById(x);
         return theElement;
     };
     
     
  	//Create select field element and populate with options.
     function makeField() {
         var formTag = document.getElementsByTagName("form"),
             selectLi = ge('select'),
             makeSelect = document.createElement('select');
             makeSelect.setAttribute("id", "friends");
          for(var i=0; i<friendType.length; i++){
              var makeOption = document.createElement('option');
              var optText = friendType[i]; //Saying this is not defined, causing error in local storage
              makeOption.setAttribute("value", optText);
              makeOption.innerHTML = optText;
              makeSelect.appendChild(makeOption);    
          }
          //selectLi.appendChild(makeSelect);
      };
  
  	//Find the value of selected radio button.
     function getSelectedRadio() {
         var radios = document.forms[0].importance;
         for(var i=0; i<radios.length; i++){
             if (radios[i].checked){
                 importanceValue = radios[i].value;
             }
         }
     }
  
  	//Get Selected CheckBox Value
//  function getCheckboxValue() {
//          if(ge("fav").checked){
//            favoriteValue = ge("fav").value;
//          } else {
//              favoriteValue = "No";
//          }
//      }
     
      //Turn on and off form by use of case during getData()
      function toggleControls(n) {
         switch(n){
             case "on":
             	 ge("savenoteform").style.display ="none";
                 ge("clearLink").style.display = "inline";
                 ge("displayLink").style.display = "none";
                 //ge("save").style.display = "inline";//addNew
                 break;
             case "off":
             	 ge("savenoteform").style.display ="block";
                 ge("clearLink").style.display = "inline";
                 ge("displayLink").style.display = "inline";
                 //ge("save").style.display = "none";//addNew
                 ge("items").style.display = "none";
                 break;
             default:
                 return false;
         }
     };
     
     function storeData(key){
     	//If there is no key this is new item and needs a new key.
     			if(!key){
         					var id              = Math.floor(Math.random()*100000001);
         }else{
         //Set id to existing key that we are editing that will save over data
         //The key is the same key that has been passed along edit submit handler
         //Goes to validate function to storeData function
         //Gather all form fields and store in an object.
         //Object properties contain array with for label and input values.
         		id = key;
         }
         getSelectedRadio();
         //getCheckboxValue();
         var item          	    = {};
         	 item.friend	  	= ["Friend:", ge("friend").value];
             //item.username 	= ["Username:", ge("username").value];
             //item.password 	= ["Password:", ge("password").value];
             item.importance 	= ["Importance:", importanceValue];
             item.favorite   	= ["Is right friend:", favoriteValue];
             item.reminder		= ["Reminder:", ge("reminder").value];
             item.date     		= ["Date:", ge("date").value];
             item.notes       	= ["Note:", ge("notes").value];
          //Save data into local storage. Use stringify to convert object to a string(local storage only stores strings). 
          localStorage.setItem(id, JSON.stringify(item));
          alert("Note Saved!");
     };
      
      // Create Storage 
     function getData() {
         toggleControls("on");
         if(localStorage.length === 0){
             alert("There is no data in Local Storage so default data was added.");
             autoFillData();
         }
         //Write Data Local-->Browser
         var makeDiv = document.createElement("div");
         makeDiv.setAttribute("id", "items");
         var makeList = document.createElement("ul");
         makeDiv.appendChild(makeList);
         document.body.appendChild(makeDiv);
         // Set 'items' display
         ge("items").style.display = "block";
         	 for(var i = 0, len=localStorage.length; i < len; i++){
             var makeli = document.createElement("li");
             var linksLi = document.createElement("li");
             makeList.appendChild(makeli);
             var key = localStorage.key(i);
             var value = localStorage.getItem(key);
             //Convert the string from local storage value back to an object using JSON.parse()
             var obj = JSON.parse(value);
             var makeSubList = document.createElement("ul");
             makeli.appendChild(makeSubList);
             //getImage(obj.friend[1], makeSubList);
             for(var n in obj){
             var makeSubli = document.createElement("li");
             makeSubList.appendChild(makeSubli);
             var optSubText = obj[n][0] + " " + obj[n][1];
             makeSubli.innerHTML = optSubText;
             makeSubList.appendChild(linksLi); 
             }
             makeItemLinks(localStorage.key(i), linksLi); //Create edit and delete buttons/links for each item in local storage.
         };
     }
      //Get the image for the right friend that's being displayed.
   // function getImage(imgName, makeSubList) {
//  		var imageLi = document.createElement('li');
//  		makeSubList.appendChild(imageLi);
//  		var newImage = document.createElement('img');
//  		var setSrc = newImage.setAttribute("src", "images/" + imgName + ".png");
//  		newImage.style.paddingTop = "10px";
//  		imageLi.appendChild(newImage);
//  	}
      
  	//Auto Populate Local Storage
       function autoFillData() {
  		var  json = {
	"notebook1": {
		"friend"  : ["Friend:", "Boyfriend"],
		"userName": ["Username:", "Desire"],
		"password": ["Password:", "mypass"],
	  "importance": ["Importance:", "Really Important"],
	    "favorite": ["Is right friend:", "Yes"],
	    "reminder": ["Reminder:", "7"],
	       "date" : ["Date:","2012-05-24"],
	       "notes": ["Note:","Ring Size 9"]
		
	},

	"notebook2": {
		  "friend": ["Friend:", "Girlfriend"],
		"userName": ["Username:", "David"],
		"password": ["Password:", "hispass"],
	  "importance": ["Importance:", "I can't remember everything"],
	    "favorite": ["Is right friend:", "Yes"],
	    "reminder": ["Reminder:", "10"],
	       "date" : ["Date:","2012-07-05"],
	       "notes": ["Note:","favorite color pink"]
		
	},

	"notebook3": {
		  "friend": ["Friend:", "Parent"],
		"userName": ["Username:", "Dominique"],
		"password": ["Password:", "herpass"],
	  "importance": ["Importance:", "Really Important"],
	    "favorite": ["Is right friend:", "Yes"],
	    "reminder": ["Reminder:", "10"],
	       "date" : ["Date:","2013-08-03"],
	       "notes": ["Note","Moms birthday is December 13th"]
		
	}
};
  		// Store the JSON Object into local storage.
  		for(var n in json){
  			var id   = Math.floor(Math.random()*100000001);
  			localStorage.setItem(id, JSON.stringify(json[n]));
  		}
  	 }
      
     //Make item Links
     //Create edit and delete links for each stored item when displayed 
     function makeItemLinks(key, linksLi){
     		//add edit single item link
    	    	var editLink = document.createElement('a');
    	    		editLink.href = "#";
    	 			editLink.key = key;
    	 		var editText = "Edit Note";
    	 			editLink.addEventListener("click", editItem);  
    	 			editLink.innerHTML = editText;
    	 			linksLi.appendChild(editLink);
    	 	
    	 		//add line break
    	 		var breakTag = document. createElement("br");
    	 			linksLi.appendChild(breakTag);
    	 	
    	 		//add delete single item link
    	 		var deleteLink = document.createElement('a');
    	 			deleteLink.href = "#";
    	 			deleteLink.key = key;
    	 		var deleteText = "Delete Note";
    	 			deleteLink.addEventListener("click", deleteItem);
    	 			deleteLink.innerHTML = deleteText;
    	 			linksLi.appendChild(deleteLink);
    	 
    	 }
    	 
    	function editItem(){
    			//Grab data from our item form Local Storage.
    		 	var value = localStorage.getItem(this.key);
    		 	var item = JSON.parse(value);
    		
    		//Show the form so we can edit item.
    		toggleControls("off");
    		
    		//Populate form fields with the current localStorage values.
    		ge("friends").value    = item.friend[1];
    		//ge("username").value = item.userName[1];
    		//ge("password").value = item.password[1];
    		//ge("confirm").value  = item.confirm[1];
    		var radios = document.forms[0].importance;
    		for(var i=0; i<radios.length; i++){
    			if(radios[i].value == "Really Important" && item.importance[1] == "Really Important"){
    				radios[i].setAttribute("checked", "checked");
    			}else if(radios[i].value == "I can't remember everything" && item.importance[1] == "I can't remember everything"){
    				radios[i].setAttribute("checked","checked");
    			}	
    		}
    		if(item.favorite[1] == "Yes"){
    			ge('fav').setAttribute("checked","checked");
    		}
    		ge('reminder').value = item.reminder[1];
    		ge('date').value = item.date[1];
    		ge('notes').value = item.notes[1];
    		
    		//Remove the inital listener from the input "save note" button 
    		save.removeEventListener("click", storeData);
    		//Change submit button calue to say edit button
    		ge("save").value = "Edit Note";
    		var editSubmit = ge("save");
    		//Save the key value established in this function as a property of the edit submit event
    		//So we can use that value when we save the data edited
    		editSubmit.addEventListener("click",validate);
    		editSubmit.key = this.key;
    	}
     	
		function clearLocal(){
 		if( localStorage.length === 0 ){
 			alert( "There are no saved notes." );
 		}else{
 			localStorage.clear();
 			alert( "All notes have been deleted!" );
 			window.location.reload();
 			return false;
 		}
 	};
 	
 	    	function deleteItem(){
 		var ask = confirm("Would you like to delete this note?");
 		if(ask){	
 			localStorage.removeItem(this.key);
 			alert("Note was deleted!");
 			window.location.reload();
 		}else{
 			alert("Note was not deleted");
 		}
 	}
 
    	
     	//Validate form fields to reuse storeData function, modify and edit not save
    	function validate(e){ // e stands for event data
    		var getFriend   = ge("friends");
    		//var getUsername = ge("username");
    		//var getPassword = ge("password");
    		
     		
    		//Reset Error Messages 
    		errMsg.innerHTML ="";
    		getFriend.style.border = "1px solid black";
    		//getUsername.style.border = "1px solid black"; 
  		
    		//Get Error Messages; Store in an array to display them all on screen
    		var messageAry =[];
     		
    		//Friend Validation 
    		if(getFriend.value==="--Choose Friend--"){
    			var friendError = "Please choose a friend";
    			getFriend.style.border = "1px solid red";
    			messageAry.push(friendError);
			}
    		
							//Username Validation
						// var re = /^[A-Za-z0-9_]{6,8}ge/;
				//     		//User name can inlcuded Capital letter, lowercase letters, numbers and an _ . 
				//     		 if(!re.exec(getUsername.value)){
				//     			var usernameError = "Please enter a valid username";
				//     			getUsername.style.border = "1px solid red"; 
				//     			messageAry.push(usernameError);
				//      		}
							
							//Password Validation
						// if(getPassword.value=== ""){
				//  			var passwordError = "Please enter your Password.";
				//  			getPassword.style.border = "1px solid red";
				//  			messageAry.push(passwordError);
				//  		}
				//    		
							//If there are errors display them on the screen
							//If there were errors, display them on the screen
 		if(messageAry.length >= 1){
 			for(var i=0, j=messageAry.length; i < j; i++){
 				var txt = document.createElement('li');
 				txt.innerHTML = messageAry[i];
 				errMsg.appendChild(txt);
 			}
    			e.preventDefault();
    		return false;
    		}else{
    			//If all is ok save our data! Send the key value that came from edit data function
    			//Remember key value passed through editSubmit listener as a property
    			storeData(this.key);
			}
     		
     }
            //Variable Defaults
     var friendType = ["--Choose Friend--", "Girlfriend", "Boyfriend", "Fiance", "Friend", "Sibling", "Parent", "Other"],
    		 importanceValue,
    		 favoriteValue = "No",
    	     errMsg = ge("errors");
     ;
     makeField();
  
  
	var save = ge("save");
    save.addEventListener("click", validate);
     
	var displayLink = ge("displayLink");
	displayLink.addEventListener("click", getData);
	
	var clearLink = ge("clearLink");
	clearLink.addEventListener("click", clearLocal);