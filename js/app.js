const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = document.querySelector(".autocom-box");

//if a user press any key and relaese

inputBox.onkeyup = (e) => {
    
   let userData = e.target.value;//user enterned data
   let emptyArray = [];

   if(userData){
       //compare user data to search
       emptyArray = suggestions.filter((data) => {
//filtering array value and user char to lower case and return only those words/sentc which starts with what user enterned word
           return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
           
       });
       emptyArray = emptyArray.map((data) =>{
           return data = '<li>' + data + '<li>';
       });
       console.log(emptyArray);
       searchWrapper.classList.add("active"); //show autocomplete box
       showSuggestions(emptyArray);
       let allList = suggBox.querySelectorAll('Li');
       for (let i = 0; i < allList.length; i++) {
          //adding onclick attriburte in all li tag
          allList[i].setAttribute("onclick", "select()")
           
       }
   } else{
    searchWrapper.classList.remove("active"); //hide autocomplete box
   }
}

function select(element){
    let selectUserData = element.textContent;
    inputBox.value = selectUserData; //passing the user select list data in text filed
    searchWrapper.classList.remove("active"); //hide autocomplete box
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>' + userValue + '<li>';

    }else {
        listData = list.join('');
    }

    suggBox.innerHTML = listData
}