import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GraficaPage } from '../pages/graficas/grafica';
import { HomePage } from '../pages/home/home';

import { GooglePage } from '../pages/homeGoogle/google';

import { ClientePage } from '../pages/clientes/clientes';

import { ListarClientesPage } from '../pages/ListarClientes/listarClientes';
import { DatosClientesPage } from '../pages/DatosClientes/datosClientes';
import { ModificarClientesPage } from '../pages/ModificarClientes/ModificarClientes';
import { CategoriasPage } from '../pages/Categorias/categorias';
import { DatosCategoriasPage } from '../pages/DatosCategorias/datosCategorias';
import { ListarCategoriasPage } from '../pages/ListarCategorias/listarCategorias';
import { ModificarCategoriasPage } from '../pages/ModificarCategorias/ModificarCategorias';
import { ComponentesPage } from '../pages/Componentes/componentes';
import { DatosComponentesPage } from '../pages/DatosComponentes/datosComponentes';
import { ListarComponentesPage } from '../pages/ListarComponentes/listarComponentes';
import { ModificarComponentesPage } from '../pages/ModificarComponentes/ModificarComponentes';
import { EmpleadoPage } from '../pages/Empleado/empleado';
import { DatosEmpleadosPage } from '../pages/DatosEmpleados/datosEmpleados';
import { ListarEmpleadosPage } from '../pages/ListarEmpleados/listarEmpleados';
import {ModificarEmpleadosPage } from '../pages/ModificarEmpleados/ModificarEmpleados';
import {PedidosPage} from '../pages/Pedidos/pedidos';
import {DatosPedidosPage} from '../pages/DatosPedidos/datosPedidos';
import {ListarPedidosPage} from '../pages/ListarPedidos/listarPedidos';
import {ModificarPedidosPage } from '../pages/ModificarPedidos/ModificarPedidos';
import {ProveedorPage} from '../pages/Proveedor/proveedor';
import {DatosProveedorPage} from '../pages/DatosProveedor/datosProveedor';
import {ListarProveedoresPage} from '../pages/ListarProveedores/listarProveedores';
import {ModificarProveedorPage} from '../pages/ModificarProveedor/ModificarProveedor';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Grafica', component: GraficaPage },
      { title: 'HomeFacebok', component: HomePage },
      { title: 'HomeGoogle', component: GooglePage },
      { title: 'Cliente', component: ClientePage },
      { title: 'Listar Cliene', component: ListarClientesPage},
      { title: 'Datos Clientes', component: DatosClientesPage},
      { title: 'Modificar Clientes', component: ModificarClientesPage},
      { title: 'Categoria', component: CategoriasPage },
      { title: 'Datos Categoria', component: DatosCategoriasPage},
      { title: 'Listar Categoria', component: ListarCategoriasPage },
      { title: 'Modificar Categorias', component: ModificarCategoriasPage},
      { title: 'Componentes', component: ComponentesPage},
      { title: 'Datos Componentes', component: DatosComponentesPage},
      { title: 'Listar Componentes', component: ListarComponentesPage},
      { title: 'ModificarComponentes', component: ModificarComponentesPage},
      { title: 'Empleado', component: EmpleadoPage},
      { title: 'Datos Empleados', component: DatosEmpleadosPage},
      { title: 'Listar Empleados', component: ListarEmpleadosPage},
      { title: 'Modificar Empleados', component: ModificarEmpleadosPage},
      { title: 'Pedidos', component: PedidosPage},
      { title: 'Datos Pedidos', component: DatosPedidosPage},
      { title: 'Listar Pedidos', component: ListarPedidosPage},
      { title: 'Modificar Pedidos', component: ModificarPedidosPage},
      { title: 'Proveedor', component: ProveedorPage},
      { title: 'Datos Proveedor', component: DatosProveedorPage},
      { title: 'Listar Proveedores', component: ListarProveedoresPage},
      { title: 'Modificar Proveedor', component: ModificarProveedorPage}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
