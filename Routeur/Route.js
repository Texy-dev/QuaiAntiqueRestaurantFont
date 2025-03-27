export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*
[] -> Tout le monde peut y accéder
["disconnected"] -> Réserver aux utilisateur déconnecté
["client"] -> Réserver aux utilisateur avec le rôle client
["admin"] -> Réserver aux utilisateur avec le rôle admin
["admin", "client"] -> Réserver aux utilisateur avec le rôle admin OU client
*/