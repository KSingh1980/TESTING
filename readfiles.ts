
export module LocalFiles
{
 
  export class Reader
  {
      constructor()
    {
    }


 getFiles(dir, fileList){
     var fs = require('fs');
    'use strict';

    fileList = fileList || [];
 
    var files = fs.readdirSync(dir);
    for(var i in files){
        if (!files.hasOwnProperty(i)) continue;
        var name = dir+'/'+files[i];
        if (fs.statSync(name).isDirectory()){
            this.getFiles(name, fileList);
        } else {
            console.log("FileName:+++>"+name);
            fileList.push(name);
        }
    }
    return fileList;
}
        _getAllFilesFromFolder(dir:string):any
        {
            var filesystem = require("fs");
            var results = [];

            filesystem.readdirSync(dir).forEach(function(file)
                    {
                        file = dir+'/'+file;
                        var stat = filesystem.statSync(file);
                    // console.log("file===>"+file);

                                    if (stat && stat.isDirectory())
                                    {
                                        var dirName = file;
                                        console.log("Dir Name==>"+dirName);
                                        results = results.concat(this._getAllFilesFromFolder(file))
                                    } 
                                    else results.push(file);

                    }
            );
            return results;
        }
        _uploadFiles(dir):any
        {
            var filesystem = require("fs");
            var results = [];
            filesystem.readdirSync(dir).forEach(
                    function(file)
                    {
                        file = dir+'/'+file;
                        var stat = filesystem.statSync(file);
                    // console.log("file===>"+file);
                        if (stat && stat.isDirectory()) {
                            var dirName = file;
                            console.log("Dir Name==>"+dirName);
                            results = results.concat(this._getAllFilesFromFolder(file))
                        } else results.push(file);
                    }
            );
            return results;
        }
        _downloadFiles(dir):any
        {
            var filesystem = require("fs");
            var results = [];
            filesystem.readdirSync(dir).forEach(
                        function(file)
                        {
                            file = dir+'/'+file;
                            var stat = filesystem.statSync(file);
                        // console.log("file===>"+file);
                            if (stat && stat.isDirectory()) {
                                var dirName = file;
                                console.log("Dir Name==>"+dirName);
                                results = results.concat(this._getAllFilesFromFolder(file))
                            } else results.push(file);
                        }
                );
            return results;
        }
    }
}
var myobject = new LocalFiles.Reader();
//var result = myobject._getAllFilesFromFolder("C:\\Temp");
var fileList :any
var myList = myobject.getFiles("C:\\Temp",fileList);
//console.log("myList==>"+myList);
//console.log("result==>"+result);
