<script setup>
defineProps({
	items: {
		type: Array,
		required: true,
	},
});
</script>

<template>
	<div class="article-wrapper">
		<div v-if="!items.length">Nothing in here :D</div>

		<article
			v-for="{info, path} in items"
			:key="path"
			class="article"
			@click="$router.push(path)"
		>
			<header class="title">
				{{ info.title }}
			</header>

			<hr />

			<div class="article-info">
				<span v-if="info.date" class="date"
					>Date: {{ new Date(info.date).toLocaleDateString() }}</span
				>

				<span v-if="info.category" class="category"
					>Category: {{ info.category }}</span
				>

				<span v-if="info.tag" class="tag"
					>Tag: {{ info.tag.join(", ") }}</span
				>
			</div>
		</article>
	</div>
</template>

<style lang="scss">
@use "@vuepress/theme-default/styles/mixins";

.article-wrapper {
	@include mixins.content-wrapper;
	text-align: center;
}

.article {
	box-sizing: border-box;
	margin: 0 auto 1.25rem;
	padding: 1rem 1.25rem;
	border: 1px solid var(--vp-c-border);
	border-radius: 0.4rem;

	color: var(--vp-c-text);

	text-align: start;

	&:hover {
		cursor: pointer;
	}

	.title {
		font-size: 1.28rem;
		line-height: 2rem;
	}

	.article-info {
		> span {
			margin-inline-end: 0.5em;
			line-height: 1.8;
		}
	}
}
</style>
