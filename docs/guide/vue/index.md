---
title: Overview
nextPage:
  - getting-started
---

<script setup>
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue'
import { vueSidebar } from '../../.vitepress/sidebar/vue'
</script>

<img src="/package-logos/dark/lucide-vue.svg" alt="Lucide icon library for Vue applications." width="540" style="margin-bottom: 48px;"/>

# Lucide for Vue

Lucide provides a Vue icon component library that makes it easy to integrate icons into your Vue applications.
Each icon is available as a standalone Vue component, allowing for seamless integration and customization.

List of features:
- **Easy to Use**: Import icons as Vue components and use them directly in your Vue components with JSX.
- **Customizable**: Adjust size, color, and other properties via props.
- **Tree-shakable**: Only the icons you use are included in your final bundle
- **TypeScript Support**: Fully typed components for better developer experience.

## Overview

<OverviewLink href="/guide/vue/getting-started" title="Getting Started" desc="Learn how to get started with Lucide in your Vue project."/>

### Basics
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in vueSidebar[1].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid >

### Advanced
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in vueSidebar[2].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid >
