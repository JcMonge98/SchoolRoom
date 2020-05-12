<template>
  <v-content>
    ´
    <v-row dense>
      <v-col cols="12">
        <v-card color="#1F7087" dark class="mr-5 ml-5">
          <v-card-title class="headline">Nombre de la Materia
            <v-btn class="offset-md-8" tile outlined dark color="white" :to="{name:'NuevaTarea'}">
              <v-icon left>mdi-pencil</v-icon>Nueva tarea
            </v-btn>
          </v-card-title>
          <h4 class="ml-4">Grado</h4>
          <v-card-subtitle class="mt-0">Nombre del Docente</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="3">
        <v-card color elevation="5" class="ml-5 mt-5">
          <v-card-title class="headline">Fecha de entrega Proxima</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="mt-0">***Yuju no tienes tareas pendientes***</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card color elevation="5" class="ml-12 mt-5">
          <v-card-title class="headline">
            Nombre del Docente
            <v-btn class="offset-md-5" tile outlined color="success" :to="{name:'EditarTarea'}">
              <v-icon left>mdi-pencil</v-icon>Editar
            </v-btn>
            <v-btn class="ml-12" tile outlined color="red">
              <v-icon left>mdi-delete</v-icon>Eliminar
            </v-btn>
          </v-card-title>
          <v-card-subtitle class="mt-0">2020/05/11</v-card-subtitle>
          <v-divider></v-divider>
          <v-card-text class="mt-0">
            <p>
              Presentar en hojas de papel bond escrito a mano e ilustrado lo siguiente:
              <br />*Mapa de America con sus Respectivos volcanes
              <br />*Mapa de America con sus rios y lagos
              <br />*Mapa de America con sus placas tectonicas
              <br />*Mapa de America con sus Respectivos volcanes
              <br />*Mapa de America con sus rios y lagos
              <br />*Mapa de America con sus placas tectonicas.
              <br />Se entregara de forma individual.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import moment from "moment"; //para fecha
export default {
  data() {
    return {
      fecha: moment().format("YYYY/MM/DD")
    };
  }
};
</script>