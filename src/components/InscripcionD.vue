<template>
  <v-card class="mx-auto mt-12" max-width="600">
    <ValidationObserver ref="observer" v-slot="{  }">
      <v-card-title>
        <h2 class="text-center">Inscripcion Docente</h2>
      </v-card-title>
      <form class="mr-5 ml-5 mt-5 mb-12" name="formulario">
        <ValidationProvider v-slot="{ errors }" name="fecha" rules="required|max:10">
          <v-text-field v-model="fecha" :error-messages="errors" label="Fecha Inscripcion" disabled></v-text-field>
        </ValidationProvider>
        <!-- <ValidationProvider v-slot="{ errors }" name="codigoG" rules="required|max:10">
        <v-text-field
          v-model="codigoG"
          :error-messages="errors"
          label='Codigo de Grado'
        ></v-text-field>
        </ValidationProvider>-->
        <ValidationProvider v-slot="{ errors }" name="docente" rules="required">
        <v-text-field
          v-model="docente"
          :error-messages="errors"
          label='Docente'
          disabled
        ></v-text-field>
        </ValidationProvider> 
        <ValidationProvider v-slot="{ errors }" name="grado" rules="required">
          <v-select
            v-model="grado"
            :items="items"
            :error-messages="errors"
            label="Grado"
            required
          ></v-select>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="materia" rules="required">
          <v-select
            v-model="materia"
            :items="items2"
            :error-messages="errors"
            label="Materia"
            data-vv-name="materia"
            required
          ></v-select>
        </ValidationProvider>

        <v-btn class="mr-4 mb-8 mt-8" color="success" @click="submit" v-if="grado !='' && materia !='' && fecha !=''">Inscribir</v-btn>
        <v-btn class="mr-4 mb-8 mt-8 ml-12" color="orange" :to="{name:'LIDocente'}">Cancelar</v-btn>
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
    fecha: moment().format("YYYY-MM-DD"),
    codigoG: "",
    docente: "",
    materia: null,
    grado: null,
    items: [
      'Primer Grado',
      'Segundo Grado',
      'Tercer Grado',
      'Cuarto Grado',
      'Quinto Grado',
      'Sexto Grado',
      'Septimo Grado',
      'Octavo Grado',
      'Noveno Grado',
    ],
    items2: [
      "Lenguaje",
      "Sociales",
      "Ciencias Naturales",
      "Ingles",
      "Matematicas",
      "Educacion Fisica",
      "Educacion Artistica",
      "Musica"
    ],
    checkbox: null
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