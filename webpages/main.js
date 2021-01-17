// ws://54.147.26.233:9090
//inicia grafico

 
  ws_address= null;   

	auxfreq=0,freq=100,yVal = 0, updateCount = 0,dps = [], message= null;

	chart = new CanvasJS.Chart("chartContainer", {
			title : {
				text : "Dynamic Data"
			},
			axisX: {
                    title: "Time",
                    
                },

                axisY: {
                    title:"rad por seg",
                },




  data : [{
					type : "spline",
					dataPoints : dps
				}]
		});
  
  
  
  function atualizardadosbools(item, index) {

 switch (item.name){
 case 'Ch56_Link_Current':
  document.getElementById("Ch56_Link_Current").checked=item.value;
 break; 	
 case 'Ch12_Enable':
  document.getElementById("Ch12_Enable").checked=item.value;
  if(item.value==false){
  document.getElementById("tab1lab").style.display="none"
  }
 break; 	
 
case 'Ch12_Link_Current':
 document.getElementById("Ch12_Link_Current").checked=item.value;
 break; 	 
 
 case 'Ch78_Link_Current':
 document.getElementById("Ch78_Link_Current").checked=item.value;
 break;
  
 case 'Ch34_Link_Angle':
 document.getElementById("Ch34_Link_Angle").checked=item.value;
 break;
 
  case 'Ch34_Link_Angle':
 document.getElementById("Ch34_Link_Angle").checked=item.value;
 break;
 
  case 'Ch56_Enable':
 document.getElementById("Ch56_Enable").checked=item.value;
 if(item.value==false){
  document.getElementById("tab3lab").style.display="none"
  } 
 break;
 
 case 'Ch56_Link_Angle':
 document.getElementById("Ch56_Link_Angle").checked=item.value;
 break;
 
 case 'AutoC_Enable':
 document.getElementById("AutoC_Enable").checked=item.value;
 break;
 
 case 'Ch78_Link_Angle':
 document.getElementById("Ch78_Link_Angle").checked=item.value;
 break;
 
 
 case 'Ch34_Enable':
 document.getElementById("Ch34_Enable").checked=item.value;
  if(item.value==false){
  document.getElementById("tab2lab").style.display="none"
  }
 break;
 
 
 case 'Ch78_Enable':
 document.getElementById("Ch78_Enable").checked=item.value;
 if(item.value==false){
  document.getElementById("tab4lab").style.display="none"
  }
 break;
 
 case 'Mark_assistance':
 document.getElementById("Mark_assistance").checked=item.value;
 break;
 
 case 'Ch34_Link_Current':
 document.getElementById("Ch34_Link_Current").checked=item.value;
 break;
 
 
 case 'Ch12_Link_Angle':
 document.getElementById("Ch12_Link_Angle").checked=item.value;
 break;
 }

  }
  
  
  
  
  
  function atualizardadosints(item, index) {

 switch (item.name) {
  case 'Ch1_Pulse_Width':
    document.getElementById("myRangech1pw").value=item.value;
    document.getElementById("democh1pw").innerHTML=item.value;
       
    break;
  case 'Ch6_Angle_Max':
     document.getElementById("myRangech6maxang").value=item.value;
   document.getElementById("democh6maxang").innerHTML=item.value;
    break;
   case 'Ch7_Angle_Min':
    document.getElementById("myRangech7minang").value=item.value;
 		document.getElementById("democh7minang").innerHTML=item.value;
    break;
 
  case 'AutoC_Velocity':
  document.getElementById("autocontrolvelocity").value=item.value;
     document.getElementById("valautocontrolvelocity").innerHTML=item.value;
    break;
 case 'Ch3_Angle_Max':
    document.getElementById("myRangech3maxang").value=item.value;
   document.getElementById("democh3maxang").innerHTML=item.value;
    break;
  case 'Ch2_Angle_Max':
   document.getElementById("myRangech2maxang").value=item.value;
   document.getElementById("democh2maxang").innerHTML=item.value;
   
    break;
  case 'Ch3_Angle_Min':
    document.getElementById("myRangech3minang").value=item.value;
 		document.getElementById("democh3minang").innerHTML=item.value;
    break;
  case 'Ch4_Pulse_Width':
    document.getElementById("myRangech4pw").value=item.value;
	document.getElementById("democh4pw").innerHTML=item.value; 
  
    break;
  case 'Ch4_Angle_Min':
     document.getElementById("myRangech4minang").value=item.value;
 		document.getElementById("democh4minang").innerHTML=item.value;
    break;
  
   case 'AutoC_Shift':
     document.getElementById("autocontrolshift").value=item.value;
     document.getElementById("valautocontrolshift").innerHTML=item.value;
    break;
   case 'Ch8_Current':
   	 document.getElementById("myRangech8curr").value=item.value;
		 document.getElementById("democh8curr").innerHTML=item.value;
    break;
  case 'Ch5_Current':
    document.getElementById("myRangech5curr").value=item.value;
		 document.getElementById("democh5curr").innerHTML=item.value;
    break;
  

  
   case 'Ch7_Current':
    	 document.getElementById("myRangech7curr").value=item.value;
		 document.getElementById("democh7curr").innerHTML=item.value;
    break;
  
  case 'Ch6_Pulse_Width':
   document.getElementById("myRangech6pw").value=item.value;
	document.getElementById("democh6pw").innerHTML=item.value; 
  
    break;
    
  case 'Ch3_Pulse_Width':
   document.getElementById("myRangech3pw").value=item.value;
	document.getElementById("democh3pw").innerHTML=item.value; 
  
    break;
    case 'Ch2_Pulse_Width':
    document.getElementById("myRangech2pw").value=item.value;
    document.getElementById("democh2pw").innerHTML=item.value;
 
   break;
    
    case 'Ch4_Current':
    document.getElementById("myRangech4curr").value=item.value;
		 document.getElementById("democh4curr").innerHTML=item.value;
    break;
    case 'Ch7_Angle_Max':
    document.getElementById("myRangech7maxang").value=item.value;
   document.getElementById("democh7maxang").innerHTML=item.value;
    break;
  case 'Ch5_Angle_Max':
     document.getElementById("myRangech5maxang").value=item.value;
   document.getElementById("democh5maxang").innerHTML=item.value;
    break;
 case 'Ch6_Current':
   document.getElementById("myRangech6curr").value=item.value;
		 document.getElementById("democh6curr").innerHTML=item.value;
    break;
 case 'Ch2_Current':
    document.getElementById("myRangech2curr").value=item.value;
	 document.getElementById("democh2curr").innerHTML=item.value;
	
    break;
case 'Ch8_Angle_Max':
     document.getElementById("myRangech8maxang").value=item.value;
    document.getElementById("democh8maxang").innerHTML=item.value;
    break;
case 'Shift':
    document.getElementById("shift").value=item.value;
	 document.getElementById("valshift").innerHTML=item.value;
    break;
case 'Ch5_Angle_Min':
   document.getElementById("myRangech5minang").value=item.value;
 		document.getElementById("democh5minang").innerHTML=item.value;
    break;

case 'Ch3_Current':
    document.getElementById("myRangech3curr").value=item.value;
		 document.getElementById("democh3curr").innerHTML=item.value;
    break;
    
case 'Ch1_Current':
		 document.getElementById("myRangech1curr").value=item.value;
		 document.getElementById("democh1curr").innerHTML=item.value;
		 
    break;
case 'Ch7_Pulse_Width':
    document.getElementById("myRangech7pw").value=item.value;
    document.getElementById("democh7pw").innerHTML=item.value;
    break;
case 'Ch1_Angle_Min':
  		document.getElementById("myRangech1minang").value=item.value;
 		document.getElementById("democh1minang").innerHTML=item.value;
		
    break;
case 'Ch8_Angle_Min':
   document.getElementById("myRangech8minang").value=item.value;
 		document.getElementById("democh8minang").innerHTML=item.value;
    break;
    
case 'Ch1_Angle_Max':
    document.getElementById("myRangech1maxang").value=item.value;
    document.getElementById("democh1maxang").innerHTML=item.value;
     
    break; 
case 'Ch5_Pulse_Width':
   document.getElementById("myRangech5pw").value=item.value;
	document.getElementById("democh5pw").innerHTML=item.value; 
  
    break; 
case 'Ch6_Angle_Min':
     document.getElementById("myRangech6minang").value=item.value;
 		document.getElementById("democh6minang").innerHTML=item.value;
    break; 
    
case 'Ch4_Angle_Max':
     document.getElementById("myRangech4maxang").value=item.value;
   document.getElementById("democh4maxang").innerHTML=item.value;
    break; 

case 'Ch1_Pulse_Width':
    
   document.getElementById("myRangech1pw").value=item.value;
	document.getElementById("democh1pw").innerHTML=item.value; 
  
    break;  
    
 case 'Ch2_Angle_Min':
   
   
  document.getElementById("myRangech2minang").value=item.value;
  document.getElementById("democh2minang").innerHTML=item.value;  
   
   
   
   break;  
     
 case 'Ch8_Pulse_Width':
    document.getElementById("myRangech8pw").value=item.value;
    document.getElementById("democh8pw").innerHTML=item.value;   
   break;   
}


   } 
  ang=0;
  function drawCircle() {
        
        
  
        
	var listener = new ROSLIB.Topic({
       	ros : ros,
     	 name : '/ema/control/angle',
      	messageType : 'std_msgs/Float64'
     	});


  	       
   listener.subscribe(function(message) {
       
        ang= message.data;
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var radius = canvas.width/3;
		  context.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById("Display-angle").innerText = ang;		  
		  ang=2*Math.PI*(ang/360);
		 
		  if(ang < (2*Math.PI)){
        context.beginPath();
        context.arc(centerX, centerY, radius, -(0.5)*Math.PI,(-(0.496)*Math.PI)+ang, false);
      
        context.lineWidth = 7;
        context.strokeStyle = 'green';
        context.stroke();
        
}
  		  if(ang  >= (2*Math.PI)){
  		  
  		  
  		  
        context.beginPath();
        context.arc(centerX, centerY, radius, -(0.5)*Math.PI,-(0.5) * Math.PI, false);
        
        context.lineWidth = 7;
        context.strokeStyle = 'green';
        context.stroke();
        
}; 

       listener.unsubscribe();
     });
  
      
		 
        };






 function graphVel(){
 	
 	 var listener = new ROSLIB.Topic({
       		 	ros : ros,
     	 			name : '/ema/control/speed',
      	messageType : 'std_msgs/Float64'
     	});
            
     
      listener.subscribe(function(message) {
      document.getElementById("Display-vel").innerText = 2*Math.PI*(message.data/360);
		auxfreq=auxfreq+freq;

		dps.push({x:(auxfreq/1000),y:2*Math.PI*(message.data/360)});
      	
     
		chart.render();    
     
       listener.unsubscribe();
      
      
     });
  

	 
};

function Alterbool(variavel) {

 switch (variavel.id){

 case 'Ch12_Enable':

  if(variavel.checked==false){
  document.getElementById("tab1lab").style.display="none"
  }else{
  document.getElementById("tab1lab").style.display="block"
  }
 break; 	


 
  case 'Ch56_Enable':

 if(variavel.checked==false){
  document.getElementById("tab3lab").style.display="none"
  }else{
  document.getElementById("tab3lab").style.display="block"
  } 
 break;

 
 
 case 'Ch34_Enable':

  if(variavel.checked==false){
  document.getElementById("tab2lab").style.display="none"
  }else{
  document.getElementById("tab2lab").style.display="block"
  }
 break;
 
 
 case 'Ch78_Enable':

 if(variavel.checked==false){
  document.getElementById("tab4lab").style.display="none"
  }else{
  document.getElementById("tab4lab").style.display="block"
  }
 break;
 
 }

 
 

 

    var dynaRecClient = new ROSLIB.Service({
        ros : ros,
       name : '/ema/server/set_parameters',
		serviceType : 'dynamic_reconfigure/Reconfigure'
    });

    var request = new ROSLIB.ServiceRequest({
        config: {
            bools: [
                {
        name:variavel.id,
        value:variavel.checked
      } 
            ],
            ints: [
                       
   
                  ],
            strs: [
            
            ],
            doubles: [
              
            ],
            groups: [
               
            ]
        }
    });

    dynaRecClient.callService(request, function(result) {
      
   

    });  

        };
 
 

function somaupdateitem(label,parametro,channel,valor){


			
	valor++;
	
	
    var dynaRecClient = new ROSLIB.Service({
        ros : ros,
       name : '/ema/server/set_parameters',
		serviceType : 'dynamic_reconfigure/Reconfigure'
    });

    var request = new ROSLIB.ServiceRequest({
        config: {
            bools: [
                {

      } 
            ],
            ints: [
                        
   
      {
        name: channel,
        value: valor 
      }
            ],
            strs: [
            
            ],
            doubles: [
              
            ],
            groups: [
               
            ]
        }
    });

    dynaRecClient.callService(request, function(result) {
      
      parametro.value=valor;
      label.innerHTML=valor;

    });  



}

function menosupdateitem(label,parametro,channel,valor){


			
	valor--;
	
	
    var dynaRecClient = new ROSLIB.Service({
        ros : ros,
       name : '/ema/server/set_parameters',
		serviceType : 'dynamic_reconfigure/Reconfigure'
    });

    var request = new ROSLIB.ServiceRequest({
        config: {
            bools: [
                {

      } 
            ],
            ints: [
                        
   
      {
        name: channel,
        value: valor 
      }
            ],
            strs: [
            
            ],
            doubles: [
              
            ],
            groups: [
               
            ]
        }
    });

    dynaRecClient.callService(request, function(result) {
      
      parametro.value=valor;
      label.innerHTML=valor;

    });  



}

function updatepreset(label,parametro,channel,acao) {
if(acao=='increase'){

	valor=parseInt(parametro.value)+1;
	
   var dynaRecClient = new ROSLIB.Service({
        ros : ros,
       name : '/ema/server/set_parameters',
		serviceType : 'dynamic_reconfigure/Reconfigure'
    });

    var request = new ROSLIB.ServiceRequest({
        config: {
            bools: [
                {

      } 
            ],
            ints: [
                        
   
      {
        name: channel,
        value: valor 
      }
            ],
            strs: [
            
            ],
            doubles: [
              
            ],
            groups: [
               
            ]
        }
    });

    dynaRecClient.callService(request, function(result) {
      
      parametro.value=valor;
      label.innerHTML=valor;

    });  
}

if(acao=='decrease'){

valor=parseInt(parametro.value)-1;

	
   var dynaRecClient = new ROSLIB.Service({
        ros : ros,
       name : '/ema/server/set_parameters',
		serviceType : 'dynamic_reconfigure/Reconfigure'
    });

    var request = new ROSLIB.ServiceRequest({
        config: {
            bools: [
                {

      } 
            ],
            ints: [
                        
   
      {
        name: channel,
        value: valor 
      }
            ],
            strs: [
            
            ],
            doubles: [
              
            ],
            groups: [
               
            ]
        }
    });

    dynaRecClient.callService(request, function(result) {
      
      parametro.value=valor;
      label.innerHTML=valor;

    });
}
}

	function Increase(label,parametro,channel) {


if(document.getElementById("Ch12_Link_Current").checked==true){
	
	switch (channel) {
	 case 'Ch1_Pulse_Width':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh2pw"),document.getElementById("myRangech2pw"),'Ch2_Pulse_Width',parseInt(parametro.value));
    break;
	 case 'Ch2_Pulse_Width':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh1pw"),document.getElementById("myRangech1pw"),'Ch1_Pulse_Width',parseInt(parametro.value));
   break;
    case 'Ch2_Current':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh1curr"),document.getElementById("myRangech1curr"),'Ch1_Current',parseInt(parametro.value));
    break;
    case 'Ch1_Current':
    
    
		    somaupdateitem(label,parametro,channel,parseInt(parametro.value));
		    somaupdateitem(document.getElementById("democh2curr"),document.getElementById("myRangech2curr"),'Ch2_Current',parseInt(parametro.value));
    break;
     
}


}
if(document.getElementById("Ch12_Link_Angle").checked==true){
	
	switch (channel) {
	 case 'Ch1_Angle_Min':
	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<360 
	 && parseInt(document.getElementById("myRangech2minang").value) >=0 
	 && parseInt(document.getElementById("myRangech2minang").value)<360){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh2minang"),document.getElementById("myRangech2minang"),'Ch2_Angle_Min',parseInt(document.getElementById("myRangech2minang").value));
   }    
    break;
	 case 'Ch1_Angle_Max':
	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<360 
	 && parseInt(document.getElementById("myRangech2maxang").value) >=0 
	 && parseInt(document.getElementById("myRangech2maxang").value)<360){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh2maxang"),document.getElementById("myRangech2maxang"),'Ch2_Angle_Max',parseInt(document.getElementById("myRangech2maxang").value));
   }
   break;
    case 'Ch2_Angle_Min':
    	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<360 
	 && parseInt(document.getElementById("myRangech1minang").value) >=0 
	 && parseInt(document.getElementById("myRangech1minang").value)<360){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh1minang"),document.getElementById("myRangech1minang"),'Ch1_Angle_Min',parseInt(document.getElementById("myRangech1minang").value));
 }
    break;
    case 'Ch2_Angle_Max':
    if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<360 
	 && parseInt(document.getElementById("myRangech1maxang").value) >=0 
	 && parseInt(document.getElementById("myRangech1maxang").value)<360){
	somaupdateitem(label,parametro,channel,parseInt(parametro.value));
  somaupdateitem(document.getElementById("democh1maxang"),document.getElementById("myRangech1maxang"),'Ch1_Angle_Max',parseInt(document.getElementById("myRangech1maxang").value));
 }
    break;
     

  }      };
  
  


    if(document.getElementById("Ch12_Link_Current").checked==false){
	
	switch (channel) {
	 case 'Ch1_Pulse_Width':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
	 case 'Ch2_Pulse_Width':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

   break;
    case 'Ch2_Current':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
    case 'Ch1_Current':
		    somaupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
     
}


}
if(document.getElementById("Ch12_Link_Angle").checked==false){
	
	switch (channel) {
	 case 'Ch1_Angle_Min':
	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<360 
	 ){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

   }    
    break;
	 case 'Ch1_Angle_Max':
	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<360 
	){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

   }
   break;
    case 'Ch2_Angle_Min':
    	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<360 
	 ){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

 }
    break;
    case 'Ch2_Angle_Max':
    if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<360 
	 ){
	somaupdateitem(label,parametro,channel,parseInt(parametro.value));

 }
    break;
     

  }      };
  
   /*                         
   
   ///////////////////////////////////////
   
   
   
                              */ 
  
if(document.getElementById("Ch34_Link_Current").checked==true){
	
	switch (channel) {
	 case 'Ch3_Pulse_Width':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh4pw"),document.getElementById("myRangech4pw"),'Ch4_Pulse_Width',parseInt(parametro.value));
    break;
	 case 'Ch4_Pulse_Width':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh3pw"),document.getElementById("myRangech3pw"),'Ch3_Pulse_Width',parseInt(parametro.value));
   break;
    case 'Ch4_Current':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh3curr"),document.getElementById("myRangech3curr"),'Ch3_Current',parseInt(parametro.value));
    break;
    case 'Ch3_Current':
    
    
		    somaupdateitem(label,parametro,channel,parseInt(parametro.value));
		    somaupdateitem(document.getElementById("democh4curr"),document.getElementById("myRangech4curr"),'Ch4_Current',parseInt(parametro.value));
    break;
     
}


}
if(document.getElementById("Ch34_Link_Angle").checked==true){
	
	switch (channel) {
	 case 'Ch3_Angle_Min':
	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<360 
	 && parseInt(document.getElementById("myRangech4minang").value) >=0 
	 && parseInt(document.getElementById("myRangech4minang").value)<360){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh4minang"),document.getElementById("myRangech4minang"),'Ch4_Angle_Min',parseInt(document.getElementById("myRangech4minang").value));
   }    
    break;
	 case 'Ch3_Angle_Max':
	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<360 
	 && parseInt(document.getElementById("myRangech4maxang").value) >=0 
	 && parseInt(document.getElementById("myRangech4maxang").value)<360){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh4maxang"),document.getElementById("myRangech4maxang"),'Ch4_Angle_Max',parseInt(document.getElementById("myRangech4maxang").value));
   }
   break;
    case 'Ch4_Angle_Min':
    	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<360 
	 && parseInt(document.getElementById("myRangech3minang").value) >=0 
	 && parseInt(document.getElementById("myRangech3minang").value)<360){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh3minang"),document.getElementById("myRangech3minang"),'Ch3_Angle_Min',parseInt(document.getElementById("myRangech3minang").value));
 }
    break;
    case 'Ch4_Angle_Max':
    if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<360 
	 && parseInt(document.getElementById("myRangech3maxang").value) >=0 
	 && parseInt(document.getElementById("myRangech3maxang").value)<360){
	somaupdateitem(label,parametro,channel,parseInt(parametro.value));
  somaupdateitem(document.getElementById("democh3maxang"),document.getElementById("myRangech3maxang"),'Ch3_Angle_Max',parseInt(document.getElementById("myRangech3maxang").value));
 }
    break;
     

  }      };
  
  


    if(document.getElementById("Ch34_Link_Current").checked==false){
	
	switch (channel) {
	 case 'Ch3_Pulse_Width':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
	 case 'Ch4_Pulse_Width':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

   break;
    case 'Ch4_Current':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
    case 'Ch3_Current':
		    somaupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
     
}


}
if(document.getElementById("Ch34_Link_Angle").checked==false){
	
	switch (channel) {
	 case 'Ch3_Angle_Min':
	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<360 
	 ){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

   }    
    break;
	 case 'Ch3_Angle_Max':
	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<360 
	){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

   }
   break;
    case 'Ch4_Angle_Min':
    	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<360 
	 ){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

 }
    break;
    case 'Ch4_Angle_Max':
    if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<360 
	 ){
	somaupdateitem(label,parametro,channel,parseInt(parametro.value));

 }
    break;
     

  }      };
  
   /*                         
   
   ///////////////////////////////////////
   
   
   
                              */ 
  
if(document.getElementById("Ch56_Link_Current").checked==true){
	
	switch (channel) {
	 case 'Ch5_Pulse_Width':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh6pw"),document.getElementById("myRangech6pw"),'Ch6_Pulse_Width',parseInt(parametro.value));
    break;
	 case 'Ch6_Pulse_Width':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh5pw"),document.getElementById("myRangech5pw"),'Ch5_Pulse_Width',parseInt(parametro.value));
   break;
    case 'Ch6_Current':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh5curr"),document.getElementById("myRangech5curr"),'Ch5_Current',parseInt(parametro.value));
    break;
    case 'Ch5_Current':
    
    
		    somaupdateitem(label,parametro,channel,parseInt(parametro.value));
		    somaupdateitem(document.getElementById("democh6curr"),document.getElementById("myRangech6curr"),'Ch6_Current',parseInt(parametro.value));
    break;
     
}


}
if(document.getElementById("Ch56_Link_Angle").checked==true){
	
	switch (channel) {
	 case 'Ch5_Angle_Min':
	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<560 
	 && parseInt(document.getElementById("myRangech6minang").value) >=0 
	 && parseInt(document.getElementById("myRangech6minang").value)<560){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh6minang"),document.getElementById("myRangech6minang"),'Ch6_Angle_Min',parseInt(document.getElementById("myRangech6minang").value));
   }    
    break;
	 case 'Ch5_Angle_Max':
	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<560 
	 && parseInt(document.getElementById("myRangech6maxang").value) >=0 
	 && parseInt(document.getElementById("myRangech6maxang").value)<560){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh6maxang"),document.getElementById("myRangech6maxang"),'Ch6_Angle_Max',parseInt(document.getElementById("myRangech6maxang").value));
   }
   break;
    case 'Ch6_Angle_Min':
    	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<560 
	 && parseInt(document.getElementById("myRangech5minang").value) >=0 
	 && parseInt(document.getElementById("myRangech5minang").value)<560){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh5minang"),document.getElementById("myRangech5minang"),'Ch5_Angle_Min',parseInt(document.getElementById("myRangech5minang").value));
 }
    break;
    case 'Ch6_Angle_Max':
    if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<560 
	 && parseInt(document.getElementById("myRangech5maxang").value) >=0 
	 && parseInt(document.getElementById("myRangech5maxang").value)<560){
	somaupdateitem(label,parametro,channel,parseInt(parametro.value));
  somaupdateitem(document.getElementById("democh5maxang"),document.getElementById("myRangech5maxang"),'Ch5_Angle_Max',parseInt(document.getElementById("myRangech5maxang").value));
 }
    break;
     

  }      };
  
  


    if(document.getElementById("Ch56_Link_Current").checked==false){
	
	switch (channel) {
	 case 'Ch5_Pulse_Width':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
	 case 'Ch6_Pulse_Width':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

   break;
    case 'Ch6_Current':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
    case 'Ch5_Current':
		    somaupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
     
}


}
if(document.getElementById("Ch56_Link_Angle").checked==false){
	
	switch (channel) {
	 case 'Ch5_Angle_Min':
	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<560 
	 ){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

   }    
    break;
	 case 'Ch5_Angle_Max':
	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<560 
	){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

   }
   break;
    case 'Ch6_Angle_Min':
    	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<560 
	 ){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

 }
    break;
    case 'Ch6_Angle_Max':
    if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<560 
	 ){
	somaupdateitem(label,parametro,channel,parseInt(parametro.value));

 }
    break;
     

  }      };
  
/*                         
   
   ///////////////////////////////////////
   
   
   
                              */ 
  
if(document.getElementById("Ch78_Link_Current").checked==true){
	
	switch (channel) {
	 case 'Ch7_Pulse_Width':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh8pw"),document.getElementById("myRangech8pw"),'Ch8_Pulse_Width',parseInt(parametro.value));
    break;
	 case 'Ch8_Pulse_Width':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh7pw"),document.getElementById("myRangech7pw"),'Ch7_Pulse_Width',parseInt(parametro.value));
   break;
    case 'Ch8_Current':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh7curr"),document.getElementById("myRangech7curr"),'Ch7_Current',parseInt(parametro.value));
    break;
    case 'Ch7_Current':
    
    
		    somaupdateitem(label,parametro,channel,parseInt(parametro.value));
		    somaupdateitem(document.getElementById("democh8curr"),document.getElementById("myRangech8curr"),'Ch8_Current',parseInt(parametro.value));
    break;
     
}


}
if(document.getElementById("Ch78_Link_Angle").checked==true){
	
	switch (channel) {
	 case 'Ch7_Angle_Min':
	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<760 
	 && parseInt(document.getElementById("myRangech8minang").value) >=0 
	 && parseInt(document.getElementById("myRangech8minang").value)<760){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh8minang"),document.getElementById("myRangech8minang"),'Ch8_Angle_Min',parseInt(document.getElementById("myRangech8minang").value));
   }    
    break;
	 case 'Ch7_Angle_Max':
	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<760 
	 && parseInt(document.getElementById("myRangech8maxang").value) >=0 
	 && parseInt(document.getElementById("myRangech8maxang").value)<760){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh8maxang"),document.getElementById("myRangech8maxang"),'Ch8_Angle_Max',parseInt(document.getElementById("myRangech8maxang").value));
   }
   break;
    case 'Ch8_Angle_Min':
    	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<760 
	 && parseInt(document.getElementById("myRangech7minang").value) >=0 
	 && parseInt(document.getElementById("myRangech7minang").value)<760){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));
   somaupdateitem(document.getElementById("democh7minang"),document.getElementById("myRangech7minang"),'Ch7_Angle_Min',parseInt(document.getElementById("myRangech7minang").value));
 }
    break;
    case 'Ch8_Angle_Max':
    if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<760 
	 && parseInt(document.getElementById("myRangech7maxang").value) >=0 
	 && parseInt(document.getElementById("myRangech7maxang").value)<760){
	somaupdateitem(label,parametro,channel,parseInt(parametro.value));
  somaupdateitem(document.getElementById("democh7maxang"),document.getElementById("myRangech7maxang"),'Ch7_Angle_Max',parseInt(document.getElementById("myRangech7maxang").value));
 }
    break;
     

  }      };
  
  


    if(document.getElementById("Ch78_Link_Current").checked==false){
	
	switch (channel) {
	 case 'Ch7_Pulse_Width':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
	 case 'Ch8_Pulse_Width':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

   break;
    case 'Ch8_Current':
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
    case 'Ch7_Current':
		    somaupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
     
}


}
if(document.getElementById("Ch78_Link_Angle").checked==false){
	
	switch (channel) {
	 case 'Ch7_Angle_Min':
	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<760 
	 ){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

   }    
    break;
	 case 'Ch7_Angle_Max':
	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<760 
	){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

   }
   break;
    case 'Ch8_Angle_Min':
    	 if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<760 
	 ){
   somaupdateitem(label,parametro,channel,parseInt(parametro.value));

 }
    break;
    case 'Ch8_Angle_Max':
    if(parseInt(parametro.value)>=0 
	 && parseInt(parametro.value)<760 
	 ){
	somaupdateitem(label,parametro,channel,parseInt(parametro.value));

 }
    break;
     

  }      };
     
                                
        };
 
 
 
 function Decrease(label,parametro,channel) {
if(document.getElementById("Ch12_Link_Current").checked==true){
	
	switch (channel) {
	 case 'Ch1_Pulse_Width':
	 if (parseInt(parametro.value)>0) {
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh2pw"),document.getElementById("myRangech2pw"),'Ch2_Pulse_Width',parseInt(parametro.value));
}else { 
   menosupdateitem(document.getElementById("democh2pw"),document.getElementById("myRangech2pw"),'Ch2_Pulse_Width',parseInt(parametro.value)+1);
}     
    break;
	 case 'Ch2_Pulse_Width':
	 if (parseInt(parametro.value)>0) {
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh1pw"),document.getElementById("myRangech1pw"),'Ch1_Pulse_Width',parseInt(parametro.value));
} else { 
   menosupdateitem(document.getElementById("democh1pw"),document.getElementById("myRangech1pw"),'Ch1_Pulse_Width',parseInt(parametro.value)+1);
} 
   break;
    case 'Ch2_Current':
    if (parseInt(parametro.value)>0) {
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh1curr"),document.getElementById("myRangech1curr"),'Ch1_Current',parseInt(parametro.value));
} else { 
   menosupdateitem(document.getElementById("democh1curr"),document.getElementById("myRangech1curr"),'Ch1_Current',parseInt(parametro.value)+1);
}    
    break;
    case 'Ch1_Current':
if (parseInt(parametro.value)>0) {		  
		    menosupdateitem(label,parametro,channel,parseInt(parametro.value));
		    menosupdateitem(document.getElementById("democh2curr"),document.getElementById("myRangech2curr"),'Ch2_Current',parseInt(parametro.value));
} else { 
		    menosupdateitem(document.getElementById("democh2curr"),document.getElementById("myRangech2curr"),'Ch2_Current',parseInt(parametro.value)+1);
}    
    break;
     
}
    
}
if(document.getElementById("Ch12_Link_Angle").checked==true){
	
	switch (channel) {
	 case 'Ch1_Angle_Min':
	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=360 
	 && parseInt(document.getElementById("myRangech2minang").value) >0 
	 && parseInt(document.getElementById("myRangech2minang").value)<=360){
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh2minang"),document.getElementById("myRangech2minang"),'Ch2_Angle_Min',parseInt(document.getElementById("myRangech2minang").value));
   }    
    break;
	 case 'Ch1_Angle_Max':
	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=360 
	 && parseInt(document.getElementById("myRangech2maxang").value) >0 
	 && parseInt(document.getElementById("myRangech2maxang").value)<=360){
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh2maxang"),document.getElementById("myRangech2maxang"),'Ch2_Angle_Max',parseInt(document.getElementById("myRangech2maxang").value));
   }
   break;
    case 'Ch2_Angle_Min':
    	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=360 
	 && parseInt(document.getElementById("myRangech1minang").value) >0 
	 && parseInt(document.getElementById("myRangech1minang").value)<=360){
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh1minang"),document.getElementById("myRangech1minang"),'Ch1_Angle_Min',parseInt(document.getElementById("myRangech1minang").value));
 }
    break;
    case 'Ch2_Angle_Max':
    if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=360 
	 && parseInt(document.getElementById("myRangech1maxang").value) >0 
	 && parseInt(document.getElementById("myRangech1maxang").value)<=360){
	menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh1maxang"),document.getElementById("myRangech1maxang"),'Ch1_Angle_Max',parseInt(document.getElementById("myRangech1maxang").value));
 }
    break;
     
}
  }     
  
  if(document.getElementById("Ch12_Link_Current").checked==false){
	
	switch (channel) {
	 case 'Ch1_Pulse_Width':
	 if(parseInt(parametro.value)>0 )
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
	 case 'Ch2_Pulse_Width':
	 if(parseInt(parametro.value)>0 )
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

   break;
    case 'Ch2_Current':
    if(parseInt(parametro.value)>0 )
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
    case 'Ch1_Current':
    if(parseInt(parametro.value)>0 )
		     menosupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
     
}


}
if(document.getElementById("Ch12_Link_Angle").checked==false){
	
	switch (channel) {
	 case 'Ch1_Angle_Min':
	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=360 
	 ){
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

   }    
    break;
	 case 'Ch1_Angle_Max':
	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=360 
	){
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

   }
   break;
    case 'Ch2_Angle_Min':
    	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=360 
	 ){
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

 }
    break;
    case 'Ch2_Angle_Max':
    if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=360 
	 ){
	 menosupdateitem(label,parametro,channel,parseInt(parametro.value));

 }
    break;
     

  }      };
  
  
     /*                         
   
   ///////////////////////////////////////
   
   
   
                              */ 
  
  
  if(document.getElementById("Ch34_Link_Current").checked==true){
	
	switch (channel) {
	 case 'Ch3_Pulse_Width':
	 if (parseInt(parametro.value)>0) {
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh4pw"),document.getElementById("myRangech4pw"),'Ch4_Pulse_Width',parseInt(parametro.value));
}else { 
   menosupdateitem(document.getElementById("democh4pw"),document.getElementById("myRangech4pw"),'Ch4_Pulse_Width',parseInt(parametro.value)+1);
}     
    break;
	 case 'Ch4_Pulse_Width':
	 if (parseInt(parametro.value)>0) {
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh3pw"),document.getElementById("myRangech3pw"),'Ch3_Pulse_Width',parseInt(parametro.value));
} else { 
   menosupdateitem(document.getElementById("democh3pw"),document.getElementById("myRangech3pw"),'Ch3_Pulse_Width',parseInt(parametro.value)+1);
} 
   break;
    case 'Ch4_Current':
    if (parseInt(parametro.value)>0) {
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh3curr"),document.getElementById("myRangech3curr"),'Ch3_Current',parseInt(parametro.value));
} else { 
   menosupdateitem(document.getElementById("democh3curr"),document.getElementById("myRangech3curr"),'Ch3_Current',parseInt(parametro.value)+1);
}    
    break;
    case 'Ch3_Current':
if (parseInt(parametro.value)>0) {		  
		    menosupdateitem(label,parametro,channel,parseInt(parametro.value));
		    menosupdateitem(document.getElementById("democh4curr"),document.getElementById("myRangech4curr"),'Ch4_Current',parseInt(parametro.value));
} else { 
		    menosupdateitem(document.getElementById("democh4curr"),document.getElementById("myRangech4curr"),'Ch4_Current',parseInt(parametro.value)+1);
}    
    break;
     
}
    
}
if(document.getElementById("Ch34_Link_Angle").checked==true){
	
	switch (channel) {
	 case 'Ch3_Angle_Min':
	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=360 
	 && parseInt(document.getElementById("myRangech4minang").value) >0 
	 && parseInt(document.getElementById("myRangech4minang").value)<=360){
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh4minang"),document.getElementById("myRangech4minang"),'Ch4_Angle_Min',parseInt(document.getElementById("myRangech4minang").value));
   }    
    break;
	 case 'Ch3_Angle_Max':
	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=360 
	 && parseInt(document.getElementById("myRangech4maxang").value) >0 
	 && parseInt(document.getElementById("myRangech4maxang").value)<=360){
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh4maxang"),document.getElementById("myRangech4maxang"),'Ch4_Angle_Max',parseInt(document.getElementById("myRangech4maxang").value));
   }
   break;
    case 'Ch4_Angle_Min':
    	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=360 
	 && parseInt(document.getElementById("myRangech3minang").value) >0 
	 && parseInt(document.getElementById("myRangech3minang").value)<=360){
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh3minang"),document.getElementById("myRangech3minang"),'Ch3_Angle_Min',parseInt(document.getElementById("myRangech3minang").value));
 }
    break;
    case 'Ch4_Angle_Max':
    if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=360 
	 && parseInt(document.getElementById("myRangech3maxang").value) >0 
	 && parseInt(document.getElementById("myRangech3maxang").value)<=360){
	menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh3maxang"),document.getElementById("myRangech3maxang"),'Ch3_Angle_Max',parseInt(document.getElementById("myRangech3maxang").value));
 }
    break;
     
}
  }     
  
  if(document.getElementById("Ch34_Link_Current").checked==false){
	
	switch (channel) {
	 case 'Ch3_Pulse_Width':
	 if(parseInt(parametro.value)>0 )
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
	 case 'Ch4_Pulse_Width':
	 if(parseInt(parametro.value)>0 )
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

   break;
    case 'Ch4_Current':
    if(parseInt(parametro.value)>0 )
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
    case 'Ch3_Current':
    if(parseInt(parametro.value)>0 )
		     menosupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
     
}


}
if(document.getElementById("Ch34_Link_Angle").checked==false){
	
	switch (channel) {
	 case 'Ch3_Angle_Min':
	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=360 
	 ){
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

   }    
    break;
	 case 'Ch3_Angle_Max':
	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=360 
	){
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

   }
   break;
    case 'Ch4_Angle_Min':
    	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=360 
	 ){
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

 }
    break;
    case 'Ch4_Angle_Max':
    if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=360 
	 ){
	 menosupdateitem(label,parametro,channel,parseInt(parametro.value));

 }
    break;
     

  }      };
  
  
   /*                         
   
   ///////////////////////////////////////
   
   
   
                              */ 
  
  
  if(document.getElementById("Ch56_Link_Current").checked==true){
	
	switch (channel) {
	 case 'Ch5_Pulse_Width':
	 if (parseInt(parametro.value)>0) {
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh6pw"),document.getElementById("myRangech6pw"),'Ch6_Pulse_Width',parseInt(parametro.value));
}else { 
   menosupdateitem(document.getElementById("democh6pw"),document.getElementById("myRangech6pw"),'Ch6_Pulse_Width',parseInt(parametro.value)+1);
}     
    break;
	 case 'Ch6_Pulse_Width':
	 if (parseInt(parametro.value)>0) {
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh5pw"),document.getElementById("myRangech5pw"),'Ch5_Pulse_Width',parseInt(parametro.value));
} else { 
   menosupdateitem(document.getElementById("democh5pw"),document.getElementById("myRangech5pw"),'Ch5_Pulse_Width',parseInt(parametro.value)+1);
} 
   break;
    case 'Ch6_Current':
    if (parseInt(parametro.value)>0) {
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh5curr"),document.getElementById("myRangech5curr"),'Ch5_Current',parseInt(parametro.value));
} else { 
   menosupdateitem(document.getElementById("democh5curr"),document.getElementById("myRangech5curr"),'Ch5_Current',parseInt(parametro.value)+1);
}    
    break;
    case 'Ch5_Current':
if (parseInt(parametro.value)>0) {		  
		    menosupdateitem(label,parametro,channel,parseInt(parametro.value));
		    menosupdateitem(document.getElementById("democh6curr"),document.getElementById("myRangech6curr"),'Ch6_Current',parseInt(parametro.value));
} else { 
		    menosupdateitem(document.getElementById("democh6curr"),document.getElementById("myRangech6curr"),'Ch6_Current',parseInt(parametro.value)+1);
}    
    break;
     
}
    
}
if(document.getElementById("Ch56_Link_Angle").checked==true){
	
	switch (channel) {
	 case 'Ch5_Angle_Min':
	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=560 
	 && parseInt(document.getElementById("myRangech6minang").value) >0 
	 && parseInt(document.getElementById("myRangech6minang").value)<=560){
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh6minang"),document.getElementById("myRangech6minang"),'Ch6_Angle_Min',parseInt(document.getElementById("myRangech6minang").value));
   }    
    break;
	 case 'Ch5_Angle_Max':
	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=560 
	 && parseInt(document.getElementById("myRangech6maxang").value) >0 
	 && parseInt(document.getElementById("myRangech6maxang").value)<=560){
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh6maxang"),document.getElementById("myRangech6maxang"),'Ch6_Angle_Max',parseInt(document.getElementById("myRangech6maxang").value));
   }
   break;
    case 'Ch6_Angle_Min':
    	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=560 
	 && parseInt(document.getElementById("myRangech5minang").value) >0 
	 && parseInt(document.getElementById("myRangech5minang").value)<=560){
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh5minang"),document.getElementById("myRangech5minang"),'Ch5_Angle_Min',parseInt(document.getElementById("myRangech5minang").value));
 }
    break;
    case 'Ch6_Angle_Max':
    if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=560 
	 && parseInt(document.getElementById("myRangech5maxang").value) >0 
	 && parseInt(document.getElementById("myRangech5maxang").value)<=560){
	menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh5maxang"),document.getElementById("myRangech5maxang"),'Ch5_Angle_Max',parseInt(document.getElementById("myRangech5maxang").value));
 }
    break;
     
}
  }     
  
  if(document.getElementById("Ch56_Link_Current").checked==false){
	
	switch (channel) {
	 case 'Ch5_Pulse_Width':
	 if(parseInt(parametro.value)>0 )
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
	 case 'Ch6_Pulse_Width':
	 if(parseInt(parametro.value)>0 )
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

   break;
    case 'Ch6_Current':
    if(parseInt(parametro.value)>0 )
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
    case 'Ch5_Current':
    if(parseInt(parametro.value)>0 )
		     menosupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
     
}


}
if(document.getElementById("Ch56_Link_Angle").checked==false){
	
	switch (channel) {
	 case 'Ch5_Angle_Min':
	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=560 
	 ){
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

   }    
    break;
	 case 'Ch5_Angle_Max':
	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=560 
	){
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

   }
   break;
    case 'Ch6_Angle_Min':
    	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=560 
	 ){
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

 }
    break;
    case 'Ch6_Angle_Max':
    if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=560 
	 ){
	 menosupdateitem(label,parametro,channel,parseInt(parametro.value));

 }
    break;
     

  }      };
  
  
   /*                         
   
   ///////////////////////////////////////
   
   
   
                              */ 
  
  
  if(document.getElementById("Ch78_Link_Current").checked==true){
	
	switch (channel) {
	 case 'Ch7_Pulse_Width':
	 if (parseInt(parametro.value)>0) {
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh8pw"),document.getElementById("myRangech8pw"),'Ch8_Pulse_Width',parseInt(parametro.value));
}else { 
   menosupdateitem(document.getElementById("democh8pw"),document.getElementById("myRangech8pw"),'Ch8_Pulse_Width',parseInt(parametro.value)+1);
}     
    break;
	 case 'Ch8_Pulse_Width':
	 if (parseInt(parametro.value)>0) {
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh7pw"),document.getElementById("myRangech7pw"),'Ch7_Pulse_Width',parseInt(parametro.value));
} else { 
   menosupdateitem(document.getElementById("democh7pw"),document.getElementById("myRangech7pw"),'Ch7_Pulse_Width',parseInt(parametro.value)+1);
} 
   break;
    case 'Ch8_Current':
    if (parseInt(parametro.value)>0) {
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh7curr"),document.getElementById("myRangech7curr"),'Ch7_Current',parseInt(parametro.value));
} else { 
   menosupdateitem(document.getElementById("democh7curr"),document.getElementById("myRangech7curr"),'Ch7_Current',parseInt(parametro.value)+1);
}    
    break;
    case 'Ch7_Current':
if (parseInt(parametro.value)>0) {		  
		    menosupdateitem(label,parametro,channel,parseInt(parametro.value));
		    menosupdateitem(document.getElementById("democh8curr"),document.getElementById("myRangech8curr"),'Ch8_Current',parseInt(parametro.value));
} else { 
		    menosupdateitem(document.getElementById("democh8curr"),document.getElementById("myRangech8curr"),'Ch8_Current',parseInt(parametro.value)+1);
}    
    break;
     
}
    
}
if(document.getElementById("Ch78_Link_Angle").checked==true){
	
	switch (channel) {
	 case 'Ch7_Angle_Min':
	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=780 
	 && parseInt(document.getElementById("myRangech8minang").value) >0 
	 && parseInt(document.getElementById("myRangech8minang").value)<=780){
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh8minang"),document.getElementById("myRangech8minang"),'Ch8_Angle_Min',parseInt(document.getElementById("myRangech8minang").value));
   }    
    break;
	 case 'Ch7_Angle_Max':
	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=780 
	 && parseInt(document.getElementById("myRangech8maxang").value) >0 
	 && parseInt(document.getElementById("myRangech8maxang").value)<=780){
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh8maxang"),document.getElementById("myRangech8maxang"),'Ch8_Angle_Max',parseInt(document.getElementById("myRangech8maxang").value));
   }
   break;
    case 'Ch8_Angle_Min':
    	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=780 
	 && parseInt(document.getElementById("myRangech7minang").value) >0 
	 && parseInt(document.getElementById("myRangech7minang").value)<=780){
   menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh7minang"),document.getElementById("myRangech7minang"),'Ch7_Angle_Min',parseInt(document.getElementById("myRangech7minang").value));
 }
    break;
    case 'Ch8_Angle_Max':
    if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=780 
	 && parseInt(document.getElementById("myRangech7maxang").value) >0 
	 && parseInt(document.getElementById("myRangech7maxang").value)<=780){
	menosupdateitem(label,parametro,channel,parseInt(parametro.value));
   menosupdateitem(document.getElementById("democh7maxang"),document.getElementById("myRangech7maxang"),'Ch7_Angle_Max',parseInt(document.getElementById("myRangech7maxang").value));
 }
    break;
     
}
  }     
  
  if(document.getElementById("Ch78_Link_Current").checked==false){
	
	switch (channel) {
	 case 'Ch7_Pulse_Width':
	 if(parseInt(parametro.value)>0 )
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
	 case 'Ch8_Pulse_Width':
	 if(parseInt(parametro.value)>0 )
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

   break;
    case 'Ch8_Current':
    if(parseInt(parametro.value)>0 )
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
    case 'Ch7_Current':
    if(parseInt(parametro.value)>0 )
		     menosupdateitem(label,parametro,channel,parseInt(parametro.value));

    break;
     
}


}
if(document.getElementById("Ch78_Link_Angle").checked==false){
	
	switch (channel) {
	 case 'Ch7_Angle_Min':
	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=780 
	 ){
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

   }    
    break;
	 case 'Ch7_Angle_Max':
	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=780 
	){
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

   }
   break;
    case 'Ch8_Angle_Min':
    	 if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=780 
	 ){
    menosupdateitem(label,parametro,channel,parseInt(parametro.value));

 }
    break;
    case 'Ch8_Angle_Max':
    if(parseInt(parametro.value)>0 
	 && parseInt(parametro.value)<=780 
	 ){
	 menosupdateitem(label,parametro,channel,parseInt(parametro.value));

 }
    break;
     

  }      };
  
  
  
  
  
  
   };




function parametros() {


var dynaRecClient = new ROSLIB.Service({
				ros : this.ros,
				name : '/ema/server/set_parameters',
				serviceType : 'dynamic_reconfigure/Reconfigure'
			    });
   
    
 var request = new ROSLIB.ServiceRequest({
        config: {
            bools: [
                   ],
            ints: [
          ],
            strs: [
              
            ],
            doubles: [
               
            ],
            groups: [
             
            ]
        }
    });
    
    

    
      dynaRecClient.callService(request, 
      
      function(result) {

      result.config.ints.forEach(atualizardadosints);
      result.config.bools.forEach(atualizardadosbools);
    //  console.log(result);
    }
    
    );       

}

var app = new Vue({
    el: '#app',
    // storing the state of the page
    data: {
        connected: false,
       
        ws_address: 'ws://192.168.43.14:9090',
        logs: [],
        loading: false,
        topic: null,
        message: null,
    },
    // helper methods to connect to ROS
    methods: {
        connect: function() {
            this.loading = true
            ros = new ROSLIB.Ros({
                url: this.ws_address
            })
            
            ros.on('connection', () => {
                this.logs.unshift((new Date()).toTimeString() + ' - Connected!')
                this.connected = true
              

	


 chart.options.title.text = "Velocidade Angular";
  
              
              setInterval(graphVel, 100)
              setInterval(drawCircle, 100)
              parametros();
            
            })
            ros.on('error', (error) => {
                this.logs.unshift((new Date()).toTimeString() + ` - Error: ${error}`)
            })
            ros.on('close', () => {
                this.logs.unshift((new Date()).toTimeString() + ' - Disconnected!')
                this.connected = false
                this.loading = false
            })
       
     }  ,
       
       
       
       
       
       
       
       
        disconnect: function() {
            ros.close()
        },
        setTopic: function() {
            this.topic = new ROSLIB.Topic({
                ros: this.ros,
                name: '/cmd_vel',
                messageType: 'geometry_msgs/Twist'
            })
        },
        
    mounted() {
    },
})