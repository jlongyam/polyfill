// multiple
(function(urls,path_to){
  var d = document, l = urls.length;
  path_to = path_to || '';
  urls.forEach(function(url,i){
    d.write('<script src="'+path_to+url+'.js"><\/script>');
    if(i === l-1) d.head.removeChild(d.scripts[0]);
  });
})([ARRAY],'PATH/');
// single
//document.write('<script src="FILE.js"><\/script>');
