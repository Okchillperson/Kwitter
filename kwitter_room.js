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
    document.getElementById("user_name").innerHTML="Welcome! "+user_name;
    

    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room_name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
