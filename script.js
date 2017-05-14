$(document).ready(function(){
 var $servicelist=$('#servicelist');
 var $queueList=$("#queueList");
 var $submit =$("#submitButton");
 var $type=$('.mybutton');
 var $li =$('.tabPannels .tabHeadings li');
 var $title=$('#title');
 var $fname=$('#fname');
 var $lname=$('#lname');
 var $oname=$('#oname');
 var tabClicked='Citizen';
 var v_id;
 var v_timp_stamp;
 var serviceSelected;
 $.ajax({
 	type:'GET',
 	url:'https://jdivyom.github.io/FirmStepDeveloperTest/services.json',
 	success:function(servicesData){
 		$.each(servicesData,function(i,serviceData){
 			$servicelist.append('<input type='+"radio" + ' name='+"radioService" + ' value='+ serviceData.serviceName +  ' checked' + '>'+ serviceData.serviceName+ '<br>');
 		});
		//var selected = $("#radioDiv input[type='radio']:checked")

     },
    error: function(){
    	alert('services connection loading error')
    }
  }); // end of Ajax for Services

  $li.on('click',function () {
			  			var tabPanneSelection = $(this).closest('.tabPannels');
			  			tabClicked = $(this).attr('data-tabid');
					    tabPanneSelection.find('.tab.active').slideUp(10,showNextSlide);
					    function showNextSlide(){
						tabPanneSelection.find('.tab.active').removeClass('active');
						$('#'+tabClicked).slideDown(10,function () {
								$(this).addClass('active');
 							});
						};
						return tabClicked;
				}) // To find which type is been clicked

 $submit.on('click',function(){
     //alert(tabClicked);
     //alert(typeof(tabClicked));
     	var today = new Date();
   		var cHour = today.getHours();
    	var cMin = today.getMinutes();
    	var cSec = today.getSeconds();
    	var v_timp_stamp= cHour+ ":" + cMin;
    	var serviceSelected=$('input[type="radio"]:checked').val();
 		if (tabClicked==='Citizen')
 			namestring=$title.val()+' ' + $fname.val()+' '+$lname.val();
 		if (tabClicked==='Organisition')
 			namestring=$oname.val();
 		if (tabClicked==='Annonymous')
 			namestring='';
 	     var newQueue ={
 			id: parseInt(v_id)+1,
 			typeOfClient :tabClicked,
 			service : serviceSelected,
 			name : namestring,
 			time_stamp :v_timp_stamp
 		};
 		//alert(queue.id+queue.typeOfClient+queue.service+queue.name+queue.time_stamp);
 		//alert(parseInt(v_id)+1+tabClicked+serviceSelected+namestring+v_timp_stamp);
    	$.ajax({
			type:'POST',
			url:'https://jdivyom.github.io/FirmStepDeveloperTest/queue.json/',
			data: queue,
			//Type: PlainObject,
			dataType:json,
			success:function(newQueue){
				$queueList.append('<tr>'+'<td>' + newQueue.id+ ',</td>' + '<td>' + newQueue.typeOfClient+ ',</td>' +'<td>' + newQueue.name+ ',</td>'+'<td>' + newQueue.service+ ',</td>'+'<td>' + newQueue.time_stamp+ ',</td>' +'</tr>');
				 // alert('hello');
				  // $queueList.append( newQueue.id,newQueue.typeOfClient,newQueue.name,newQueue.service,newQueue.time_stamp);
			},

			error:function(){
				alert('error saving new queueRecord')
			}


 		});

 });//end of submit click();

// showing the data of queue.
$.ajax({
	type:'GET',
	url:'https://jdivyom.github.io/FirmStepDeveloperTest/queue.json',
	success:function(queueData){
          $.each(queueData,function(i,queueRecord){
             $queueList.append('<tr>'+'<td>' + queueRecord.id+ '</td>' + '<td>' + queueRecord.typeOfType+ '</td>' +'<td>' + queueRecord.name+ '</td>'+'<td>' + queueRecord.service+ '</td>'+'<td>' + queueRecord.time_stamp+ '</td>' +'</tr>');
                v_id = queueRecord.id;
          		return v_id
          });

	},
	error:function(){
		alert('Coonection Error to get the QueueList')
	}


	});

});//end of document.ready()


