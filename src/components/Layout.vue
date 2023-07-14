<template>
  <div>
    <input type="checkbox" name="" checked="checked" id="nav-click" />
    <div class="sidebar">
      <div class="sidebar-brand">
        <h2><i class="fa-solid fa-database"></i> <span>Accontsoft</span></h2>
      </div>
      <div class="sidebar-menu">
        <ul>
          <li>
            <router-link to="/" exact>
              <i class="fas fa-th-large"></i>
              <span>Dashboard</span>
            </router-link>
          </li>
          <li>
            <router-link to="/custumers" exact>
              <i class="fa-solid fa-users"></i>
              <span>Customers</span>
            </router-link>
          </li>
          <li>
            <router-link to="/schedule" exact>
              <i class="fa-solid fa-calendar"></i>
              <span>schedule</span>
            </router-link>
          </li>
          <li>
            <router-link to="/orders" exact>
              <i class="fa-sharp fa-solid fa-bag-shopping"></i>
              <span>Orders</span>
            </router-link>
          </li>
          <li>
            <router-link to="/inventory" exact>
              <i class="fa-solid fa-list"></i>
              <span>Inventory</span>
            </router-link>
          </li>
          <li>
            <router-link to="/accounts" exact>
              <i class="fa-solid fa-user"></i>
              <span>Accounts</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-content">
      <header>
        <h2>
          <label for="nav-click">
            <i class="fas fa-bars"></i>
          </label>
          Dashboard
        </h2>
        <div class="search-wrapper">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="seach" placeholder="seach here" />
        </div>
        <div class="user-wrapper">
          <img
            src="../assets/user.png"
            width="50px"
            height="50px"
            alt="user image"
          />
          <div>
            <h4>João Carlos</h4>
            <small>Administrator</small>
          </div>
        </div>
      </header>
      <main>
        <div class="cards">
          <div class="card-single">
            <div>
              <h1>54</h1>
              <span>Clientes </span>
            </div>
            <div>
              <i class="far fa-user-circle"></i>
            </div>
          </div>
          <div class="card-single">
            <div>
              <h1>12</h1>
              <span>serviços</span>
            </div>
            <div>
              <i class="fas fa-wrench"></i>
            </div>
          </div>
          <div class="card-single">
            <div>
              <h1>54</h1>
              <span>Agendamentos</span>
            </div>
            <div>
              <i class="fa-sharp fa-solid fa-clipboard-list"></i>
            </div>
          </div>
          <div class="card-single">
            <div>
              <h1>R$ 2.000,00</h1>
              <span>Faturamento</span>
            </div>
            <div>
              <i class="fas fa-wallet"></i>
            </div>
          </div>
        </div>

        <div class="recent-grid">
          <div class="projects">
            <div class="card">
              <div class="card-header">
                <h2>Clientes para hoje</h2>
                <button>See all <i class="fa-solid fa-arrow-right"></i></button>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <td>Nome</td>
                        <td>Telefone</td>
                        <td>instagram</td>
                        <td>Hora</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(c, index) in clients" :key="index">
                        <td>{{ c.name }}</td>
                        <td>{{ c.telefone }}</td>
                        <td>{{ c.instagram }}</td>
                        <td>
                          <span class="badge">{{ c.horario }}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="customers">
            <div class="card">
              <div class="card-header">
                <h2>Novos Clientes</h2>
                <button>See all <i class="fa-solid fa-arrow-right"></i></button>
              </div>
              <div class="card-body">
                <div class="customer">
                  <div class="info">
                    <img
                      src="../assets/user.png"
                      width="40px"
                      height="40px"
                      alt=""
                    />
                    <div>
                      <h4>João Carlos Belmiro</h4>
                      <small>dev junior</small>
                    </div>
                  </div>
                  <div class="contact">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-solid fa-phone"></i>
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                </div>
                <div class="customer">
                  <div class="info">
                    <img
                      src="../assets/user.png"
                      width="40px"
                      height="40px"
                      alt=""
                    />
                    <div>
                      <h4>João Carlos Belmiro</h4>
                      <small>dev junior</small>
                    </div>
                  </div>
                  <div class="contact">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-solid fa-phone"></i>
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                </div>
                <div class="customer">
                  <div class="info">
                    <img
                      src="../assets/user.png"
                      width="40px"
                      height="40px"
                      alt=""
                    />
                    <div>
                      <h4>João Carlos Belmiro</h4>
                      <small>dev junior</small>
                    </div>
                  </div>
                  <div class="contact">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-solid fa-phone"></i>
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                </div>
                <div class="customer">
                  <div class="info">
                    <img
                      src="../assets/user.png"
                      width="40px"
                      height="40px"
                      alt=""
                    />
                    <div>
                      <h4>João Carlos Belmiro</h4>
                      <small>dev junior</small>
                    </div>
                  </div>
                  <div class="contact">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-solid fa-phone"></i>
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="f-card">
          <div>
            <h2>Plugin de notificações criado</h2>
            <hr />
          </div>
          <div class="d-flex-notify">
            <button @click="successNotification" class="n-btn s-color">
              <i class="fas fa-check-circle"></i> Sucesso
            </button>
            <button @click="atentionNotification" class="n-btn a-color">
              <i class="fa fa-exclamation-triangle"></i> Atenção
            </button>
            <button @click="infoNotification" class="n-btn i-color">
              <i class="fa fa-info-circle"></i> Info
            </button>
            <button @click="erroNotification" class="n-btn e-color">
              <i class="fa fa-times-circle-o"></i> Erro
            </button>
          </div>
        </div>
        <div class="f-card">
          <div>
            <h2>Formulário de cadastro</h2>
            <hr />
          </div>
          <div class="d-flex">
            <div class="input-field-container">
              <Select-Field label="Pais" :value="select" v-model="select" />
            </div>
            <div class="input-field-container">
              <Input-Field label="Nome Completo" :value="nome" v-model="nome" />
            </div>
            <div class="input-field-container">
              <Input-Field label="E-mail" :value="email" v-model="email" />
            </div>
            <div class="input-field-container">
              <Input-Field
                typeInput="date"
                label="Data de nascimento"
                :value="dataNasc"
                v-model="dataNasc"
              />
            </div>
            <div class="input-field-container">
              <Input-Field
                typeInput="password"
                label="Senha"
                :value="senha"
                v-model="senha"
              />
            </div>
            <div class="input-field-container">
              <Input-Field
                typeInput="password"
                label="Confirmar senha"
                :value="senha"
                v-model="senha"
              />
            </div>
          </div>
          <div class="d-confirm">
            <Check-Box v-bind:value="checkbox" v-model="checkbox" />
            <span
              :class="{ 't-confirm': checkbox, 't-not-confirm': !checkbox }"
            >
              Confirmo receber notificações por E-mail
            </span>
          </div>
          <div class="d-flex-submit">
            <button class="save-btn"><i class="fas fa-save"></i> Salvar</button>
            <button class="clear-btn">
              <i class="fas fa-times"></i> Limpar Tudo
            </button>
          </div>
        </div>
        <div></div>
      </main>
    </div>
  </div>
</template>

<script>
import InputField from './InputField.vue'
import SelectField from './SelectField.vue'
import CheckBox from './CheckBox.vue'
export default {
  components: {
    InputField,
    SelectField,
    CheckBox
  },
  data () {
    return {
      nome: null,
      select: '',
      email: '',
      dataNasc: null,
      checkbox: true,
      senha: '',
      clients: [
        {
          name: 'joao',
          telefone: '91983529700',
          instagram: '@joao_carlos',
          horario: '09:00'
        },
        {
          name: 'joao',
          telefone: '91983529700',
          instagram: '@joao_carlos',
          horario: '09:00'
        },
        {
          name: 'joao',
          telefone: '91983529700',
          instagram: '@joao_carlos',
          horario: '09:00'
        },
        {
          name: 'joao',
          telefone: '91983529700',
          instagram: '@joao_carlos',
          horario: '09:00'
        },
        {
          name: 'joao',
          telefone: '91983529700',
          instagram: '@joao_carlos',
          horario: '09:00'
        }
      ]
    }
  },
  methods: {
    successNotification () {
      this.$notify({
        icon: 'fas fa-check-circle',
        message: 'Exemplo de notificação de sucesso',
        color: '#28a745',
        duration: 3000 // Tempo em milissegundos (5 segundos)
      })
    },
    erroNotification () {
      this.$notify({
        icon: 'fa fa-times-circle-o',
        message: 'Exemplo de notificação de erro',
        color: '#dc3545',
        duration: 5000 // Tempo em milissegundos (5 segundos)
      })
    },
    atentionNotification () {
      this.$notify({
        icon: 'fa fa-exclamation-triangle',
        message: 'Exemplo de notificação de Atenção',
        color: '#ffc107',
        duration: 5000 // Tempo em milissegundos (5 segundos)
      })
    },
    infoNotification () {
      this.$notify({
        icon: 'fa fa-info-circle',
        message: 'Exemplo de notificação de info',
        color: '#17a2b8',
        duration: 7000 // Tempo em milissegundos (5 segundos)
      })
    }
  }
}
</script>

<style lang="scss">
#nav-click {
  display: none;
}
@media only screen and (min-width: 768px) {
  #nav-click:checked ~ .main-content {
    margin-left: 80px;
    header {
      width: calc(100% - 80px);
    }
  }
}
@media only screen and (max-width: 768px) {
  #nav-click:checked ~ .sidebar {
    left: 0 !important;
    width: 250px;
    z-index: 1;

    .sidebar-brand {
      padding: 1.5rem 0 1rem 1.7rem !important;
    }
  }
}
@media only screen and (min-width: 769px) {
  #nav-click:checked ~ .sidebar {
    width: 80px;
    &:hover {
      width: 250px;
      .sidebar-brand {
        padding: 1.5rem 0 1rem 1.7rem !important;
        h2 {
          span {
            transition: 0.3s;
            display: block;
          }
        }
      }
      .sidebar-menu {
        ul {
          li {
            padding-left: 1rem;
            text-align: center;
            a {
              span {
                display: block;
              }
            }
          }
        }
      }
    }
    .sidebar-brand {
      h2 {
        span {
          transition: 500ms;
          display: none;
        }
      }
    }

    .sidebar-menu {
      ul {
        li {
          padding-left: 0.5rem;
          text-align: center;
          a {
            span {
              display: none;
            }
          }
        }
      }
    }
  }
}
#nav-click:checked ~ .main-content {
  header {
    @media only screen and (max-width: 768px) {
      width: 100% !important;
      left: 0 !important;
    }
  }
}
.sidebar {
  width: 250px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background: $primary;
  z-index: 1;
  transition: width 500ms;
  overflow-y: auto !important;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 25px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 25px;
    background-color: #ccc;
  }

  @media only screen and (max-width: 768px) {
    left: -100%;
    transition: 0.2s ease-in;

    #nav-click:checked ~ .sidebar {
      left: 0 !important;
      z-index: 10 !important;
      width: 250px !important;
    }
  }

  &:hover {
    width: 250px;
    z-index: 13;
  }
  .sidebar-brand {
    height: 90px;
    padding: 2rem 0 1rem 1.7rem;
    color: #fff;
    h2 {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;

      span {
        display: flex;
        padding-left: 1rem;
      }
    }
  }

  .sidebar-menu {
    margin-top: 1rem;
    li {
      width: 100%;
      margin-bottom: 2rem;
      padding-left: 1rem;
      a {
        display: block;
        padding-left: 1rem;
        color: #f1f5f0;
        font-size: 1.1rem;
        font-weight: 580;
        letter-spacing: 1px;
        display: flex;
        align-items: center;
        transition: 0.2s ease-in;
        &:hover {
          background: #f1f5f0;
          padding-top: 1rem;
          padding-bottom: 1rem;
          color: $primary;
          border-radius: 30px 0 0 30px;
        }
        &.router-link-exact-active {
          background: #f1f5f0;
          padding-top: 1rem;
          padding-bottom: 1rem;
          color: $primary;
          border-radius: 30px 0 0 30px;
        }
        i {
          font-size: 1.5rem;
          padding-right: 1rem;
        }
      }
    }
  }
}
.main-content {
  transition: margin-left 500ms;
  margin-left: 250px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0rem;
  }
  header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    position: fixed;
    width: calc(100% - 250px);
    background: #fff;
    top: 0;
    z-index: 2;
    transition: width 500ms;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }

    h2 {
      @media only screen and (max-width: 560px) {
        font-size: 0.8rem;
      }
    }
    .search-wrapper {
      border: 2px solid #ccc;
      border-radius: 30px;
      height: 50px;
      display: flex;
      align-items: center;
      @media only screen and (max-width: 768px) {
        display: none;
      }
      i {
        display: inline-block;
        padding: 0rem 1rem;
        font-size: 1.5rem;
      }
      input {
        border-radius: 50%;
        height: 90%;
        padding-left: 0.2rem;
        border: none;
        outline: none;
      }
    }

    .user-wrapper {
      display: flex;
      align-items: center;

      img {
        border-radius: 50%;
        margin-right: 1rem;
      }

      small {
        margin-top: -3px !important;
        display: inline-block;
        color: $grey;
      }
    }

    h2 {
      color: #222;
      display: flex;
      column-gap: 1rem;
      align-items: center;
    }

    label {
      cursor: pointer;
      border-radius: 50%;
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 1px 1px 1px #888888;
      &:hover {
        opacity: 0.8;
      }
      i {
        font-size: 1.7rem;
      }
      @media only screen and (max-width: 768px) {
        background: $primary;
        border-radius: 50%;
        border: 1px solid $primary;
        color: #fff;
        text-align: center;
      }
    }
  }
}
main {
  margin-top: 80px;
  padding: 2rem 1.5rem;
  background: #f1f5f0;
  @media only screen and (max-width: 970px) {
  }
  .cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    margin-top: 1rem;
    @media only screen and (max-width: 1280px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (max-width: 970px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 766px) {
      grid-template-columns: 100%;
    }
    .card-single {
      display: flex;
      justify-content: space-between;
      background: #fff;
      padding: 2rem;
      border-radius: 8px;
      border: 1px solid $grey;
      div {
        span {
          color: $grey;
          font-size: 1.1rem;
          margin-top: 0.5rem;
        }

        i {
          font-size: 3rem;
          color: $primary;
        }
      }

      &:last-child {
        border: none;
        background: $primary;
        color: #fff;
        div {
          span {
            color: #fff;
          }
          i {
            color: white;
          }
        }
      }
    }
  }

  .recent-grid {
    margin-top: 3.5rem;
    display: grid;
    grid-template-columns: 67% auto;
    grid-gap: 2rem;
    @media only screen and (max-width: 970px) {
      grid-template-columns: 57% 40%;
      grid-gap: 3%;
    }
    @media only screen and (max-width: 768px) {
      grid-template-columns: 100%;
    }
    .projects {
      .card {
        background: #fff;
        border-radius: 5px;
        border: 1px solid #8c92ac;
        .card-header {
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #f7f7f7;
          button {
            background: $primary;
            border-radius: 10px;
            color: #fff;
            font-size: 0.8rem;
            border: 1px solid $primary;
            padding: 0.5rem 1rem;
            cursor: pointer;
            &:hover {
              opacity: 0.9;
            }
          }
        }

        .card-body {
          padding: 1rem;
          .table-responsive {
            width: 100%;
            overflow-x: auto;
            table {
              border-collapse: collapse;
              width: 100%;

              thead {
                tr {
                  border-top: 1px solid #8c92ac;
                  border-bottom: 1px solid #8c92ac;

                  td {
                    font-weight: 700;
                    padding: 0.5rem 1rem;
                    font-size: 1.2rem;
                  }
                }
              }
              tbody {
                tr {
                  td {
                    padding: 0.5rem 1rem;
                    font-size: 1rem;

                    .badge {
                      color: #fff;
                      background: $primary;
                      border-radius: 10px;
                      padding: 0 1rem;
                      font-weight: 600;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .customers {
      .card {
        background: #fff;
        border: 1px solid #8c92ac;
        border-radius: 8px;
        padding: 1rem;
        .card-header {
          padding-bottom: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid f7f7f7;
          button {
            background: $primary;
            border-radius: 10px;
            color: #fff;
            font-size: 0.8rem;
            border: 1px solid $primary;
            padding: 0.5rem 1rem;
            cursor: pointer;

            &:hover {
              opacity: 0.9;
            }
          }
        }
        .card-body {
          .customer {
            margin-bottom: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &:last-child {
              margin-bottom: 0px;
            }
            .info {
              display: flex;
              align-items: center;
              h4 {
                font-size: 1rem;
                @media only screen and (max-width: 970px) {
                  font-size: 0.8rem;
                }
              }
              small {
                font-size: 0.8rem;
                font-weight: 600;
                color: $grey;
              }

              img {
                border-radius: 50%;
                margin-right: 1rem;
                border: 1px solid $primary;
              }
            }
            .contact {
              display: flex;
              flex-wrap: wrap;
              row-gap: 1rem;
              i {
                font-size: 1.2rem;
                display: inline-block;
                margin-left: 1rem;
                color: $primary;
                cursor: pointer;

                &.hover {
                  opacity: 0.9;
                }
              }
            }
          }
        }
      }
    }
  }
  .f-card {
    margin-top: 32px;
    border: 1px solid #8c92ac;
    padding: 16px;
    border-radius: 5px;

    div h2 {
      letter-spacing: 2px;
      color: $dark;
      padding-bottom: 16px;
    }

    div hr {
      color: #8c92ac;
    }
    .d-confirm {
      display: flex;
      align-items: center;

      span {
        letter-spacing: 1px;
        font-weight: 660;
      }
      .t-confirm {
        margin-left: 10px;
        color: $primary;
      }
      .t-not-confirm {
        margin-left: 10px;
        color: #8c92ac;
      }
    }
    .d-flex-submit {
      margin-top: 32px;
      display: flex;
      flex-direction: row;
      gap: 20px;
      flex-wrap: nowrap;

      .save-btn {
        height: 100%;
        color: #fff;
        background-color: $primary;
        font-size: 1rem;
        padding: 10px 16px;
        border-radius: 6px;
        letter-spacing: 1px;
        cursor: pointer;
        outline: none;
        border: 0;
        @media only screen and (max-width: 999px) {
          font-size: 0.8rem;
        }
        &:hover {
          opacity: 0.8;
        }

        i {
          margin-right: 5px;
        }
      }
      .clear-btn {
        height: 100%;
        color: #fff;
        background-color: $grey;
        font-size: 1rem;
        padding: 10px 16px;
        border-radius: 6px;
        letter-spacing: 1px;
        cursor: pointer;
        outline: none;
        border: 0;
        @media only screen and (max-width: 999px) {
          font-size: 0.8rem;
        }
        &:hover {
          opacity: 0.8;
        }

        i {
          margin-right: 5px;
        }
      }
    }
    .d-flex-notify {
      margin-top: 16px;
      display: flex;
      flex-direction: row;
      gap: 16px;
      flex-wrap: wrap;

      .n-btn {
        height: 100%;
        color: #fff;
        font-size: 1rem;
        padding: 10px 16px;
        border-radius: 6px;
        letter-spacing: 1px;
        cursor: pointer;
        outline: none;
        border: 0;
        @media only screen and (max-width: 999px) {
          font-size: 0.8rem;
        }
        &:hover {
          opacity: 0.8;
        }

        i {
          margin-right: 5px;
        }
      }
      .s-color {
        background-color: #28a745;
      }
      .e-color {
        background-color: #dc3545;
      }
      .a-color {
        background-color: #ffc107;
      }
      .i-color {
        background-color: #17a2b8;
      }
    }
  }
}

@media only screen and (max-width: 970px) {
}
</style>
