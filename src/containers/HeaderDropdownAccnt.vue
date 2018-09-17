<template>
    <AppHeaderDropdown right no-caret>
  <template slot="header">
    <img src="../assets/images/user1.png" class="user-auth-img img-circle" alt="Аватар"/>
    <span class="user-online-status"></span>
  </template>\
  <template slot="dropdown">

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
    }
    }
</script>

<style scoped>

</style>
