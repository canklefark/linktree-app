<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="flex justify-center my-6">
	<ul class="steps">
		<a class="step step-primary" href="/login">Login</a>
		<a
			class="step step-primary"
			href="/login/username"
			class:step-primary={$page.route.id?.match(/username|photo/g)}
		>
			Choose Username
		</a>
		<a
			class="step"
			href="/login/photo"
			class:step-primary={$page.route.id?.match(/username|photo/g)}
		>
			Upload Photo
		</a>
	</ul>
</nav>

<main class="card w-4/6 bg-neutral text-neutral-content mx-auto">
	<div class="card-body items-center text-center">
		<slot />
	</div>
</main>
