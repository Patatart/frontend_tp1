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
        <v-row>
          <v-spacer></v-spacer>
          <v-label>Code</v-label>
          <v-spacer></v-spacer>
          <v-btn color="primary"
            @click="runCode">
            Run Code
          </v-btn>
        </v-row>
        <div id="editor" class="exercise-editor-ace-editor"></div>
        <v-label>Tests</v-label>
        <div id="tests" class="exercise-editor-ace-editor"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ace from 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/webpack-resolver'

export default {
  name: 'Exercices',
  data: () => ({
    instructions: '',
    title: '',
    editor: null,
    tests: null
  }),
  mounted () {
    this.editor = ace.edit('editor')
    this.editor.setTheme('ace/theme/monokai')
    this.editor.session.setMode(`ace/mode/${this.lang}`)
    this.tests = ace.edit('tests')
    this.tests.setTheme('ace/theme/monokai')
    this.tests.session.setMode(`ace/mode/${this.lang}`)
    this.tests.setValue('insert your tests here')
  },
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
      const axios = require('axios')
      await axios.post('http://localhost:3000/api/v1/exercise/sandbox', {
        lang: 'pyhton',
        tests: this.tests.getValue(),
        solution: this.editor.getValue()
      })
    }
  }
}
</script>

<style>
.exercise-editor-ace-editor {
  position: relative;
  height: 20rem;
}
</style>
