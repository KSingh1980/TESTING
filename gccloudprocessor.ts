
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import  '@google-cloud/storage';
//import  from '@google-cloud';

export module ResCloudUpload 
{
export class FileUpload
{
  
gcs:any;

//var keyFileName;


 
constructor( projectId:string,keyFileName:string )
{
    var gcloud = require("google-cloud");
       this.gcs = gcloud.storage(
                                        {
                                            projectId: projectId,
                                            keyFilename: keyFileName
                                        }
                                );
}
    createBucket(rootBucket :string ,newBucketName:string):any
            {
                        var bucket = this.gcs.bucket(rootBucket);
                    // this.gcs.b
                     var newBucket = this.gcs.createBucket(newBucketName);
                        return newBucket;
            }

    createNewFileInBucket(strResturantDomainName :string,strBucketName :string ,strRootAssetFolderName:string,strCategoryName:string  ,strFileNameInCloud:string,strLocalFileNameWithPath:string,strFolderPathInCloud?:string,strLocalFileName?:string)
        {
                var bucket = this.gcs.bucket(strBucketName);
                var remoteFile = bucket.file(strFileNameInCloud);
        /*
                bucket.upload(localFileNameWithPath, { destination: newFileNameInCloud }, (err, file) => {
                            console.log('somefile-error.jpg is now in your bucket.');
                });
                */
                bucket.upload(strLocalFileNameWithPath, { destination: strResturantDomainName+'/'+strRootAssetFolderName+'/'+strCategoryName+'/'+strFileNameInCloud }, function(err, file) 
                                {
                                    if (!err)
                                    {
                                        console.log('File %s is now in your bucket.',strFileNameInCloud);
                                    }
                                    else
                                    {
                                        console.log('Error uploading file: ' + err);
                                    }
                                }
                            );
                        
                return strLocalFileNameWithPath;
        }


   

}
}

