<template>

    <!--b-card no-body bg-variant="transpatent" class="nav-justified"-->
      <b-tabs  class="nav-justified " >
        <b-tab title="Чат" >
          <div class="chat-cmplt-wrapper">
            <div class="chat-box-wrapper">
              <div class="add-friend">
              <a class="d-inline-block txt-grey" href="#">
                <i class="fas fa-ellipsis-h"></i>
              </a>
                <span class="d-inline-block txt-dark">Пользователи</span>
                <a class="d-inline-block txt-grey" href="#">
                  <i class="fas fa-plus"></i>
                </a>
              </div>
              <b-nav-form class="chat-search pl-lg-3 pr-lg-2 pb-lg-2">
                <b-input-group>
                  <b-form-input type="text" id="chat-input" name="chat-input" placeholder="Поиск"></b-form-input>
                  <b-input-group-append class="input-group-btn">
                    <b-btn variant="default"><i class="fas fa-search"></i> </b-btn>
                  </b-input-group-append>
                </b-input-group>
              </b-nav-form>
            </div>
          </div>
        </b-tab>
        <b-tab title="Messages" >

        </b-tab>
        <b-tab title="Todo" >

        </b-tab>

      </b-tabs>

    <!--/b-card-->
</template>

<script>
    export default {
        name: "DefRightAside",
      data () {
          return {
            tabIndex: 0
          }
      },
      methods: {
          linkClass(idx) {
            if (this.tabIndex === idx) {
              return ['bg-primary', 'text-light']
            } else {
              return ['bg-light', 'text-info']
            }
          }
      }
    }
</script>

<style scoped>

</style>
