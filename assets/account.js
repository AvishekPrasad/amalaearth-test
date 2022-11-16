
 $(function() {
        $(".popup-trigger").on('click', function(e) {
          e.preventDefault();
          var target = $(this).attr('traget');
            $(target).addClass("show-pop-up");
            return false;
        });
   
   $('.btn-ok').on('click', function(){
     $('#successful-message').removeClass('show-pop-up');
   })
   
   $('#logout').on('click', function(){
   		window.location.href = '/account/logout/';
   })
        $(".popup-close").on('click', function(e) {
          e.preventDefault();
            $("body").removeClass("modal-open");
            $(this).closest(".pop-up-modal").removeClass("show-pop-up");
          return false;
        });
   
   $('.btn-reorder').on('click', function(e){
   

      update_cart();


   
   })
   
   
   
     function update_cart() {
  var xhr = new XMLHttpRequest();
   var xhr1 = new XMLHttpRequest();
  var items = [];
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4){
        document.querySelectorAll('.reorder-item').forEach(function(node) {
        		
                xhr1.open('POST', '/cart/add.js');
        		xhr1.setRequestHeader('Content-Type', 'application/json');
        		
        		data =
					  {quantity: node.getAttribute('data-qty'), id: node.getAttribute('data-id')};
                items.push(data);


		});
        xhr1.send(JSON.stringify({'items':items}));
      }
  };
  xhr1.onreadystatechange = function() {
      if (xhr1.readyState === 4){
        window.location.href = '/checkout/';
      }
  };
  xhr.open('POST', '/cart/clear.js');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
  }
   
    });