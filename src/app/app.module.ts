import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { Facebook } from '@ionic-native/facebook';

import { GooglePage } from '../pages/homeGoogle/google';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ClientePage } from '../pages/clientes/clientes';

import { GraficaPage } from '../pages/graficas/grafica';
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
import {NorteComputerPage} from '../pages/NorteComputer/nortecomputer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { GraficasProvider } from '../providers/graficas/graficas';

@NgModule({
  declarations: [
    MyApp,
    HomePage,    
    ClientePage,
    ListarClientesPage,
    DatosClientesPage,
    ModificarClientesPage,
    CategoriasPage,
    DatosCategoriasPage,
    ListarCategoriasPage,
    ModificarCategoriasPage,
    ComponentesPage,
    DatosComponentesPage,
    ListarComponentesPage,
    ModificarComponentesPage,
    EmpleadoPage,
    DatosEmpleadosPage,
    ListarEmpleadosPage,
    ModificarEmpleadosPage,
    PedidosPage,
    DatosPedidosPage,
    ListarPedidosPage,
    ModificarPedidosPage,
    ProveedorPage,
    DatosProveedorPage,
    ListarProveedoresPage,
    ModificarProveedorPage,
    NorteComputerPage,
    GraficaPage,
    GooglePage,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,   
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,    
    ClientePage,
    ListarClientesPage,
    DatosClientesPage,
    ModificarClientesPage,
    CategoriasPage,
    DatosCategoriasPage,
    ListarCategoriasPage,
    ModificarCategoriasPage,
    ComponentesPage,
    DatosComponentesPage,
    ListarComponentesPage,
    ModificarComponentesPage,
    EmpleadoPage,
    DatosEmpleadosPage,
    ListarEmpleadosPage,
    ModificarEmpleadosPage,
    PedidosPage,
    DatosPedidosPage,
    ListarPedidosPage,
    ModificarPedidosPage,
    ProveedorPage,
    DatosProveedorPage,
    ListarProveedoresPage,
    ModificarProveedorPage,
    NorteComputerPage,
    GraficaPage,
    GooglePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    GraficasProvider,
    Facebook, 
    
  ]
})
export class AppModule {}
