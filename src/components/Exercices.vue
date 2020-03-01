<template>
  <v-container>
    <v-row>
      <v-col class="text-center" cols="12" md="6">
          <v-row>
            <v-text-field
            v-model="title"
            label="Exercise title"></v-text-field>
            <v-btn color="primary"
            @click="save">
            Save
            </v-btn>
          </v-row>
          <v-textarea
          v-model="instructions"
          name="input-7-1"
          label="Instructions"
          value=""></v-textarea>
      </v-col>
      <v-col class="text-center" cols="12" md="6">
          <v-btn color="primary"
            @click="runCode">
            Run Code
            </v-btn>
        <v-textarea
          name="input-7-1"
          label="Sandbox"
          value=""></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Exercices',
  data: () => ({
    instructions: '',
    title: ''
  }),
  methods: {
    async save () {
      const axios = require('axios')
      await axios.post('http://localhost:3000/api/v1/exercise', {
        instructions: this.instructions,
        lang: 'pyhton',
        title: this.title,
        tests: '',
        solution: '',
        template_regions: [''],
        template_regions_rw: [0],
        difficulty: 1,
        score: 1,
        creation_date: '01-02-2020'
      })
    },
    async runCode () {

    }
  }
}
</script>
