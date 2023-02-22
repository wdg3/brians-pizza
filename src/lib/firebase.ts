import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
	apiKey: "AIzaSyCU_Uk0pDAvqJReHtdmcqyuLOsj3BxLwVI",
	authDomain: "brians-pizza.firebaseapp.com",
	projectId: "brians-pizza",
	storageBucket: "brians-pizza.appspot.com",
	messagingSenderId: "706643054337",
	appId: "1:706643054337:web:d497b5c03f604601285500",
	measurementId: "G-1DNEVB00CT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export {
	auth,
	analytics
};