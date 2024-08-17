Public website for Lolita Godefroy - generates https://www.godefroy-psychologue-muret.fr
=======

Psychologue clinicienne et énergéticienne à  Muret - Toulouse - France

The website is rendered using Github pages and built using [Jekyll](https://jekyllrb.com/).


To run this locally :

* [Fork this](https://github.com/Lolita5/lolita-godefroy-psychologue.github.io) repo and clone to your file system
* [Install Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)
* Run `bundle install`if you are running it for the first time in the cloned repo folder
* Launch the ap by running :
    * If you want the simple mode : `bundle exec jekyll serve`
    * It you want the livereload : `bundle exec jekyll serve --livereload`
    * It you want the livereload + test it on a device connected to the same network : `bundle exec jekyll serve --host=your_local_ip_address --livereload`.

* You will access the site at http://localhost:4000 or http://your_local_ip_address:4000 depending on the chosen option to run the app.

* Tutorial used to add custom font: https://www.pagecloud.com/blog/how-to-add-custom-fonts-to-any-website

* Quand on change de nom de domaine, il faut aller sur OVH, la section DNS zone, de l'url à associer au site est ajouter un CNAME avec comme domaine "www.url-complete.fr" (exemple godefroy-psychologue-muret.fr) et comme Target le lien de la page github ici "lolita-godefroy-psychologue.io". Egalement faire les redirection depuis le même onglet (ajouter un TXT un avec www et l'autre sans avec comme valeur de la target "4|https://lesite-cible" => "4|https://www.godefroy-psychologue-muret.fr")
