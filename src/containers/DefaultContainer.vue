<template>
  <div class="app">
    <!-- Top Menu Items -->
    <AppHeader fixed>

      <b-link class="navbar-brand" to="#">
        <img class="navbar-brand-full" src="../assets/logo.png"  alt="Doodle">
        <span class="brand-text">doodle</span>

      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg"></SidebarToggler>
      <b-navbar-nav class="d-md-down-none">
        <b-nav-item class="px-3" to="/dashboard">Dashboard</b-nav-item>
        <b-nav-item class="px-3" to="/users" exact>Users</b-nav-item>
        <b-nav-item class="px-3">Settings</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="d-md-down-none">
          <i class="icon-bell"></i>
          <b-badge pill variant="danger">5</b-badge>
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
          <i class="icon-list"></i>
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
          <i class="icon-location-pin"></i>
        </b-nav-item>

      </b-navbar-nav>

      <!--<AsideToggler class="d-lg-none" mobile />-->

    </AppHeader>
  </div>
</template>

<script>
  import nav from '../_nav'
  import {Header as AppHeader, SidebarToggler, Sidebar as AppSidebar,
    SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer,
    SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter,
    Breadcrumb} from "@coreui/vue"
    export default {
        name: "full",
      components: {
          AppHeader,
        AsideToggler,
        AppSidebar,
        SidebarToggler
      },
      data () {
        return {
          nav: nav.items
        }
      },
      computed: {
        name() {
          return this.$route.name
        },
        list() {
          return this.$route.matched.filter((route) => route.name || route.meta.label)
        }
      }
      }
</script>

<style scoped>

</style>
