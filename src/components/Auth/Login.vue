<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" validation>
              <v-text-field
                      prepend-icon="person"
                      name="email"
                      label="Email"
                      type="email"
                      :rules="emeilRules"
                      v-model="email"
              >

              </v-text-field>
              <v-text-field
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      id="password"
                      type="password"
                      :counter="6"
                      v-model="password"
                      :rules="passwordRules"

              >

              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    @click="onSubmit"
                    :disabled="!valid || loading"
                    :loading="loading"
                    color="primary">
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        valid: false,
        emeilRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must be or more'
        ]
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      //eslint-disable-next-line
        onSubmit () {
          if (this.$refs.form.validate()) {
            //eslint-disable-next-line
            const user = {
              email: this.email,
              password: this.password
            }
            this.$store.dispatch('loginUser', user)
                    .then(() => {
                      this.$router.push('/')
                    })
                    .catch(() => {})
          }
        }
    }
  }
</script>
