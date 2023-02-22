<script>
	import { analytics } from "./firebase";
	import { logEvent, setCurrentScreen } from "firebase/analytics";

	setCurrentScreen(analytics, window.location.pathname);
	logEvent(analytics, 'screen_view');

</script>

<div class="flex flex-col items-center space-y-4 pt-32 z-0">
	<slot/>
</div>