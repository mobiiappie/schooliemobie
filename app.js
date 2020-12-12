const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const app = express();

const users = require('./routes/users');

// Port Number
const port = 8080;
//const port=process.env.PORT || 8080;
var proxy = require('http-proxy-middleware');
 





// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

  var cookie= proxy({
    target: 'http://localhost:9906/cookie',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var jsonPlaceholderProxy = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var signup= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var say = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var newBackGroundImage = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var sendFriendShipInvitation= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var sendFriendShipInvitationNotification= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var fetchfriend= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var chatroom= proxy({
    target: 'http://localhost:9997/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var sendViewPage= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var getViewPage= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var getFriendShipPage= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});


var getviewpageFriendShip= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var AcceptFriendShip= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

  var AcceptedNotification= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
  var SendPost= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
  var getPost= proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var getallPostsfromthisuserprofile = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var getallcollectionshomeaccount = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var getanswer = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var homeaccountgetallPost = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var getallPost = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var getHasliked = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var login = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var RegisterTeacher = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var RegisterSchool = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var NewQuestion = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});


var SendComment = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var LikePost = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var UnLikePost = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

var getLikes = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var getcollectionandcomments = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});
var getPosts = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

 var  markcollectioncorrect = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

 var  gettypeofquestion = proxy({
    target: 'http://localhost:9906/',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
});

app.use('/markcollectioncorrect',  markcollectioncorrect);
app.use('/getcollectionandcomments/:name/:name2', getcollectionandcomments);
app.use('/getPosts/:name', getPosts);
app.use('/cookie', cookie);
app.use('/gettypeofquestion', gettypeofquestion);

app.use('/allGroups', jsonPlaceholderProxy);

app.use('/signup',signup );
app.use('/login',login );

app.use('/say/:name', say);

 
 app.use('/newBackGroundImage', newBackGroundImage);

  app.use('/sendFriendShipInvitation', sendFriendShipInvitation);
  app.use('/fetchfriend/:name', fetchfriend);

  app.use('/sendFriendShipInvitationNotification',sendFriendShipInvitationNotification);

 
  
 app.use('/room/chat', chatroom);

  
 
  app.use('/sendViewPage', sendViewPage);
  
  app.use('/getviewpage/:name/:name2', getViewPage);
 
  app.use('/getfriendshipage/:name', getFriendShipPage);
  
  
  app.use('/getviewpageonefriend/:name/:name2', getviewpageFriendShip);
   
  app.use('/sendAcceptFriendShip', AcceptFriendShip);
    app.use('/sendFriendShipAcceptedNotification', AcceptedNotification);
      app.use('/sendpost', SendPost);
       app.use('/allpostfromthisuserfriendspost/:name', getPost);
  
     app.use('/getallPostsfromthisuserprofile/:name', getallPostsfromthisuserprofile);
      app.use('/getallPostshomeaccount/:name',  getallPost);
     app.use('/homeaccount/:name',  homeaccountgetallPost);
  

  app.use('/getallcollectionshomeaccount/:name',  getallcollectionshomeaccount);

app.use('/RegisterSchool', RegisterSchool);
app.use('/NewQuestion', NewQuestion);
app.use('/SendComment', SendComment);
app.use('/LikePost', LikePost);
app.use('/UnLikePost', UnLikePost);
app.use('/getHasliked', getHasliked);
app.use('/getLikes', getLikes);

app.use('/getanswer/:name/:name2', getanswer);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*',(req,res)=>{
 res.sendFile(path.join(__dirname,'public/index.html'));
})

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
