<template>
  <q-page class="q-px-xl q-mx-xl">

    <!-- Component Text -->
    <q-card class='bg-transparent'>
      <h1
        style='top: 0px'
        class="title-font text-h2 text-center"
      >
        Bienvenue sur Quasar
      </h1>
    </q-card>
    <!-- /Component Text -->

    <!-- Component Search -->
    <q-card class="my-card">
      <q-card-section class="bg-teal text-white">
        <q-input
          class='bg-white'
          v-model="search"
          debounce="500"
          filled
          placeholder="Rechercher"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-card-section>

      <q-card-actions vertical align="center">
        <div class="q-gutter-sm">
          <q-checkbox keep-color v-model="filter1" label="filter1" color="teal" />
          <q-checkbox keep-color v-model="filter2" label="filter2" color="orange" />
          <q-checkbox keep-color v-model="filter3" label="filter3" color="red" />
          <q-checkbox keep-color v-model="filter4" label="filter4" color="cyan" />
        </div>
      </q-card-actions>
    </q-card>
    <!-- /Component Search -->

    <!-- Component News -->
    <q-card class='q-my-xl'>
      <q-item-section class="text-center text-h4">
        Liste Actu
      </q-item-section>
      <q-card-section class="row justify-evenly">
        <q-card class="q-px-md text-center q-ma-md my-card bg-secondary text-white" v-for="index in 3" :key="index">
          <q-card-section>
            <div class="text-h6">Mon Super Titre</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section>
            {{ lorem }}
          </q-card-section>

          <q-separator dark />

          <q-card-actions>
            <q-btn flat>Category</q-btn>
          </q-card-actions>
        </q-card>
      </q-card-section>
    </q-card>
    <!-- Component News -->

    <!-- Component Résultat -->
    <q-card class='q-my-xl'>
      <q-item-section class="text-center text-h4">
        Liste Résultat
      </q-item-section>
      <q-card-section class="row justify-evenly">
        <q-card class="my-card" v-for="index in 4" :key="index" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline">Overline</div>
              <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
              <div class="text-caption text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </q-card-section>

            <q-card-section class="col-5 flex flex-center">
              <q-img
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat>
              7:30PM
            </q-btn>
            <q-btn flat color="primary">
              Reserve
            </q-btn>
          </q-card-actions>
        </q-card>
      </q-card-section>
    </q-card>
    <!-- /Component Résultat -->

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      filter1: false,
      filter2: false,
      filter3: false,
      filter4: false,
      lorem: 'jezd z dz dzed'

    }
  }
}
</script>
