//Signing in 
function Signin()
{
var em1 = document.getElementById("em");
var password = document.getElementById("pass");

if (em1 === "" , password === "") {
  alert("Fillout all the fields");
  return false;
}
else if(em1.value.trim()=="")
{
    alert("Insert Your Email");
    return false;
}
else if(password.value.trim()=="")
{
    alert("Insert Your Password");
    return false;
}
else if(password.value.trim().length<5)
{
    alert("Password too Shorts");
    return false;
}
else{
    return true;
}
}

//Register
function SignUp(){
    var em = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
    var password = document.getElementById("ps").value;
    var Cpass = document.getElementById("cpwd").value;

    if(name === "" || em === "" || password===""|| Cpass===""){
            alert("Please fillout the fields");
            return false;
        }

        else if(em == regx){
            return true;
        }
        else if(password.length<6){
            alert("Password too short");
                return false;
        }

        else if(password === Cpass){

            return true;
        }
        else if (password != Cpass) {
          alert("Password and Confirm Password must be the same");
          return false;
        }
        else{
           return true;    
        }

     }
     
     /*
     function send(){
         var em = document.getElementById("email").value;
        const nodemailer = require("nodemailer");
        const account = {
            user:"",
            pass:""
        };
         if (em == "") {
             alert("enter your Email!");
         } else {
             let transporter = nodemailer.createTransport({
                host:'google.com',
                auth:{
                    user:account.user,
                    pass:account.pass
                }
             });

             let mailOptions ={
                from:'',
                to:'',
                subject:'',
                text:'',
             };
             transporter.sendMail(mailOptions,(error,info) =>{
                if(error){
                    return console.log(error);
                }
                console.log("Message Sent",info.messageId);
                console.log("Preview URL",nodemailer.getTestMessageurl(info));
             });
         }
     }
     */

  
    var modalbtn = document.querySelector('#Cart');
    var modalbg = document.querySelector('.modal-bg');
    var close = document.querySelector('.modal-close');

    modalbtn.addEventListener('click',function(){
      modalbg.classList.add('bg-active');
      
  });

    close.addEventListener('click', function(){
      modalbg.classList.remove('bg-active');
      
    });
//kape1
    function product1() {
      document.getElementById("item1").classList.remove("kape1");
      document.getElementById("item1").classList.add("kape1show");
    
      var val = document.getElementById("quantity1").value;
      document.getElementById("qty1").innerHTML = val;
    
      var qty = $("#qty1").text();
      var total = parseInt(qty) * 220;
    
      document.getElementById("total1").innerHTML = total;
    }
    
    function delete1() {
      document.getElementById("item1").classList.add("kape1");
      document.getElementById("item1").classList.remove("kape1show");
    
      document.getElementById("total1").innerHTML = 0;
      $("#qty1").text(0);
    }
//kape2
    function product2() {
      document.getElementById("item2").classList.remove("Liempo");
      document.getElementById("item2").classList.add("Liemposhow");
      
      var val = document.getElementById("quantity2").value;
      document.getElementById("qty2").innerHTML = val;
    
      var qty = $("#qty2").text();
      var total = parseInt(qty) * 200;
    
      document.getElementById("total2").innerHTML = total;
    }
    
    function delete2() {
      document.getElementById("item2").classList.add("Liempo");
      document.getElementById("item2").classList.remove("Liemposhow");
    
      document.getElementById("total2").innerHTML = 0;
      $("#qty2").text(0);
    }
//kape3
    function product3() {
      document.getElementById("item3").classList.remove("Sisig");
      document.getElementById("item3").classList.add("Sisigshow");
      
      var val = document.getElementById("quantity3").value;
      document.getElementById("qty3").innerHTML = val;
    
      var qty = $("#qty3").text();
      var total = parseInt(qty) * 750;
    
      document.getElementById("total3").innerHTML = total;
    }
    
    function delete3() {
      document.getElementById("item3").classList.add("Sisig");
      document.getElementById("item3").classList.remove("Sisigshow");
    
      document.getElementById("total3").innerHTML = 0;
      $("#qty3").text(0);
    }
    //kape4
    function product4() {
      document.getElementById("item4").classList.remove("RT");
      document.getElementById("item4").classList.add("RTshow");
      
      var val = document.getElementById("quantity4").value;
      document.getElementById("qty4").innerHTML = val;
    
      var qty = $("#qty4").text();
      var total = parseInt(qty) * 300;
    
      document.getElementById("total4").innerHTML = total;
    }
    
    function delete4() {
      document.getElementById("item4").classList.add("RT");
      document.getElementById("item4").classList.remove("RTshow");
    
      document.getElementById("total4").innerHTML = 0;
      $("#qty4").text(0);
    }
    //kape5
    function product5() {
      document.getElementById("item5").classList.remove("BS");
      document.getElementById("item5").classList.add("BSshow");
    
      var val = document.getElementById("quantity5").value;
      document.getElementById("qty5").innerHTML = val;
    
      var qty = $("#qty5").text();
      var total = parseInt(qty) * 566;
    
      document.getElementById("total5").innerHTML = total;
    }
    
    function delete5() {
      document.getElementById("item5").classList.add("BS");
      document.getElementById("item5").classList.remove("BSshow");
    
      document.getElementById("total5").innerHTML = 0;
      $("#qty5").text(0);
    }
    //Daing
    function product6() {
      document.getElementById("item6").classList.remove("DB");
      document.getElementById("item6").classList.add("DBshow");
      
      var val = document.getElementById("quantity6").value;
      document.getElementById("qty6").innerHTML = val;
    
      var qty = $("#qty6").text();
      var total = parseInt(qty) * 1250;
    
      document.getElementById("total6").innerHTML = total;
    }
    
    function delete6() {
      document.getElementById("item6").classList.add("DB");
      document.getElementById("item6").classList.remove("DBshow");

      document.getElementById("total6").innerHTML = 0;
      $("#qty6").text(0);
    }

    //Dilis
    function product7() {
      document.getElementById("item7").classList.remove("Dilis");
      document.getElementById("item7").classList.add("Dilisshow");

      var val = document.getElementById("quantity7").value;
      document.getElementById("qty7").innerHTML = val;
    
      var qty = $("#qty7").text();
      var total = parseInt(qty) * 150;
    
      document.getElementById("total7").innerHTML = total;
    }
    
    function delete7() {
      document.getElementById("item7").classList.add("Dilis");
      document.getElementById("item7").classList.remove("Dilisshow");
    
      document.getElementById("total7").innerHTML = 0;
      $("#qty7").text(0);
    }

     //Dell1
    function product8() {
      document.getElementById("item8").classList.remove("Dell1");
      document.getElementById("item8").classList.add("Dell1show");

      var val = document.getElementById("quantity8").value;
      document.getElementById("qty8").innerHTML = val;
    
      var qty = $("#qty8").text();
      var total = parseInt(qty) * 830;
    
      document.getElementById("total8").innerHTML = total;
    }
    
    function delete8() {
      document.getElementById("item8").classList.add("Dell1");
      document.getElementById("item8").classList.remove("Dell1show");
    
      document.getElementById("total8").innerHTML = 0;
      $("#qty8").text(0);
    }

     //Dell2
    function product9() {
      document.getElementById("item9").classList.remove("Dell2");
      document.getElementById("item9").classList.add("Dell2show");

      var val = document.getElementById("quantity9").value;
      document.getElementById("qty9").innerHTML = val;
    
      var qty = $("#qty9").text();
      var total = parseInt(qty) * 621;
    
      document.getElementById("total9").innerHTML = total;
    }
    
    function delete9() {
      document.getElementById("item9").classList.add("Dell2");
      document.getElementById("item9").classList.remove("Dell2show");
    
      document.getElementById("total9").innerHTML = 0;
      $("#qty9").text(0);
    }

     //Dell3
    function product10() {
      document.getElementById("item10").classList.remove("Dell3");
      document.getElementById("item10").classList.add("Dell3show");

      var val = document.getElementById("quantity10").value;
      document.getElementById("qty10").innerHTML = val;
    
      var qty = $("#qty10").text();
      var total = parseInt(qty) * 350;
    
      document.getElementById("total10").innerHTML = total;
    }
    
    function delete10() {
      document.getElementById("item10").classList.add("Dell3");
      document.getElementById("item10").classList.remove("Dell3show");
    
      document.getElementById("total10").innerHTML = 0;
      $("#qty10").text(0);
    }

    //Dell4
    function product11() {
      document.getElementById("item11").classList.remove("Dell4");
      document.getElementById("item11").classList.add("Dell4show");

      var val = document.getElementById("quantity11").value;
      document.getElementById("qty11").innerHTML = val;
    
      var qty = $("#qty11").text();
      var total = parseInt(qty) * 250;
    
      document.getElementById("total11").innerHTML = total;
    }
    
    function delete11() {
      document.getElementById("item11").classList.add("Dell4");
      document.getElementById("item11").classList.remove("Dell4show");
    
      document.getElementById("total11").innerHTML = 0;
      $("#qty11").text(0);
    }

    //Dell5
    function product12() {
      document.getElementById("item12").classList.remove("Dell5");
      document.getElementById("item12").classList.add("Dell5show");

      var val = document.getElementById("quantity12").value;
      document.getElementById("qty12").innerHTML = val;
    
      var qty = $("#qty12").text();
      var total = parseInt(qty) * 300;
    
      document.getElementById("total12").innerHTML = total;
    }
    
    function delete12() {
      document.getElementById("item12").classList.add("Dell5");
      document.getElementById("item12").classList.remove("Dell5show");
    
      document.getElementById("total12").innerHTML = 0;
      $("#qty12").text(0);
    }

    //Dell6
    function product13() {
      document.getElementById("item13").classList.remove("Dell6");
      document.getElementById("item13").classList.add("Dell6show");

      var val = document.getElementById("quantity10").value;
      document.getElementById("qty13").innerHTML = val;
    
      var qty = $("#qty13").text();
      var total = parseInt(qty) * 35;
    
      document.getElementById("total13").innerHTML = total;
    }
    
    function delete13() {
      document.getElementById("item13").classList.add("Dell6");
      document.getElementById("item13").classList.remove("Dell6show");
    
      document.getElementById("total13").innerHTML = 0;
      $("#qty13").text(0);
    }

    //Dell7
    function product14() {
      document.getElementById("item14").classList.remove("Dell7");
      document.getElementById("item14").classList.add("Dell7show");

      var val = document.getElementById("quantity14").value;
      document.getElementById("qty14").innerHTML = val;
    
      var qty = $("#qty14").text();
      var total = parseInt(qty) * 700;
    
      document.getElementById("total14").innerHTML = total;
    }
    
    function delete14() {
      document.getElementById("item14").classList.add("Dell7");
      document.getElementById("item14").classList.remove("Dell7show");
    
      document.getElementById("total14").innerHTML = 0;
      $("#qty14").text(0);
    }

    //Dell8
    function product15() {
      document.getElementById("item15").classList.remove("Dell8");
      document.getElementById("item15").classList.add("Dell8show");

      var val = document.getElementById("quantity15").value;
      document.getElementById("qty15").innerHTML = val;
    
      var qty = $("#qty15").text();
      var total = parseInt(qty) * 890;
    
      document.getElementById("total15").innerHTML = total;
    }
    
    function delete15() {
      document.getElementById("item15").classList.add("Dell8");
      document.getElementById("item15").classList.remove("Dell8show");
    
      document.getElementById("total15").innerHTML = 0;
      $("#qty15").text(0);
    }

    //Dell9
    function product16() {
      document.getElementById("item16").classList.remove("Dell9");
      document.getElementById("item16").classList.add("Dell9show");

      var val = document.getElementById("quantity16").value;
      document.getElementById("qty16").innerHTML = val;
    
      var qty = $("#qty16").text();
      var total = parseInt(qty) * 220;
    
      document.getElementById("total16").innerHTML = total;
    }
    
    function delete16() {
      document.getElementById("item16").classList.add("Dell9");
      document.getElementById("item16").classList.remove("Dell9show");
    
      document.getElementById("total16").innerHTML = 0;
      $("#qty16").text(0);
    }

    //Dell10
    function product17() {
      document.getElementById("item17").classList.remove("Dell10");
      document.getElementById("item17").classList.add("Dell10show");

      var val = document.getElementById("quantity17").value;
      document.getElementById("qty17").innerHTML = val;
    
      var qty = $("#qty17").text();
      var total = parseInt(qty) * 760;
    
      document.getElementById("total17").innerHTML = total;
    }
    
    function delete17() {
      document.getElementById("item17").classList.add("Dell10");
      document.getElementById("item17").classList.remove("Dell10show");
    
      document.getElementById("total17").innerHTML = 0;
      $("#qty17").text(0);
    }

    //Dell11
    function product18() {
      document.getElementById("item18").classList.remove("Dell11");
      document.getElementById("item18").classList.add("Dell11show");

      var val = document.getElementById("quantity18").value;
      document.getElementById("qty18").innerHTML = val;
    
      var qty = $("#qty18").text();
      var total = parseInt(qty) * 2530;
    
      document.getElementById("total18").innerHTML = total;
    }
    
    function delete18() {
      document.getElementById("item18").classList.add("Dell11");
      document.getElementById("item118").classList.remove("Dell11show");
    
      document.getElementById("total18").innerHTML = 0;
      $("#qty18").text(0);
    }

    //Dell12
    function product19() {
      document.getElementById("item19").classList.remove("Dell12");
      document.getElementById("item19").classList.add("Dell12show");

      var val = document.getElementById("quantity19").value;
      document.getElementById("qty19").innerHTML = val;
    
      var qty = $("#qty19").text();
      var total = parseInt(qty) * 3500;
    
      document.getElementById("total19").innerHTML = total;
    }
    
    function delete19() {
      document.getElementById("item19").classList.add("Dell12");
      document.getElementById("item19").classList.remove("Dell12show");
    
      document.getElementById("total19").innerHTML = 0;
      $("#qty19").text(0);
    }

    //Dell13
    function product20() {
      document.getElementById("item20").classList.remove("Dell13");
      document.getElementById("item20").classList.add("Dell13show");
    
      var val = document.getElementById("quantity20").value;
      document.getElementById("qty20").innerHTML = val;
    
      var qty = $("#qty20").text();
      var total = parseInt(qty) * 3500;
    
      document.getElementById("total20").innerHTML = total;
    }
    
    function delete20() {
      document.getElementById("item20").classList.add("Dell13");
      document.getElementById("item20").classList.remove("Dell13show");
    
      document.getElementById("total20").innerHTML = 0;
      $("#qty20").text(0);
    }

    //Dell14
    function product21() {
      document.getElementById("item21").classList.remove("Dell14");
      document.getElementById("item21").classList.add("Dell14show");
    
      var val = document.getElementById("quantity21").value;
      document.getElementById("qty21").innerHTML = val;
    
      var qty = $("#qty21").text();
      var total = parseInt(qty) * 275;
    
      document.getElementById("total21").innerHTML = total;
    }
    
    function delete21() {
      document.getElementById("item21").classList.add("Dell14");
      document.getElementById("item21").classList.remove("Dell14show");
    
      document.getElementById("total21").innerHTML = 0;
      $("#qty21").text(0);
    }

    //Dell15
    function product22() {
      document.getElementById("item22").classList.remove("Dell15");
      document.getElementById("item22").classList.add("Dell15show");
    
      var val = document.getElementById("quantity22").value;
      document.getElementById("qty22").innerHTML = val;
    
      var qty = $("#qty22").text();
      var total = parseInt(qty) * 100;
    
      document.getElementById("total22").innerHTML = total;
    }
    
    function delete22() {
      document.getElementById("item22").classList.add("Dell15");
      document.getElementById("item22").classList.remove("Dell15show");
    
      document.getElementById("total22").innerHTML = 0;
      $("#qty22").text(0);
    }
    setInterval(function() {
      var t1 = $("#total1").text();
      var t2 = $("#total2").text();
      var t3 = $("#total3").text();
      var t4 = $("#total4").text();
      var t5 = $("#total5").text();
      var t6 = $("#total6").text();
      var t7 = $("#total7").text();
      var t8 = $("#total8").text();
      var t9 = $("#total9").text();
      var t10 = $("#total10").text();
      var t11 = $("#total11").text();
      var t12 = $("#total12").text();
      var t13 = $("#total13").text();
      var t14 = $("#total14").text();
      var t15 = $("#total15").text();
      var t16 = $("#total16").text();
      var t17 = $("#total17").text();
      var t18 = $("#total18").text();
      var t19 = $("#total19").text();
      var t20 = $("#total20").text();
      var t21 = $("#total21").text();
      var t22 = $("#total22").text();
      var subtotal = parseInt(t1) + parseInt(t2) + parseInt(t3) + parseInt(t4) + parseInt(t5)
      + parseInt(t6) + parseInt(t7) + parseInt(t8) + parseInt(t9) + parseInt(t10); + parseInt(t11) + parseInt(t12) + parseInt(t13) + parseInt(t14) + parseInt(t15)+ parseInt(t16)+ parseInt(t17) + parseInt(t18) + parseInt(t19) + parseInt(t20) + parseInt(t21) + parseInt(t22);
    
      document.getElementById("AmountTotal").innerHTML = subtotal;
      

    },1000);
    function Purchase(){
      var sms = document.getElementById("email").value;
      var address = document.getElementById("add").value;
      var amount = document.getElementById("num");
      if(sms === "" || address === "" || num === ""){

        alert("Fillout all the Field");
      }
    
      else{
        document.getElementById("item1").classList.add("kape1");
        document.getElementById("item1").classList.remove("kape1show");

        document.getElementById("item2").classList.add("Liempo");
        document.getElementById("item2").classList.remove("Liemposhow");

        document.getElementById("item3").classList.add("Sisig");
        document.getElementById("item3").classList.remove("Sisigshow");

        document.getElementById("item4").classList.add("RT");
        document.getElementById("item4").classList.remove("RTshow");

        document.getElementById("item5").classList.add("BS");
        document.getElementById("item5").classList.remove("BSshow");

        document.getElementById("item6").classList.add("DB");
        document.getElementById("item6").classList.remove("DBshow");

        document.getElementById("item7").classList.add("Dilis");
        document.getElementById("item7").classList.remove("Dilisshow");

        document.getElementById("item8").classList.add("Dell1");
        document.getElementById("item8").classList.remove("Dell1show");

        document.getElementById("item9").classList.add("Dell2");
        document.getElementById("item9").classList.remove("Dell2show");

        document.getElementById("item10").classList.add("Dell3");
        document.getElementById("item10").classList.remove("Dell3show");

        document.getElementById("item11").classList.add("Dell4");
        document.getElementById("item11").classList.remove("Dell4show");

        document.getElementById("item12").classList.add("Dell5");
        document.getElementById("item12").classList.remove("Dell5show");

        document.getElementById("item13").classList.add("Dell6");
        document.getElementById("item13").classList.remove("Dell6show");

        document.getElementById("item14").classList.add("Dell7");
        document.getElementById("item14").classList.remove("Dell7show");

        document.getElementById("item15").classList.add("Dell8");
        document.getElementById("item15").classList.remove("Dell8show");

        document.getElementById("item16").classList.add("Dell9");
        document.getElementById("item16").classList.remove("Dell9show");

        document.getElementById("item17").classList.add("Dell10");
        document.getElementById("item17").classList.remove("Dell10show");

        document.getElementById("item18").classList.add("Dell11");
        document.getElementById("item18").classList.remove("Dell11show");

        document.getElementById("item19").classList.add("Dell12");
        document.getElementById("item19").classList.remove("Dell12show");

        document.getElementById("item20").classList.add("Dell13");
        document.getElementById("item20").classList.remove("Dell13show");

        document.getElementById("item20").classList.add("Dell14");
        document.getElementById("item20").classList.remove("Dell14show");
        
        document.getElementById("item21").classList.add("Dell15");
        document.getElementById("item21").classList.remove("Dell15show");
        
        
        document.getElementById("total1").innerHTML=0;
        document.getElementById("total2").innerHTML=0;
        document.getElementById("total3").innerHTML=0;
        document.getElementById("total4").innerHTML=0;
        document.getElementById("total5").innerHTML=0;
        document.getElementById("total6").innerHTML=0;
        document.getElementById("total7").innerHTML=0;
        document.getElementById("total8").innerHTML=0;
        document.getElementById("total9").innerHTML=0;
        document.getElementById("total10").innerHTML=0;
        document.getElementById("total11").innerHTML=0;
        document.getElementById("total12").innerHTML=0;
        document.getElementById("total13").innerHTML=0;
        document.getElementById("total14").innerHTML=0;
        document.getElementById("total15").innerHTML=0;
        document.getElementById("total16").innerHTML=0;
        document.getElementById("total17").innerHTML=0;
        document.getElementById("total18").innerHTML=0;
        document.getElementById("total19").innerHTML=0;
        document.getElementById("total20").innerHTML=0;
        document.getElementById("total21").innerHTML=0;
        document.getElementById("total22").innerHTML=0;
      }
    }
    /*
    const http = require();

    const hostname= "127.0.0.1";
    const port = 3000;
  
    const server = http.createServer((req,res)=>{
  
      res.statusCode = 200;
      res.setHeader('Content-Type',text/plain);
      res.send("hello World/n");
    });
  
    server.listen(port,hostname,()=>{
      console.log('server running at http://{$hostname}:${port}/')
    });
*/
    