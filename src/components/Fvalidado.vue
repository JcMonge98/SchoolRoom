<template>
  <ValidationObserver ref="observer" v-slot="{  }">
    <form>
      <ValidationProvider v-slot="{ errors }" name="Name" rules="required|max:10">
        <v-text-field
          v-model="name"
          :counter="10"
          :error-messages="errors"
          label="Name"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="E-mail"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="grado" rules="required">
        <v-select
          v-model="grado"
          :items="items2"
          :error-messages="errors"
          label="grado"
          data-vv-name="grado"
          required
        ></v-select>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="seccion" rules="required">
        <v-select
          v-model="seccion"
          :items="items"
          :error-messages="errors"
          label="seccion"
          data-vv-name="seccion"
          required
        ></v-select>
      </ValidationProvider>

      <v-btn class="mr-4" @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </ValidationObserver>


</template><script>
  import { required, email, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} no se permite vacio',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({

      name: '',
      email: '',
      grado: null,
      seccion: null,
      items2: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: null,
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.grado = null
        this.seccion = null
        this.checkbox = null
        this.$refs.observer.reset()
      },
    },
  }
</script>