<template>
  <div class="app">
    <div class="wrapper">
    <!-- Top Menu Items -->
    <AppHeader fixed>
      <div class="nav-header">
      <div class="logo-wrap">
      <b-link class="navbar-brand" to="#">
        <img class="brand-img" src="../assets/logo.png"  alt="Doodle">
        <span class="brand-text">doodle</span>
      </b-link>
      </div>
      </div>
      <SidebarToggler class="d-md-down-none" display="lg"></SidebarToggler>
      <b-nav-form class="top-nav-search" id="search-form" role="search">
        <b-input-group>
          <b-form-input type="text" placeholder="Search"></b-form-input>
          <b-input-group-append class="input-group-btn">
            <b-btn  variant="default"><i class="fas fa-search"></i> </b-btn>
          </b-input-group-append>
        </b-input-group>

      </b-nav-form>
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
