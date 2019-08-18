import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'first', loadChildren: './first/first.module#FirstPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
  { path: 'second', loadChildren: './second/second.module#SecondPageModule' },
  { path: 'third', loadChildren: './third/third.module#ThirdPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'show', loadChildren: './show/show.module#ShowPageModule' },
  { path: 'administrador', loadChildren: './administrador/administrador.module#AdministradorPageModule' },
  { path: 'visitante', loadChildren: './visitante/visitante.module#VisitantePageModule' },
  { path: 'prog-ver', loadChildren: './prog-ver/prog-ver.module#ProgVerPageModule' },
  { path: 'resultados', loadChildren: './resultados/resultados.module#ResultadosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
