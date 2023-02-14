<script>
	import Content from "$lib/Content.svelte";
	import Navbar from "$lib/Navbar.svelte";

	import buffalo from "$lib/assets/buffalo.jpeg";
</script>

<Navbar/>

<Content>
	<h1>Brian's Pizza</h1>
	<img src={buffalo} class="w-3/5" alt="Buffalo chicken extraordinaire. 🤌🤌🤌">
</Content>
