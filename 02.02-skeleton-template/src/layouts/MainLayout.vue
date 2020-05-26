<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class='bg-teal'>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="home"
          aria-label="Menu"
          to='/'
        />

        <q-toolbar-title class='text-center'>
          Tuto Quasar
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>
