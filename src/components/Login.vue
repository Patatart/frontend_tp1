<template>
  <v-container>
    <v-row>
      <v-col class="text-center" cols="12" md="4">
      </v-col>
      <v-col class="text-center" cols="12" md="4">
        <v-form v-model="valid">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required>
          </v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required>
          </v-text-field>
          <div class="my-2">
            <v-btn color="primary"
              @click="login">
              Log In
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    state: false,
    valid: false,
    email: '',
    password: '',
    emailRules: [
      v => !!v || 'Email is required',
      v => v !== 'Louis' || 'Louis is forbidden'
    ],
    passwordRules: [
      v => !!v || 'Password is required'
    ]
  }),
  methods: {
    login () {
      console.log('login')
    }
  }
}
</script>
