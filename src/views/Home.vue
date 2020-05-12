<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
    class="mr-12 ml-8 mt-8"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">{{ slide }} </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>


<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'cyan',
          'yellow',
          'green',
          'deep-purple accent-4',
        ],
        slides: [
          'SchoolRoom',
          'SchoolRoom',
          'SchoolRoom',
          'SchoolRoom',
          'SchoolRoom',
        ],
      }
    },
  }
</script>
