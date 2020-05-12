<template>
  <v-card class="mx-auto mt-12" max-width="600">
    <ValidationObserver ref="observer" v-slot="{  }">
      <v-card-title>
        <h2 class="text-center">Inscripcion Encargado</h2>
      </v-card-title>
      <form class="mr-5 ml-5 mt-5 mb-12" name="formulario">
        <ValidationProvider v-slot="{ errors }" name="fecha" rules="required">
          <v-text-field v-model="fecha" :error-messages="errors" label="Fecha Inscripcion" disabled></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="codigoG" rules="required">
        <v-text-field
          v-model="codigoG"
          :error-messages="errors"
          label='Codigo de Grado'
        ></v-text-field>
        </ValidationProvider> 
        <ValidationProvider v-slot="{ errors }" name="encargado" rules="required">
        <v-text-field
          v-model="encargado"
          :error-messages="errors"
          label='Encargado'
          disabled
        ></v-text-field>
        </ValidationProvider> 
        <ValidationProvider v-slot="{ errors }" name="grado" rules="required">
        <v-text-field
          v-model="grado"
          :error-messages="errors"
          label='Grado y Seccion'
          disabled
        ></v-text-field>
        </ValidationProvider> 
        <v-btn class="mr-4 mb-8 mt-8 ml-12" color="info" @click="clear" v-if="codigoG !=''">Buscar</v-btn>
        <v-btn class="mr-4 mb-8 mt-8 ml-12" color="success" @click="submit" >Inscribir</v-btn>
        <!-- otro +
        <v-btn class="mr-4 mb-8 mt-8 ml-12" color="success" @click="submit" v-if="codigoG !='' && grado !='' && fecha !='' && encargado !=''">Inscribir</v-btn>
        -->
        <v-btn class="mr-4 mb-8 mt-8 ml-12" color="orange" :to="{name:'LIEncargado'}">Cancelar</v-btn>
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
    encargado:'',
    codigoG: '',
    materia: '',
    grado: '',
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
      console.log(this.codigoG);
    },
    clear() {
      this.codigoG = "";
      this.encargado = "";
      this.grado = null;
      this.$refs.observer.reset();
    }
  }
};
</script>