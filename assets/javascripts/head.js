(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-114468-20', 'auto');
ga('send', 'pageview');

if (type === 'page') {
  var disqus_shortname = 'paulkinlan'; // required: replace example with your forum shortname
      /* * * DON'T EDIT BELOW THIS LINE * * */
  window.addEventListener("load", function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  }); 
}

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function(registration) { },
        function(e) { console.log("Service Worker Failure", e); });
}

window.addEventListener("load", function() {
  var iframes = document.getElementsByTagName("iframe");
  for(var i = 0; i < iframes.length; i++) {
    var ifr = iframes[i];
    if(ifr.hasAttribute("data-src")) {
      var src = ifr.getAttribute("data-src");
      ifr.setAttribute("src", src);
    }
  }

  var shareButtons = document.querySelectorAll('div.share');

  for(var shareButton of shareButtons) {
    shareButton.addEventListener("click", function(event) {
      event.preventDefault();
      var shareUrl = event.target.getAttribute('url') || '';
      var shareTitle = event.target.getAttribute('title') || '';
      if (navigator.share) {
      navigator.share({
          url: shareUrl,
          title: shareTitle,
          text: shareTitle
      }).then(function() { ga('send', 'event', 'share', 'success'); },
              function(error) { ga('send', 'event', 'share', 'error', error); } );
      } else {
        var windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=520,height=420';
        var twitterUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareTitle) + '&url=' + encodeURIComponent(shareUrl) + '&via=Paul_Kinlan';
        window.open(twitterUrl, 'intent', windowOptions);
      }
    });
  }
});

window.onbeforeinstallprompt = function(e) {
  e.preventDefault();
  ga('send', 'event', 'install', 'prompt');
};