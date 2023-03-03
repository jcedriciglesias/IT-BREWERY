<!DOCTYPE html>
<head>
	
	
	<title>Big Brew</title>
	
	
	<link rel = "stylesheet" href="style1.css">
	<script src="script.js"></script>
	<script src="jquery.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<style>

.success {color: white;
	border: none;
  background-color: inherit;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
}

body{
			margin: 0px;
			font-family: Arial;
			background-color: black;
			height: 100%;
			width: 100%;
		}
		#price{
			margin-top:7px;
			font-size: 17px;
		}
		.container-button{
			display: flex;
			
		}

		.shop-container{
			display: flex;
			justify-content: center;	
		  	
		}
		.shop{
			width: 24.5%;
			margin:12px;
			margin-left: 30px;
		}

		#button{

		background: #C26D2C;
		padding: 20px;
		transition: transform 90ms ease-in;
		border-radius: 20px;
	}

	#button:active {
    transform: scale(0.95);
}

#button:focus{
    outline: none;
}
#button.ghost {
    background: transparent;
    
 }

h3{
	color: white;
	font-size: 20px;
	font:;
	background-color: #C26D2C;
	padding: 20px;
	border-radius: 20px;
}
h3:hover{
	color: pink;
}
		#des{
			font-size: 12px;
			color: #black
		}
		#ttl{
			align-content: center;
			text-align: center;
		}
		
		#foot img{
			width:100%;
		}



			/*-css ng slideshow-*/
		/* Slideshow container */
    
		.slideshow-container {
			background: url('fruit tea long.jpg');
		background-size: cover;
      width: 1200px;
      height: 550px;
      box-shadow: 0 04px 18px rgba(0, 0, 0,25), 0 5px 5px rgba(0,0,0, 0.12);
      position: relative;
      margin: auto;
      border-radius: 70px;
      transition: .2s;
    }

    .slideshow-container1 {
			background: url('chia product.jpg');
		background-size: cover;
      width: 1000px;
      height: 500px;
      box-shadow: 0 04px 18px rgba(0, 0, 0,25), 0 5px 5px rgba(0,0,0, 0.12);
      position: relative;
      margin-left: 25%;
      border-radius: 70px;
    }

    .slideshow-container2 {
			background: url('back.jpg');
		background-size: cover;
      width: 1000px;
      height: 500px;
      box-shadow: 0 04px 18px rgba(0, 0, 0,25), 0 5px 5px rgba(0,0,0, 0.12);
      position: relative;
      margin-right: 40%;
      border-radius: 70px;
    }
 
    .left{
	
      display: flex;
	  width: 900px;
	  color: black;
	  margin-top: 20px;
	  margin-bottom: 7px;
	}


 

		</style>
		<link rel="shortcut icon" href="BigBrewph.png" type="image/jpeg"/>
</head>
<body>

	<nav>
		<div class="logo">
			<img src="BigBrewph.png" width="250px" height="100px">

		</div>

		<ul class="nav-links">
		                <li><a href="home.php">Home</a></li>
                        <li><a href="Products.html">Product</a></li>
                        <li><a href="About Us.html">About Us</a></li>
                        <li><a href="Contact Us.html">Contact Us</a></li>
		</ul>
		<div style="float:right">
		<form action="logout.php"><button class="btn success">Log out</button></form>
</div>
	</nav>
	<!--SlideShow-->
	<br>
	<br>
	<br>
	<br>
		<div class="slideshow-container">
	</div>
	<div class="shop-container">
	<div class="shop">
				<h3 id="ttl">Hot Brew</h3>
				<input src="Hot.jpeg" alt="button" id="button" type="image" height="400px" width="330px">
				<p id="des"></p>

			</div>
			<div class="shop">
				<h3 id="ttl">Dark Choco</h3>
				<input src="Milktea.jpg" alt="button" id="button" type="image" height="400px" width="330px">
				<p id="des"></p>


			</div>
			<div class="shop">
				<h3 id="ttl">Iced Coffee</h3>
				<input src="Kape.jpg" alt="button" id="button" type="image" height="400px" width="330px">
				<p id="des"></p>

			</div>
		</div>	
	
	<br> 
	<br>
	<br>
	<div class="slideshow-container1">
	</div>
	<br>
	<br>
	<br>
		<br>
	<div class="slideshow-container2">
	</div>
		<br>
		<br>
		<br>
		

	

		<div class="shop-container">
			<br>
			<br>
			<div class="shop">
				<h3 id="ttl">Hot Brew</h3>
				<input src="Hot.jpeg" alt="button" id="button" type="image" height="400px" width="330px">
				<p id="des"></p>

			</div>
			<div class="shop">
				<h3 id="ttl">Hot Choco</h3>
				<input src="Milktea.jpg" alt="button" id="button" type="image" height="400px" width="330px">
				<p id="des"></p>


			</div>
			<div class="shop">
				<h3 id="ttl">Iced Coffee</h3>
				<input src="kape.jpg" alt="button" id="button" type="image" height="400px" width="330px">
				<p id="des"></p>

			</div>
		</div>	
		
	
	

</body>
</html>