<template>
	<section>
		<h1>{{ experience.name }}</h1>
		<img :src="`/images/${experience.image}`" :alt="experience.name" />
		<p>{{ experience.description }}</p>
	</section>
</template>
<script setup>
import sourceData from "@/data.json";
import { computed } from "vue";

const destination = computed(() => {
	return sourceData.destinations.find(
		(destination) => destination.id === this.id
	);
});
const experience = computed(() => {
	return this.destination.experiences.find(
		(experience) => experience.slug === this.experienceSlug
	);
});
const props = defineProps({
	id: { type: Number, required: true },
	experienceSlug: { type: String, required: true },
	v,
});
</script>
