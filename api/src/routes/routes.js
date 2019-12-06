import {Router} from 'express';
import UserController from '../controllers/users.controller';
import CommentController from '../controllers/comments.controller';
import AnnonceController from '../controllers/annonces.controller';
import TypeController from '../controllers/types.controller';

const router = Router();

router.get('/hello', function(req,res){
	console.log('Hello');
});

	//ANNONCE
//oui
router.get('/annonces', AnnonceController.list);
//oui
router.post('/annonces', AnnonceController.create);
//oui
router.get('/annonces/:id', AnnonceController.details);
//oui
router.delete('/annonces/:id', AnnonceController.delete);
//oui
router.put('/annonces/:id', AnnonceController.update);

	//USER

//oui
router.get('/users', UserController.list);
//oui
router.get('/users/:id', UserController.detailstype);
//oui
router.post('/inscription', UserController.create);
//oui
router.put('/users/:id', UserController.update);
//oui
router.delete('/users/:id', UserController.delete);



	//TYPE
//oui
router.post('/types', TypeController.create);
//oui
router.get('/types', TypeController.list);


//COMMENTS
//oui
router.get('/comments', CommentController.list);
//oui
router.post('/comments', CommentController.create);
//oui
router.delete('/comments/:id', CommentController.delete);
//oui
router.put('/comments/:id', CommentController.update);
//oui
router.get('/comments/:id', CommentController.details);

export default router;