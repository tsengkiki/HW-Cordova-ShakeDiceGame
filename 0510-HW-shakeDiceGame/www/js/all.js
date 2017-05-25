window.onload=init;

function init (){
		var myCanvas = document.getElementById("myCanvas");
		var ct = myCanvas.getContext("2d");
		ct.strokeStyle="red";
		ct.fillStyle="red";
		ct.lineJoin = "round";
		
//畫外框
		function rect(startA){
			ct.strokeStyle="red";
			ct.lineWidth=7;
			ct.strokeRect( startA, 40,120,120); 
		}
		rect(40);   //40+160*i  i=0
		rect(200);  //i=1
		rect(360);  //i=2
		rect(520);
		rect(680); 
		rect(840);
		// rect(1);
		// rect(2);
		// rect(3);
//一點 20
		ct.beginPath();
		ct.arc(100,100,10,0,2*Math.PI);
		// ct.arc(70,140,10,0,2*Math.PI);
		ct.fill();
//兩點 180
		ct.beginPath();
		ct.arc(290,60,10,0,2*Math.PI);
		// ct.arc(260,100,10,0,2*Math.PI); //100+80+(120*1)
		ct.arc(230,140,10,0,2*Math.PI);
		ct.fill();
//三點 340
		ct.beginPath();
		ct.arc(450,60,10,0,2*Math.PI);
		ct.arc(420,100,10,0,2*Math.PI); //100+80+(120*2)	
		ct.arc(390,140,10,0,2*Math.PI);
		ct.fill();
//四點 500
		ct.beginPath();
		ct.arc(610,60,10,0,2*Math.PI);
		ct.arc(550,140,10,0,2*Math.PI);
		ct.fill();
		ct.beginPath();
		ct.arc(550,60,10,0,2*Math.PI);
		ct.arc(610,140,10,0,2*Math.PI);
		ct.fill();
//五點 660
		ct.beginPath();
		ct.arc(770,60,10,0,2*Math.PI);
		ct.arc(710,140,10,0,2*Math.PI);
		ct.fill();
		ct.beginPath();
		ct.arc(740,100,10,0,2*Math.PI);
		ct.fill();
		ct.beginPath();
		ct.arc(710,60,10,0,2*Math.PI);
		ct.arc(770,140,10,0,2*Math.PI);
		ct.fill();
//六點 820
		ct.beginPath();
		ct.arc(930,60,10,0,2*Math.PI);
		ct.arc(870,140,10,0,2*Math.PI);
		ct.fill();
		ct.beginPath();
		ct.arc(930,100,10,0,2*Math.PI);
		ct.arc(870,100,10,0,2*Math.PI);
		ct.fill();
		ct.beginPath();
		ct.arc(870,60,10,0,2*Math.PI);
		ct.arc(930,140,10,0,2*Math.PI);
		ct.fill();
}