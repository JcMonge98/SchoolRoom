<template>
  <v-data-table :headers="headers" :items="desserts" :search="buscar" class="elevation-5 mr-12 ml-12 mt-8">
    <template v-slot:top>
      <!-- encabezado de la tabla -->
      <v-toolbar flat color>
        <v-toolbar-title>
          <h3 class="text-center">Listado de Tareas</h3>
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
            <v-btn color="success" dark class="mb-2" v-on="on">Nueva Tarea</v-btn>
          </template>
          <!-- 
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <ValidationObserver ref="observer" v-slot="{}">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="3">
                      <v-text-field v-model="editedItem.id" label="Codigo" disabled></v-text-field>
                    </v-col>
                  </v-row>

                  <ValidationProvider v-slot="{ errors }" name="descripcion" rules="required">
                    <v-textarea
                      v-model="editedItem.descripcion"
                      :error-messages="errors"
                      required
                      label="Descripcion"
                      auto-grow
                      rows="2"
                      row-height="8"
                    ></v-textarea>
                  </ValidationProvider>

                  <v-col cols="12" sm="12" md="12">
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="asignacion"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="asignacion"
                          label="Fecha Asignada"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="asignacion" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.menu.save(asignacion)">OK</v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>

                  <v-col cols="12" sm="12" md="12">
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="entrega"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="entrega"
                          label="Fecha Entrega"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="entrega" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.menu.save(entrega)">OK</v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>

                  <ValidationProvider v-slot="{ errors }" name="apellido" rules="required">
                    <v-text-field
                      v-model="editedItem.apellido"
                      :error-messages="errors"
                      label="Apellidos"
                      required
                    ></v-text-field>
                  </ValidationProvider>
                  <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
                    <v-text-field
                      v-model="editedItem.email"
                      :error-messages="errors"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </ValidationProvider>
                </v-container>
              </ValidationObserver>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="close">Cancelar</v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
                v-if="editedItem.nombre !='' && editedItem.apellido != '' && editedItem.email != ''"
              >Guardar</v-btn>
            </v-card-actions>
          </v-card>
          -->
          <!-- Cierre formulario temporal -->
        </v-dialog>
      </v-toolbar>
    </template>

    <!-- Datos de la tabla -->
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)" disabled>mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)" disabled>mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize" disabled>Reset</v-btn>
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
  setInteractionMode
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} no se permite vacio"
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters"
});

extend("email", {
  ...email,
  message: "Email no valido"
});
// ---------- Cierre validaciones con vee-validate -------------

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    buscar: "",
    dialog: false,
    //columnas de la tabla
    headers: [
      {
        text: "Codigo",
        align: "start",
        sortable: false,
        value: "id"
      },
      {
        text: "Descripcion",
        sortable: false,
        value: "descripcion"
      },
      {
        text: "Fecha Asignacion",
        sortable: false,
        value: "asignacion"
      },
      {
        text: "Fecha Entrega",
        sortable: false,
        value: "entrega"
      },
      {
        text: "Inscripcion",
        sortable: false,
        value: "inscripcion"
      },
      { text: "Actions", value: "actions", sortable: false }
    ],

    //datos para la tabla
    desserts: [],
    editedIndex: -1,
    //inicializa vacio
    editedItem: {
      id: "",
      descripcion: "",
      asignacion: "",
      entrega: "",
      inscripcion: ""
    },
    defaultItem: {
      id: "",
      descripcion: "",
      asignacion: "",
      entrega: "",
      inscripcion: ""
    }
  }),
  // titulo de ventana de Dialogo
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nueva Tarea" : "Modificar Tarea";
    }
  },

  // llama el dialog
  watch: {
    dialog(val) {
      val || this.close();
    }
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
          descripcion:
            "Entrega del mapa de America Central con sus rios y lagos",
          asignacion: "2020-01-12",
          entrega: "2020-01-24",
          inscripcion: "1"
        },
        {
          id: "2",
          descripcion: "Entrega del mapa de America Central con sus volcanes",
          asignacion: "2020-01-12",
          entrega: "2020-01-24",
          inscripcion: "1"
        }
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
