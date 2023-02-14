<script>
	export let name;
	export let picture_path;
	export let alt_text;
	export let bio;
</script>

<div class="flex flex-row items-start justify-between px-4 py-2">
	<img class="max-h-64 max-w-32" src={picture_path} alt={alt_text}/>
	<div class="flex flex-col items-start mx-2">
		<h2 class="text-lg">{name}</h2>
		<p class="text-sm">{bio}</p>
	</div>
</div>