// Initialize Firebase
var config = {
    apiKey: "AIzaSyAAbEzsxxCn6SLa7QMW5ISUurNKcGcW4nk",
    authDomain: "halfway-hangouts.firebaseapp.com",
    databaseURL: "https://halfway-hangouts.firebaseio.com",
    projectId: "halfway-hangouts",
    storageBucket: "halfway-hangouts.appspot.com",
    messagingSenderId: "798688988815"
};

firebase.initializeApp(config);

var providerFB = new firebase.auth.FacebookAuthProvider();

firebase.auth().signInWithRedirect(providerFB);

firebase.auth().getRedirectResult().then(function (result) {
    if (result.credential) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // ...
    }
    // The signed-in user info.
    var user = result.user;
}).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});

// // Global variable
// let currentuser;

// // Capture Sign-up Button Click
// $("#createSubmit").on("click", function (event) {
//     // Don't refresh the page!
//     event.preventDefault();

//     // Capture User Inputs and store them into variables
//     var email = $("#emailInput").val().trim();
//     var password = $("#passwordInput").val().trim();

//     // Console log each of the user inputs to confirm we are receiving them
//     // console.log(email);
//     // console.log(password);


//     // sign up - check your firebase authorization
//     firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
//         console.log("sign up successful.");
//         window.location = "landingPage.html";
//     }, function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log(errorCode);
//         console.log(errorMessage);
//     });
// });

// // Capture Login Button Click
// $(".signInButton").on("click", function (event) {
//     // Don't refresh the page!
//     event.preventDefault();

//     // Capture User Inputs and store them into variables
//     var email = $(".emailInput").val().trim();
//     var password = $(".passwordInput").val().trim();

//     // loggin - test in incognito
//     firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
//         console.log("sign in successful.");
//         // window.location = "home";
//     }, function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log(errorCode);
//         console.log(errorMessage);
//     });
// });

// // $("#logoff").on("click", function (event) {

// //     event.preventDefault();

// //     firebase.auth().signOut().then(function () {
// //         console.log("sign off successful.");
// //     }, function (error) {
// //         console.log(error);
// //     });
// // });

// // — checking if user loggin
// firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//         // User is signed in.
//         var displayName = user.displayName;
//         var email = user.email;
//         var emailVerified = user.emailVerified;
//         var photoURL = user.photoURL;
//         var isAnonymous = user.isAnonymous;
//         var uid = user.uid;
//         var providerData = user.providerData;

//         // to Global variable
//         currentuser = user.uid;
//         var idToken = {};

//         console.log("loggedin");
//         console.log(uid);
//         $(".status").text("Welcome. You are loggedin.");
//         $(".user-id-display").append(uid);

//         // -- sending token
//         user.getIdToken().then(function (data) {
//             // Send Token to backend via HTTP

//             idToken = {
//                 Authorization: "Bearer " + data
//             }

//             $.post("/auth", idToken)
//                 .then();
//         });

//         $.get("/api/checkrole/" + user.email, function (data) {
//             console.log(data.role);
//             if (data.role === "employee") {
//                 window.location = "chatPage.html";
//             } else {
//                 window.location = "manager.html";
//             }
//         })

//     } else {
//         // User is signed out.
//         $(".status").text("You are not loggedin.");
//         console.log("not loggedin");
//     }
// });