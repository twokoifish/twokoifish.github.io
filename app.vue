<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui';
import { en } from '@nuxt/ui/locale'
import { h, resolveComponent, onMounted } from 'vue';

function setYear(): void {
  const span = document.getElementById('currentYear')
  if (span) {
    span.textContent = new Date().getFullYear().toString()
  }
}

onMounted(() => setYear())
</script>

<template>
  <UApp :locale="en" class="p-0">

      <!-- Headshot of Me -->
      <NuxtImg src="/ajanuszko.png" sizes="250px" :placeholder="[250, 250, 50, 5]"
        class="mt-4 mb-4 shadow-lg headshot object-top ml-auto mr-auto md:object-top-left md:ml-4 md:mr-4 border-1 border-solid border-b-gray-500" />

      <!-- Card with Details, Links, and Copyright -->
      <UCard variant="subtle" class="m-4 shadow-lg text-base">
        <template #header>
          <p class="font-sans mb-2 font-bold text-2xl">
            Hey, I'm Andrew!
            <span role="img" aria-label="waving hand">👋</span>
          </p>
          
          <p class="mb-2">I'm a 25-year-old software engineer with a focus on building cross-platform and native mobile apps
            with Flutter and SwiftUI. I have experience with shipping solid, real-world solutions in consulting environments.</p>

          <div class="flex flex-wrap gap-2">
            <!--  Link to Buisness Email -->
            <UTooltip text="Send me an email">
              <UButton icon="i-lucide-mail" size="xl" color="sky" variant="subtle" 
                to="mailto:andrew@ajanuszko.me" target="_blank">Email
              </UButton>
            </UTooltip>

            <!--  Link to GitHub -->
            <UTooltip text="View me on GitHub">
              <UButton icon="i-lucide-github" size="xl" color="stone" variant="subtle" 
                to="https://github.com/twokoifish" target="_blank">
                GitHub</UButton>
            </UTooltip>

            <!-- Link to LinkedIn  -->
            <UTooltip text="View me on LinkedIn">
              <UButton icon="i-lucide-linkedin" size="xl" color="blue" variant="subtle" 
                to="https://linkedin.com/in/andrew-januszko-7485271a2" target="_blank">LinkedIn</UButton>
            </UTooltip>
          </div>
        </template>
        <template #default>
          <p class="text-2xl mb-2 font-bold">Experience</p>
          <div>
            <p class="text-base">
              I'm currently a 
              <span class="font-semibold">full-time DC Solution Analyst</span> at <span class="font-semibold">Deloitte</span>.
              I work closely with clients and teams to build custom mobile apps that fit their goals, perform well, and feel great to use — while also building tools that make future projects easier to maintain and develop.
            </p>
          </div>
        </template>
        <template #footer>
          <p>© <span id="currentYear" /> Andrew Januszko. All rights reserved.</p>
        </template>
      </UCard>
    
  </UApp>
</template>
