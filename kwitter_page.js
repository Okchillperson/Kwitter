var firebaseConfig = {

      
      apiKey: "AIzaSyBZfmEkwDlwbiZAhM4OJU9fapFEn9-K4vQ",
      authDomain: "kwitter-d5af6.firebaseapp.com",
      databaseURL: "https://kwitter-d5af6-default-rtdb.firebaseio.com",
      projectId: "kwitter-d5af6",
      storageBucket: "kwitter-d5af6.appspot.com",
      messagingSenderId: "478585229181",
      appId: "1:478585229181:web:d2c7baaed8c46a61888614",
      measurementId: "G-NTR3JZSEH0"
    };
    
      firebase.initializeApp(firebaseConfig);

      user_name=localStorage.getItem("user_name");
      room_name=localStorage.getItem("room_name");

      function send(){
            msg=document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
            });
            document.getElementById("msg").value="";
            

      }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
