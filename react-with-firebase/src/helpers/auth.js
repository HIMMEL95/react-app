import { auth } from "../services/firebase";

export function signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    return auth().signInWithPopup(provider);
}

export function signUp(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
}
  
export function signIn(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
}

export function logout() {
    return auth().signOut();
}