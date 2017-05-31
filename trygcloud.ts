
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import '@google-cloud/storage';
//import  '@google-cloud';
import {ResCloudUpload } from "./gccloudprocessor";


/*
//initializeApp(firebaseConfig);

 // The google cloud nodejs SDK
const gcs = gcloud.storage({
    projectId: "gs://rescloud-7f5a9.appspot.com",
    keyFilename: "serviceaccount.json"
});
const bucket = gcs.bucket(`rescloud-7f5a9.appspot.com`);




var backups = gcs.bucket('phillychutney');
backups.upload('Error.jpg', function(err, file) {
 if(!err){

     console.log("Success"+err);
 }
 else{

    console.log("Failure"+err);     
 }
});

*/
/*
var storage = require('@google-cloud/storage');

var fs = require('fs');
 
// Authenticating on a per-API-basis. You don't need to do this if you auth on a 
// global basis (see Authentication section above). 
 
var gcs = storage({
  projectId: 'rescloud-7f5a9',
  keyFilename: './serviceaccount.json'
});
 

 
// Reference an existing bucket. 
var bucket = gcs.bucket('gs://rescloud-7f5a9');
 
// Upload a local file to a new file to be created in your bucket. 
bucket.upload('./Error.jpg', function(err, file) {
  if (!err) {
    console.log("Success"+err);
  }
  else{

       console.log("Failure"+err);
  }
});

// Imports the Google Cloud client library
const Storage = require('@google-cloud/storage');

// Your Google Cloud Platform project ID
const projectId= '849040869273';
const serviceAccountFile = './rescloud-21e00b443306.json';

// Instantiates a client
const storage = Storage({
  projectId: projectId,
  serviceaccount:serviceAccountFile
  
});

// The name for the new bucket
const bucketName = 'philly';

// Creates the new bucket
storage.createBucket(bucketName)
  .then(() => {
    console.log(`Bucket ${bucketName} created.`);
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
 */
// Set the configuration for your app
  // TODO: Replace with your project's config object

/*
import {firebaseConfig} from './firebase.config'
import {database, initializeApp,storage} from "firebase";
import * as firebase from 'firebase';
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storageRef = firebase.storage().ref();
  ;
 // File or Blob named mountains.jpg
var file = './Error.jpg';

// Create the file metadata
var metadata = {
  contentType: 'image/jpeg'
};

// Upload file and metadata to the object 'images/mountains.jpg'
var uploadTask = storageRef.child('images/' + "Error.jpg").put(file, metadata);

 

var admin = require("firebase-admin");

var serviceAccount = require("./rescloud-7f5a9-firebase-adminsdk-abv93-6db9c58c4b.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rescloud-7f5a9.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("/");
console.log('DB ref: ' + ref); //just to debug, if undefined, there's a problem.
*/

 var mycloud = new  ResCloudUpload.FileUpload("rescloud-7f5a9","./rescloud-7f5a9-firebase-adminsdk-abv93-6db9c58c4b.json");



//add new bucket 

var mybucket = mycloud.createBucket("rescloud-7f5a9","philly");

//add new file to the cloud
var strRootBucketName = "rescloud-7f5a9";
var restaurantDomainName = "PhillyChutney.Com";
var strCategoryName = "Apptizer";
var strAssetFolderName = "Images";
var strAssetFileName="BestIdliDosaInPhilly.jpg";
var result = mycloud.createNewFileInBucket(restaurantDomainName,strRootBucketName,strAssetFolderName,strCategoryName,strAssetFileName,"./images/Error.jpg");
console.log("File  uploaded ==>"+result);


/*
var gcloud = require('google-cloud');
var gcs = gcloud.storage({
  projectId: 'rescloud-7f5a9',
  keyFilename: './rescloud-7f5a9-firebase-adminsdk-abv93-6db9c58c4b.json'
});


var bucket = gcs.bucket('rescloud-7f5a9');
var remoteFile = bucket.file('Error.jpg');
var localFilename = './Error.jpg';
bucket.upload(localFilename, function(err, file) {
  if (!err) {
    console.log('somefile-inThisCaseASong.mp3 is now in your bucket.');
  } else {
    console.log('Error uploading file: ' + err);
  }
});


var fs = require('fs');
'use strict';
function getFiles(dir, fileList){
    fileList = fileList || [];
 
    var files = fs.readdirSync(dir);
    for(var i in files){
        if (!files.hasOwnProperty(i)) continue;
        var name = dir+'/'+files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, fileList);
        } else {
            fileList.push(name);
        }
    }
    return fileList;
}
*/

