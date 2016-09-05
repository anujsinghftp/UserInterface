<?php include("../include/layout/header.php"); ?>
	<body class="landing">

		<!-- Header -->
			<header id="header">
				<h1><a href="home.php">Grab book</a></h1>
				<nav id="nav">
					<ul>
						<li><a href="home.php">Home</a></li>
						<li><a href="signin.php">Sign In</a></li>
						<li><a href="signup.php">Sign Up</a></li>
					</ul>
				</nav>
			</header>
		<!-- Banner -->
			<section id="banner">
        <div class="wrapper">
  <form class="form-signin">
    <h2 class="form-signin-heading">Please login</h2>
    <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
    <input type="password" class="form-control" name="password" placeholder="Password" required=""/>
    <label class="checkbox">
      <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
    </label>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
  </form>
</div>

			</section>

<?php include("../include/layout/footer.php"); ?>
