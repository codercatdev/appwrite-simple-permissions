<script>
	import { page } from '$app/stores';
</script>

<nav id="nav" class="main-side">
	<div class="side-nav">
		<div class="side-nav-main">
			<section class="drop-section">
				<ul class="drop-list">
					<li class="drop-list-item">
						<a class="drop-button" class:is-selected={$page.route.id === '/'} href="/">
							<span class="icon-home" aria-hidden="true" />
							<span class="text">Home</span>
						</a>
					</li>
					<li class="drop-list-item">
						<a class="drop-button" class:is-selected={$page.route.id === '/basic'} href="/basic">
							<span class="icon-book-open" aria-hidden="true" />
							<span class="text">Basic</span>
						</a>
					</li>
					<li class="drop-list-item">
						<a
							class="drop-button"
							class:is-selected={$page.route.id === '/team-roles'}
							href="/team-roles"
						>
							<span class="icon-academic-cap" aria-hidden="true" />
							<span class="text">Team Roles</span>
						</a>
					</li>
				</ul>
			</section>
		</div>
	</div>
</nav>
