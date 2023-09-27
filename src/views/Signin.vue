<template> 
    <h1>Sign-In</h1>
    <p><input type="text" placeholder="Email" v-model="email" /> </p>
    <p><input type="text" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle"> Google Sign-in</button></p>
    </template>
    
    <script setup>
    import { ref } from "vue";
    import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
    import { useRouter } from "vue-router";
    const email = ref("");
    const password = ref("");
    const errMsg = ref();
    const router = useRouter ();

    const register = () => {
        signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully Logged In!");
            router.push("/feed")
    
        })
        .catch((error) => {
            alert(error.code);
            //alert(error.message);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid Email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No Account found for this email";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email/Password was incorrect";
                    break;
            }
    
        });
    
    };
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            router.push("/feed");
        })
        .catch((error) => {

        });
    };
    </script>