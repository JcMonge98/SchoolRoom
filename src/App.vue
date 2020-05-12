<template>
  <v-app>

    <!-- Encabezado-->
    <v-card color="green lighten-1" flat height="50px" tile>
      <v-toolbar dense>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>SchoolRoom</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <!-- Cierre Encabezado-->

<!-- Menu desplegable izquierdo-->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>SchoolRoom</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list dense>
        <v-list-item   link :to="{name:'Home'}">
          <v-list-item-icon>
            <v-icon class="pb-4 pt-6">mdi-apps</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="pb-4 pt-4">Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>      

        <v-list-item link :to="{name:'ListaGrado'}">
          <v-list-item-icon>
            <v-icon class="pb-4 pt-6">mdi-view-carousel</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="pb-4 pt-4">Grados</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{name:'ListaDocente'}">
          <v-list-item-icon>
            <v-icon class="pb-4 pt-6">mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="pb-4 pt-4">Docentes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{name:'ListaEncargado'}">
          <v-list-item-icon>
            <v-icon class="pb-4 pt-6">mdi-account-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="pb-4 pt-4">Encargados</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{name:'LIDocente'}">
          <v-list-item-icon>
            <v-icon class="pb-4 pt-6">mdi-calendar</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="pb-4 pt-4">Inscripciones Doc</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{name:'LIEncargado'}">
          <v-list-item-icon>
            <v-icon class="pb-4 pt-6">mdi-calendar</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="pb-4 pt-4">Inscripciones Enc</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{name:'Grado'}">
          <v-list-item-icon>
            <v-icon class="pb-4 pt-6">mdi-dns</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="pb-4 pt-4">Clases</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{name:'ListaTarea'}">
          <v-list-item-icon>
            <v-icon class="pb-4 pt-6">mdi-link</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="pb-4 pt-4">Listado Tareas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- Cierre Menu desplegable izquierdo-->

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
    draw: false,
    drawer: null,
  }),
};
</script>
