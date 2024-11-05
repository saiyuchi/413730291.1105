
let points = [];  //轉成點狀文字
let angle =0
let r =10
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //NotoSansTC-VariableFont_wght.ttf字型
    font = loadFont("fonts/NotoSansTC-VariableFont_wght.ttf") 
}
//===================================================


function setup() { //設定環境
  createCanvas(windowWidth, windowHeight);//設定畫布的寬高
  angleMode(DEGREES)
  background("#caf0f8") //背景顏色





  //=====================================================
  points = font.textToPoints("TKUET", -300, 80, 200, {
    sampleFactor:0.1
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小
  //===================================================================
  for (let i=0; i<points.length-1; i++) { 
   // text(str(i),points[i].x,points[i].y) //在()座標上，顯示一個文字(數字)
   fill("#ffc2d1")
   //noStroke()
   strokeWeight(1)
   ellipse(points[i].x+sin(angle),points[i].y,10)
   stroke("#4361ee")
   strokeWeight(5)
    line(points[i].x,points[i].y,points[i+1].x,points[i+1].y) 
    //畫線，兩個點構成一條線
 } 
 //====================================================================
 angle =angle+10


 
}

function draw() { //畫圖，每秒會進入執行程式60次
 
  
  background("#caf0f8");
  //textSize(30)
  //text(mouseX+":"+mouseY,width/2,height/2)

  rectMode(CENTER) //設定方形的座標點放在方形的中間
  noFill() //以下所畫物件不要充滿顏色
  stroke("#023e8a") //線條顏色
  strokeWeight(3) //線條粗細
  //宣告變數
  var rect_width = 50 +mouseX/10 //方形的寬度
  var bc_width = 50 +mouseY/10 //大圓的寬度
  var sc_width = 25 +mouseX/100 //小圓的寬度
  //FOR迴旋
  //i=: i為變數，要i從0開始(設定i的初始值)
  //i<20:條件判斷，當條件成立，就繼續進到迴圈內的程式碼執行
  //i=i+1:i值每次改變的差距值，當回圈內程式碼執行一次後，i值會自動+1
  for(let j=0;j<20;j=j+1){
      for(let i=0;i<40;i=i+1){
       //if(i<5){
      //stroke("#48cae4") 
      //}else if(i<10) {
      // stroke("#ade8f4")
       //}else{
       //  stroke("#023e8a")

      //}
      ellipse(25+50*i,25+50*j, bc_width) //在座標(x:25,y:25)畫一個直徑為50的圓
      rect(25+50*i,25+50*j,rect_width)//畫方形，在座標(x:25,y:25)畫一個直徑為50的方形
      ellipse(50+50*i,50+50*j,sc_width) //畫小圓，直徑為25
  }
}


 
  translate(width/2,height/2)
  rotate((frameCount)%360)


  for (let i=0; i<points.length-1; i++) { 
    // text(str(i),points[i].x,points[i].y) //在()座標上，顯示一個文字(數字)
    fill("#ffc2d1")
    //noStroke()
    strokeWeight(1)
    //ellipse(points[i].x+r*sin(angle+i*10),points[i].y,10)
    stroke("#4361ee")
    strokeWeight(5)
     line(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*10),points[i+1].x+r*sin(angle+i*10),points[i+1].y+r*sin(angle+i*10)) 
     //畫線，兩個點構成一條線

  }
  //==================================== 
  angle=angle+10
}


