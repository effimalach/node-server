const http = require('http');
const fs = require('fs');

const path = "./err404.html";


const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('<div style="background-color:green">' +
                '<a href="/about" style="margin-right: 100px"><button>about</button>'+
                '<a href="/contact"><button>contact</button>'+
                '</div>' +
                '<h1>Home page</h1>')
    }else if(req.url==='/about'){
        res.end('<div style="background-color:green">' +
                '<a href="/" style="margin-right: 100px"><button>homepage</button>'+
                '<a href="/contact"><button>contact</button>'+
                '</div>'+
                '<h1>about</h1>');
    }else  if(req.url==='/contact'){
        res.end('<div style="background-color:green">' +
                '<a href="/about" style="margin-right: 100px"><button>about</button>'+
                '<a href="/"><button>homepage</button>'+
                '</div>' +
                '<h1>contacts</h1>');
    }else{
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });

         try {
           const content = fs.readFileSync(path, "utf8");
           res.write(content);
           res.end();
         } catch (err) {
           console.error(err);
         }

         
        /*
         fs.readFile('err404.html', function(err, content){
            res.write(content);
            res.end();
        }); */ 

    }
}).listen(8080,()=>console.log('listenning to 8080'));

//server.listen(8080,()=>console.log('listenning to 8080'));


