<script setup lang="ts">
import { Header } from 'vitepress/types/shared';

/**
 * Redefine this entire vitepress component to add a little "*"
 * for required parameters.
 * See config.ts > vite > resolve > alias
 */

type MenuItem = Omit<Header, 'slug' | 'children'> & {
  element: HTMLHeadElement;
  children?: MenuItem[];
};

defineProps<{
  headers: MenuItem[];
  root?: boolean;
}>();

function onClick({ target: el }: Event) {
  const id = (el as HTMLAnchorElement).href!.split('#')[1];
  const heading = document.getElementById(decodeURIComponent(id));
  heading?.focus({ preventScroll: true });
}
</script>

<template>
  <ul class="VPDocOutlineItem" :class="root ? 'root' : 'nested'">
    <li v-for="{ children, link, title, element } in headers">
      <a class="outline-link" :href="link" @click="onClick" :title="title"
        >{{ title }}
        <div
          v-if="element.innerHTML.includes('Required *')"
          style="display: inline-block"
        >
          <div
            style="
              margin-bottom: 8px;
              border-radius: 9999px;
              background-color: rgba(234, 75, 93, 0.6);
              width: 4px;
              height: 4px;
            "
          ></div>
        </div>
      </a>
      <template v-if="children?.length">
        <CustomVPDocOutlineItem :headers="children" />
      </template>
    </li>
  </ul>
</template>

<style scoped>
.root {
  position: relative;
  z-index: 1;
}

.nested {
  padding-right: 16px;
  padding-left: 16px;
}

.outline-link {
  display: block;
  line-height: 32px;
  font-size: 14px;
  font-weight: 400;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.5s;
}

.outline-link:hover,
.outline-link.active {
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.outline-link.nested {
  padding-left: 13px;
}
</style>
