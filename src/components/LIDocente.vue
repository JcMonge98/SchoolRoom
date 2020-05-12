<template>
  <v-data-table :headers="headers" :items="desserts" :search="buscar" class="elevation-5 mr-12 ml-12 mt-8">
    <template v-slot:top>
      <!-- encabezado de la tabla -->
      <v-toolbar flat color>
        <v-toolbar-title>
          <h3 class="text-center">Listado Inscripciones Docentes</h3>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- input de busqueda(filtro) -->
        <v-text-field
          class="text-xs-center"
          v-model="buscar"
          append-icon="search"
          label="Busqueda"
          single-line
          hide-details
          color="danger"
        ></v-text-field>
        <v-spacer></v-spacer>
        <template >
            <v-btn color="success" dark class="mb-2" :to="{name:'InscripcionD'}">Inscribir</v-btn>
          </template>
      </v-toolbar>
    </template>

    <!-- Datos de la tabla -->
    <template v-slot:item.actions="{ item }">
        <v-btn icon :to="{name:'EditarIDocente'}">
      <v-icon small class="mr-2" >mdi-pencil</v-icon>
      </v-btn>
      <v-btn icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </v-btn>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>

export default {
  
  data: () => ({
    buscar: "",
    //columnas de la tabla
    headers: [
      {
        text: "Codigo",
        align: "start",
        sortable: false,
        value: "id"
      },
      {
        text: "Fecha Inscripcion",
        sortable: false,
        value: "fecha"
      },
      {
        text: "Docente",
        sortable: false,
        value: "docente"
      },
      {
        text: "Grado",
        sortable: false,
        value: "grado"
      },
      {
        text: "Materia",
        sortable: false,
        value: "materia"
      },
      { text: "Actions", value: "actions", sortable: false }
    ],

    //datos para la tabla
    desserts: [],
    editedIndex: -1,
    //inicializa vacio
    editedItem: {
      id: "",
      fecha: "",
      docente: "",
      grado:"",
      materia:""
    },
    defaultItem: {
      id: "",
      fecha: "",
      docente: "",
      grado:"",
      materia:""
    }
  }),
  

  created() {
    this.initialize();
  },

  methods: {
    //muestra los datos de la tabla
    initialize() {
      this.desserts = [
        {
          id: "1",
      fecha: "2020/02/10",
      docente: "Pablo Escobar",
      grado:"Primero B",
      materia:"Ciencias Naturales"
        },
        {
          id: "2",
      fecha: "2020/02/10",
      docente: "Pablo Escobar",
      grado:"Primero B",
      materia:"Ciencias Naturales"
        },
        {
          id: "3",
      fecha: "2020/02/10",
      docente: "Pablo Escobar",
      grado:"Primero B",
      materia:"Ciencias Naturales"
        },
        
      ];
    },
    //metdo editar
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    //metdo eliminar
    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Estas seguro de querer eliminar el registro?") &&
        this.desserts.splice(index, 1);
    },
    //metdo cerrar dialog
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    //metodo guardar
    save() {
      this.$refs.observer.validate();
      if (this.editedIndex > 0) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },

    //metodo limpia los campos del dialog
    clear() {
      this.grado = null;
      this.seccion = null;
      this.$refs.observer.reset();
    }
  }
};
</script>
