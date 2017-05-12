$(document).ready(function(){
 var $servicelist=$('#servicelist');
 var $queueList=$("#queueList");
 var $submit =$("#submitButton");
 var $type=$('.mybutton');
 var jQtype;
 $.ajax({
 	type:'GET',
 	url:'https://jdivyom.github.io/FirmStepDeveloperTest/services.json',
 	success:function(servicesData){
 		$.each(servicesData,function(i,serviceData){
 			$servicelist.append('<input type='+"radio" + ' name='+"radioService" + ' value='+ serviceData.serviceName +'>'+ serviceData.serviceName+'<br>');
 		});

     }
  });// end of Ajax for Services

$type.click(function(){
	if ($type.val()=""
	{

	}

 });


 $submit.on('click',function(){




 });




*/

// showing the data of queue.
$.ajax({
	type:'GET',
	url:'https://jdivyom.github.io/FirmStepDeveloperTest/queue.json',
	success:function(queueData){
          $.each(queueData,function(i,queueRecord){
             $queueList.append('<tr>'+'<td>' + queueRecord.id+ '</td>' + '<td>' + queueRecord.type+ '</td>' +'<td>' + queueRecord.name+ '</td>'+'<td>' + queueRecord.service+ '</td>'+'<td>' + queueRecord.time_stamp+ '</td>' +'</tr>');

          });
	}
})
});//end of document.ready()


