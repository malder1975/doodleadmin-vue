<template>
    <AppHeaderDropdown right no-caret>
  <template slot="header">
    <img src="../assets/images/user1.png" class="user-auth-img img-circle" alt="Аватар" />
    <span class="user-online-status"></span>
  </template>\
  <template slot="dropdown" v-if="animateDropdown">
    <!--transition-group :name="dropdown-flipinX"-->
    <div class="animated flipInX">
      <b-dropdown-item><i class="fas fa-user"></i>Профиль </b-dropdown-item>
      <b-dropdown-item><i class="far fa-credit-card"></i>Мои финансы </b-dropdown-item>
      <b-dropdown-item><i class="fas fa-envelope"></i>Входящие
      <b-badge variant="success">{{ itemsCount }}</b-badge></b-dropdown-item>
      <b-dropdown-item><i class="fas fa-cog"></i>Настройки </b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item><i class="fas fa-check color-green"></i> Доступен</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item><i class="fas fa-power-off"></i>Выход </b-dropdown-item>
    </div>
    <!--/transition-group-->
  </template>
    </AppHeaderDropdown>
</template>

<script>
  import {
    HeaderDropdown as AppHeaderDropdown
  } from '@coreui/vue'
  export default {
        name: "HeaderDropdownAccnt",
        components: {
          AppHeaderDropdown
    },
    data: () => {
          return {itemsCount: 34}
    },

    methods: {
      animateDropdown() {
        if (this.$parent.$el.className == 'show') {
          console.log('sssssssss')
        }
         this.$emit('show', 'is dropper')


              //e.addClass('animated flipInX')


          }
    }
  }
</script>

<style scoped>

</style>
