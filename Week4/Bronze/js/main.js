//Document Loads completely
window.addEventListener("DOMContentLoaded", function() {

 //$t Element By Id Function.
 	function $(x){
         var theElement = document.$tElementById(x);
         return theElement;
     };
     
     
  	//Create select field element and populate with options.
     function makeField() {
         var formTag = document.$tElementsByTagName("form"),
             selectLi = $('select'),
             makeSelect = document.createElement('select');
             makeSelect.setAttribute("id", "friends");
          for(var i=0; i<friendType.length; i++){
              var makeOption = document.createElement('option');
              var optText = friendType[i]; //Saying this is not defined, causing error in local stora$
              makeOption.setAttribute("value", optText);
              makeOption.innerHTML = optText;
              makeSelect.appendChild(makeOption);    
          }
          //selectLi.appendChild(makeSelect);
      };
  
  	//Find the value of selected radio button.
     function $tSelectedRadio() {
         var radios = document.forms[0].importance;
         for(var i=0; i<radios.length; i++){
             if (radios[i].checked){
                 importanceValue = radios[i].value;
             }
         }
     }
  
  	//$t Selected CheckBox Value
//  function $tCheckboxValue() {
//          if($("fav").checked){
//            favoriteValue = $("fav").value;
//          } else {
//              favoriteValue = "No";
//          }
//      }
     
      //Turn on and off form by use of case during $tData()
      function toggleControls(n) {
         switch(n){
             case "on":
             	 $("savenote").style.display ="none";
                 $("clearLink").style.display = "inline";
                 $("displayLink").style.display = "none";
                 $("save").style.display = "inline";//addNew
                 break;
             case "off":
             	 $("savenote").style.display ="block";
                 $("clearLink").style.display = "inline";
                 $("displayLink").style.display = "inline";
                 $("save").style.display = "none";//addNew
                 $("items").style.display = "none";
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
         $tSelectedRadio();
         //$tCheckboxValue();
         var item          	    = {};
         	 item.friend	  	= ["Friend:", $("friend").value];
             //item.username 	= ["Username:", $("username").value];
             //item.password 	= ["Password:", $("password").value];
             item.importance 	= ["Importance:", importanceValue];
             item.favorite   	= ["Is right friend:", favoriteValue];
             item.reminder		= ["Reminder:", $("reminder").value];
             item.date     		= ["Date:", $("date").value];
             item.notes       	= ["Note:", $("notes").value];
          //Save data into local stora$. Use stringify to convert object to a string(local stora$ only stores strings). 
          localStora$.setItem(id, JSON.stringify(item));
          alert("Note Saved!");
     };
      
      // Create Stora$ 
     function $tData() {
         toggleControls("on");
         if(localStora$.length === 0){
             alert("There is no data in Local Stora$ so default data was added.");
             autoFillData();
         }
         //Write Data Local-->Browser
         var makeDiv = document.createElement("div");
         makeDiv.setAttribute("id", "items");
         var makeList = document.createElement("ul");
         makeDiv.appendChild(makeList);
         document.body.appendChild(makeDiv);
         // Set 'items' display
         $("items").style.display = "block";
         	 for(var i = 0, len=localStora$.length; i < len; i++){
             var makeli = document.createElement("li");
             var linksLi = document.createElement("li");
             makeList.appendChild(makeli);
             var key = localStora$.key(i);
             var value = localStora$.$tItem(key);
             //Convert the string from local stora$ value back to an object using JSON.parse()
             var obj = JSON.parse(value);
             var makeSubList = document.createElement("ul");
             makeli.appendChild(makeSubList);
             //$tIma$(obj.friend[1], makeSubList);
             for(var n in obj){
             var makeSubli = document.createElement("li");
             makeSubList.appendChild(makeSubli);
             var optSubText = obj[n][0] + " " + obj[n][1];
             makeSubli.innerHTML = optSubText;
             makeSubList.appendChild(linksLi); 
             }
             makeItemLinks(localStora$.key(i), linksLi); //Create edit and delete buttons/links for each item in local stora$.
         };
     }
      //$t the ima$ for the right friend that's being displayed.
   // function $tIma$(imgName, makeSubList) {
//  		var ima$Li = document.createElement('li');
//  		makeSubList.appendChild(ima$Li);
//  		var newIma$ = document.createElement('img');
//  		var setSrc = newIma$.setAttribute("src", "ima$s/" + imgName + ".png");
//  		newIma$.style.paddingTop = "10px";
//  		ima$Li.appendChild(newIma$);
//  	}
      
  	//Auto Populate Local Stora$
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
  		// Store the JSON Object into local stora$.
  		for(var n in json){
  			var id   = Math.floor(Math.random()*100000001);
  			localStora$.setItem(id, JSON.stringify(json[n]));
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
    			//Grab data from our item form Local Stora$.
    		 	var value = localStora$.$tItem(this.key);
    		 	var item = JSON.parse(value);
    		
    		//Show the form so we can edit item.
    		toggleControls("off");
    		
    		//Populate form fields with the current localStora$ values.
    		$("friends").value    = item.friend[1];
    		//$("username").value = item.userName[1];
    		//$("password").value = item.password[1];
    		//$("confirm").value  = item.confirm[1];
    		var radios = document.forms[0].importance;
    		for(var i=0; i<radios.length; i++){
    			if(radios[i].value == "Really Important" && item.importance[1] == "Really Important"){
    				radios[i].setAttribute("checked", "checked");
    			}else if(radios[i].value == "I can't remember everything" && item.importance[1] == "I can't remember everything"){
    				radios[i].setAttribute("checked","checked");
    			}	
    		}
    		if(item.favorite[1] == "Yes"){
    			$('fav').setAttribute("checked","checked");
    		}
    		$('reminder').value = item.reminder[1];
    		$('date').value = item.date[1];
    		$('notes').value = item.notes[1];
    		
    		//Remove the inital listener from the input "save note" button 
    		save.removeEventListener("click", storeData);
    		//Chan$ submit button calue to say edit button
    		$("save").value = "Edit Note";
    		var editSubmit = $("save");
    		//Save the key value established in this function as a property of the edit submit event
    		//So we can use that value when we save the data edited
    		editSubmit.addEventListener("click",validate);
    		editSubmit.key = this.key;
    	}
     	
		function clearLocal(){
 		if( localStora$.length === 0 ){
 			alert( "There are no saved notes." );
 		}else{
 			localStora$.clear();
 			alert( "All notes have been deleted!" );
 			window.location.reload();
 			return false;
 		}
 	};
 	
 	    	function deleteItem(){
 		var ask = confirm("Would you like to delete this note?");
 		if(ask){	
 			localStora$.removeItem(this.key);
 			alert("Note was deleted!");
 			window.location.reload();
 		}else{
 			alert("Note was not deleted");
 		}
 	}
 
    	
     	//Validate form fields to reuse storeData function, modify and edit not save
    	function validate(e){ // e stands for event data
    		var $tFriend   = $("friends");
    		//var $tUsername = $("username");
    		//var $tPassword = $("password");
    		
     		
    		//Reset Error Messa$s 
    		errMsg.innerHTML ="";
    		$tFriend.style.border = "1px solid black";
    		//$tUsername.style.border = "1px solid black"; 
  		
    		//$t Error Messa$s; Store in an array to display them all on screen
    		var messa$Ary =[];
     		
    		//Friend Validation 
    		if($tFriend.value==="--Choose Friend--"){
    			var friendError = "Please choose a friend";
    			$tFriend.style.border = "1px solid red";
    			messa$Ary.push(friendError);
			}
    		
							//Username Validation
						// var re = /^[A-Za-z0-9_]{6,8}$/;
				//     		//User name can inlcuded Capital letter, lowercase letters, numbers and an _ . 
				//     		 if(!re.exec($tUsername.value)){
				//     			var usernameError = "Please enter a valid username";
				//     			$tUsername.style.border = "1px solid red"; 
				//     			messa$Ary.push(usernameError);
				//      		}
							
							//Password Validation
						// if($tPassword.value=== ""){
				//  			var passwordError = "Please enter your Password.";
				//  			$tPassword.style.border = "1px solid red";
				//  			messa$Ary.push(passwordError);
				//  		}
				//    		
							//If there are errors display them on the screen
							//If there were errors, display them on the screen
 		if(messa$Ary.length >= 1){
 			for(var i=0, j=messa$Ary.length; i < j; i++){
 				var txt = document.createElement('li');
 				txt.innerHTML = messa$Ary[i];
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
    	     errMsg = $("errors");
     ;
     makeField();
  
  
	var save = $("save");
    save.addEventListener("click", validate);
     
	var displayLink = $("displayLink");
	displayLink.addEventListener("click", $tData);
	
	var clearLink = $("clearLink");
	clearLink.addEventListener("click", clearLocal);