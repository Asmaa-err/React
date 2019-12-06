import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './src/routes/routes';
import database from './src/models/database';

//création de l'app 
const app = express();

//configuration du serveur avec Cors et bodyParser 
app.use (bodyParser.urlencoded({extended : false}));
app.use (bodyParser.json());
app.use (cors({origin : true}));

//utilisation des routes 
app.use('/', router);
//lancement du serveur
const port =3001;

database()
	.then(async () => {
		console.log('Database server is connected');
		app.listen(port, () => {
			console.log(`Serveur lancé sur le port ${port}...`)
	});
	
});



export default app;