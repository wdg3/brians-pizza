<script>
	import logo from "$lib/assets/logo.svg";
</script>

<nav>
	<div class="flex flex-row items-center justify-between bg-white px-12 fixed top-0 left-0 right-0 z-10">
		<a href="/">
			<img class="h-32" src={logo} alt="Brian's Pizza, est. 2023"/>
		</a>
	    <div class="block w-auto">
			<ul class="flex flex-row space-x-4">
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/order">Order</a></li>
			</ul>
		</div>
	</div>
</nav>