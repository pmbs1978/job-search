<template>
  <header class="w-full text-sm">
    <div class="h-100 fixed top-0 left-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <a
          href="/"
          class="flex h-full items-center text-xl">
          {{ company }}
        </a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-nome">
            <li class="h-full ml-9 first:ml-0" v-for="menuItem in menuItems" :key="menuItem">
              <a href="" class="flex h-full items-center py-2.5">
                {{ menuItem }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'PMBS careers',
      menuItems: [
        'Teams',
        'Locations',
        'Live at PMBS Corp',
        'How we hired',
        'Students',
          'Jobs'
      ]
      }
  }
};
</script>
