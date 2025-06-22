<script setup lang="ts">
import { en } from '@nuxt/ui/locale'
import { onMounted } from 'vue';

function setYear(): void {
  const span = document.getElementById('currentYear')
  if (span) {
    span.textContent = new Date().getFullYear().toString()
  }
}

onMounted(() => setYear())
</script>

<template>
  <UApp :locale="en">

    <!-- Headshot of Me -->
    <NuxtImg src="/ajanuszko.png" sizes="250px" :placeholder="[250, 250, 50, 5]"
      class="mt-6 mb-6 shadow-lg headshot object-top ml-auto mr-auto md:object-top-left md:ml-6 md:mr-6" />

    <!-- Card with Details, Links, and Copyright -->
    <UCard variant="subtle" class="m-6 shadow-lg">
      <template #header>
        <p class="mb-4 text-xl font-bold">Hey, I'm Andrew! &#x1F44B</p>
        <p class="mb-4">I'm a 25-year-old mobile-focused Software Engineer with experience building
          cross-platform and native apps using Flutter and SwiftUI. I specialize in responsive UIs,
          performance optimization, and delivering production-ready solutions in consulting
          environments.</p>

        <!-- Link to Resume -->
        <UTooltip text="Download my resume">
          <UButton icon="i-lucide-file-text" size="xl" color="amber" variant="subtle" to="https://github.com/nuxt/ui"
            target="_blank" class="mb-0">
            Resume
          </UButton>
        </UTooltip>

        <!--  Link to Buisness Email -->
        <UTooltip text="Send me an email">
          <UButton icon="i-lucide-mail" size="xl" color="sky" variant="subtle" class="ml-4"
            to="mailto:andrew@ajanuszko.me" target="_blank">Email
          </UButton>
        </UTooltip>

        <!--  Link to GitHub -->
        <UTooltip text="View me on GitHub">
          <UButton icon="i-lucide-github" size="xl" color="stone" variant="subtle" class="ml-4"
            to="https://github.com/twokoifish" target="_blank">
            GitHub</UButton>
        </UTooltip>

        <!-- Link to LinkedIn  -->
        <UTooltip text="View me on LinkedIn">
          <UButton icon="i-lucide-linkedin" size="xl" color="blue" variant="subtle" class="ml-4"
            to="https://linkedin.com/in/andrew-januszko-7485271a2" target="_blank">LinkedIn</UButton>
        </UTooltip>
      </template>
      <template #default>
        <h2>Current</h2>
        <ul>
          <li>Deloitte</li>
        </ul>
        <h2>Past</h2>
      </template>
      <template #footer>
        <p>© <span id="currentYear"></span> Andrew Januszko. All rights reserved.</p>
      </template>
    </UCard>

  </UApp>
</template>
