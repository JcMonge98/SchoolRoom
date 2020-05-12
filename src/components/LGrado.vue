<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :search="buscar"
    class="elevation-5 mr-12 ml-12 mt-8"
  >
    <template v-slot:top>
      <!-- encabezado de la tabla -->
      <v-toolbar flat color>
        <v-toolbar-title>
          <h3 class="text-center">Listado de Grados</h3>
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

        <!-- formulario temporal -->
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="success" dark class="mb-2" v-on="on"
              >Nuevo Grado</v-btn
            >
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <ValidationObserver ref="observer" v-slot="{}">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="3">
                      <v-text-field
                        v-model="editedItem.id"
                        label="Codigo"
                        disabled
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="grado"
                        rules="required"
                      >
                        <v-select
                          v-model="editedItem.grado"
                          :items="items2"
                          :error-messages="errors"
                          label="Grado"
                          required
                        ></v-select>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="seccion"
                        rules="required"
                      >
                        <v-select
                          v-model="editedItem.seccion"
                          :items="items"
                          :error-messages="errors"
                          label="Seccion"
                          required
                        ></v-select>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                </v-container>
              </ValidationObserver>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="save" v-if="editedItem.grado !='' && editedItem.seccion != ''" >Guardar</v-btn>
            </v-card-actions>
          </v-card>
          <!-- Cierre formulario temporal -->
        </v-dialog>
      </v-toolbar>
    </template>

    <!-- Datos de la tabla -->
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
// ---------- validaciones con vee-validate -------------
import { required, email, max } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} no se permite vacio",
});

// ---------- Cierre validaciones con vee-validate -------------

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    buscar: "",
    grado:null,
    seccion:null,
    dialog: false,
    items: ['A', 'B', 'C', 'D'],
    items2: [
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
    //columnas de la tabla
    headers: [
      {
        text: "Codigo",
        align: "start",
        sortable: false,
        value: "id",
      },
      {
        text: "Grado",
        sortable: false,
        value: "grado",
      },
      ,
      {
        text: "Seccion",
        sortable: false,
        value: "seccion",
      },
      { text: "Actions", value: "actions", sortable: false },
    ],

    //datos para la tabla
    desserts: [],
    editedIndex: -1,
    //inicializa vacio
    editedItem: {
      id: "",
      grado: "",
      seccion: "",
    },
    defaultItem: {
      id: "",
      grado: "",
      seccion: "",
    },
  }),
  // titulo de ventana de Dialogo
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Grado" : "Modificar Grado";
    },
  },

  // llama el dialog
  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    //muestra los datos de la tabla
    initialize() {
      this.desserts = [
        {
          id: "1",
          grado: "Primer grado",
          seccion: 'A',
        },
        {
          id: "2",
          grado: "Primer grado",
          seccion: 'B',
        },
        {
          id: "3",
          grado: "Primer grado",
          seccion: 'c',
        },
        {
          id: "4",
          grado: "Segundo grado",
          seccion: 'A',
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
    },
  },
};
</script>
