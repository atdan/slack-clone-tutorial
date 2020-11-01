// Bring in the room class
const Namespace =  require('../classes/Namespace');
const Room =  require('../classes/Room');

// Set up the namespaces
let namespaces = [];
// Namespace(id, title, image, endpoint)
let animeNs = new Namespace(0,'Anime','https://logodix.com/logo/825928.png','/anime');
let dcNs = new Namespace(1,'Dc','https://logodix.com/logo/38631.jpg','/dc');
let marvelNs = new Namespace(2,'Marvel','https://logodix.com/logo/24206.jpg','/marvel');

// Room(id, title, namespace)
animeNs.addRoom(new Room(0,'Naruto','Anime'));
animeNs.addRoom(new Room(1,'One Piece','Anime'));
animeNs.addRoom(new Room(2,'Dragon BallZ','Anime', true));
animeNs.addRoom(new Room(3, "Black Clover", "Anime", true))

dcNs.addRoom(new Room(0,'Justice League','Dc'));
dcNs.addRoom(new Room(1,'Suicide Squad','Dc', true));
dcNs.addRoom(new Room(2,'Teen Titans','Dc'));
dcNs.addRoom(new Room(3,'Doom Patrol','Dc', true));

marvelNs.addRoom(new Room(0,'Avengers','Marvel'));
marvelNs.addRoom(new Room(1,'SHIELD','Marvel', true));
marvelNs.addRoom(new Room(2,'X-Men','Marvel'));
marvelNs.addRoom(new Room(3,'Inhumans','Marvel', true));

namespaces.push(animeNs,dcNs,marvelNs);

module.exports = namespaces;