import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", [], "/js/galerie.js"),
    new Route("/carte", "La carte", "/pages/carte.html", [], "/js/carte.js"),
    new Route("/signin", "Connexion", "/pages/authentification/signin.html", ["disconnected"], "/js/authentification/signin.js"),
    new Route("/signup", "Inscription", "/pages/authentification/signup.html", ["disconnected"], "/js/authentification/signup.js"),
    new Route("/account", "Mon compte", "/pages/authentification/account.html", ["connected", "admin"]),
    new Route("/editPassword", "Changement de mot de passe", "/pages/authentification/editPassword.html", ["connected", "admin"]),
    new Route("/allResa", "Mes réservations", "/pages/reservation/allResa.html", ["client"]),
    new Route("/reserver", "Réserver", "/pages/reservation/reserver.html", ["client"]),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";