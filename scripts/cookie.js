var theScore = 0;

document.cookie = 'score='+theScore+'; expires=Sun, 3 Mar 2019 12:00:00 UTC; path=/';
//document.cookie = 'prenom2=Julie; expires=Mon, 25 Feb 2019 12:00:00 UTC; path=/';

var c = document.cookie;

document.getElementById('cook').innerHTML = c;