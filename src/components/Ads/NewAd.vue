<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new Ad</h1>
        <v-form v-model="valid" ref="form" validation class="mb-3">
          <v-text-field
                  name="title"
                  label="Ad title"
                  type="text"
                  reguired
                  :rules="[v => !!v || 'Title is req']"
                  v-model="title"
          >

          </v-text-field>
          <v-text-field
                  name="description"
                  label="Ad description"
                  type="text"
                  multi-line
                  v-model="description"
                  :rules="[v => !!v || 'Description is req']"
          >

          </v-text-field>
        </v-form>
        <v-layout row mb-3>
          <v-flex xs12>
            <v-btn class="warning">
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img src="" height="100">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch
                    v-model="promo"
                    color="primary"
                    label="Add to promo ?"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn class="success"
                   @click="createAd"
                   :disabled="!valid"
            >
              Create ad
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo
          }
          console.log(ad);
        }
      }
    }
  }
</script>
