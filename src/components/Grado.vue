<template>
  <v-content>
    <!-- <v-row>
      <v-col md="6"
        offset-md="3">
        
      <v-select
        v-model="grado"
        label="Selecciona el grado"
        single-line
        append-icon="search"
        hide-details
      ></v-select>
      </v-col>
    </v-row>   -->
    <v-row>
      <v-col  md="3" v-for="(card,index) in cards" :key="index" class="mb-4 mr-12 mt-8 ml-12">
        <v-form action>
          <v-card class="mx-auto">
            <v-img class="white--text align-end" height="200px" src="../assets/fondo.jpg">
              <v-card-title>{{card.materia}}</v-card-title>
              <v-card-subtitle class="pb-0 white--text">{{card.docente}}</v-card-subtitle>
            </v-img>
            <v-card-text class="text--primary">
              <div>{{card.notificacion}}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text :to="{name:'Tarea'}">Entrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-content>
</template>
<script>
export default {
  data: () => ({
    grado: "",
    cards: [
      {
        materia: "Ciencias Naturales",
        docente: "Jose Napoleon",
        notificacion:
          "Entrega del mapa de centro america con sus respectivos lagos y volcanes"
      },
      {
        materia: "Estudios Sociales",
        docente: "Jose Napoleon",
        notificacion:
          "Entrega del mapa de centro america con sus respectivos lagos y volcanes"
      },
      {
        materia: "Lenguaje",
        docente: "Jose Napoleon",
        notificacion:
          "Entrega del mapa de centro america con sus respectivos lagos y volcanes"
      },
      {
        materia: "Matematicas",
        docente: "Jose Napoleon",
        notificacion:
          "Entrega del mapa de centro america con sus respectivos lagos y volcanes"
      },
      {
        materia: "Ingles",
        docente: "Jose Napoleon",
        notificacion:
          "Entrega del mapa de centro america con sus respectivos lagos y volcanes"
      }
    ]
  })
};
</script>
