var read = require('./readability.js');

read('http://howtonode.org/really-simple-file-uploads', function(err, article, meta) {
  console.log(article.textBody);
  article.close();
});
