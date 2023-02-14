<script>
	import Bio from "$lib/Bio.svelte";
	import Content from "$lib/Content.svelte";
	import Navbar from "$lib/Navbar.svelte";

	import brian_pic from "$lib/assets/brian_pic.jpeg";
	import julianne_pic from "$lib/assets/julianne_pic.jpeg";
	import missy_pic from "$lib/assets/missy_pic.jpeg";
	import will_pic from "$lib/assets/will_pic.jpeg";
</script>

<Navbar/>

<Content>
	<h1 class="text-2xl">Welcome to Brian's Pizza!</h1>
	<p>Always good, never consistent.</p>

	<h2 class="text-xl">Meet the Team</h2>

	<div class="flex flex-col items-start">
		<Bio name="Brian" picture_path={brian_pic} alt_text="Brian Young" bio="The pizzola himself!"/>
		<Bio name="Julianne" picture_path={julianne_pic} alt_text="Julianne Young" bio="Cocktail connoisseur and menu mastermind."/>
		<Bio name="Missy" picture_path={missy_pic} alt_text="Missy Young" bio="Bartender-in-training and all-around genius."/>
		<Bio name="Will" picture_path={will_pic} alt_text="Will Geoghegan" bio="Pizza devourer extraordinaire and website code monkey."/>
	</div>
</Content>