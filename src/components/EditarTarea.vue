<template>
  <v-card class="mx-auto mt-7 elevation-5"  max-width="600">
    <ValidationObserver ref="observer" v-slot="{  }">
      <v-card-title>
        <h2 class="text-center">Modificar Tarea</h2>
      </v-card-title>
      <form class="mr-5 ml-5 mt-5 mb-12" name="formulario">
<ValidationProvider v-slot="{ errors }" name="id" rules="required|max:10">
        <v-text-field
          v-model="id"
          :error-messages="errors"
          label='Codigo'
          disabled
        ></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="idInscripcion" rules="required|max:10">
        <v-text-field
          v-model="idInscripcion"
          :error-messages="errors"
          label='Inscripcion'
          disabled
        ></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="fecha" rules="required|max:10">
          <v-text-field v-model="fecha" :error-messages="errors" label="Fecha Publicacion" disabled></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="fechaE" rules="required|max:10">
        <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            :error-messages="errors"
            label="Fecha Entrega"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
      </v-menu>
      </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="descripcion" rules="required">
            <v-textarea
          v-model="descripcion"
          :error-messages="errors"
          outlined
          label="Descripcion de tarea"
        ></v-textarea>
        </ValidationProvider>
        <v-btn class="mr-4 mb-8 mt-8" color="success" @click="submit" v-if="descripcion !='' && date !='' && fecha !=''">Asignar Tarea</v-btn>
        <v-btn class="mr-4 mb-8 mt-8 ml-12" color="orange" :to="{name:'Tarea'}">Cancelar</v-btn>
      </form>
    </ValidationObserver>
  </v-card>
</template>






<script>
import { required, email, max } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";

import moment from "moment"; //para fecha

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} no se permite vacio"
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    fecha: moment().format("YYYY-MM- DD"),
    fechaE: "",
    inscripcion: "",
    descripcion: "",
    date: new Date().toISOString().substr(0, 10),
      menu2: false,
      id:'',
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
      console.log(this.fecha);
      console.log(this.grado);
      console.log(this.materia);
    },
    clear() {
      this.name = "";
      this.email = "";
      this.grado = null;
      this.seccion = null;
      this.docente = null;
      this.$refs.observer.reset();
    }
  }
};
</script>