import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../guards/auth-guard.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        canActivate: [AuthGuard],
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'products',
        canActivate: [AuthGuard],
        loadChildren: () => import('../products/products.module').then( m => m.ProductsPageModule)
      },
      {
        path: 'cart',
        canActivate: [AuthGuard],
        loadChildren: () => import('../cart/cart.module').then( m => m.CartPageModule)
      },
      // {
      //   path: 'tab2',
      //   // canActivate: [AuthGuard],
      //   loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      // },
      // {
      //   path: 'tab3',
      //   loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      // },
      // {
      //   path: 'tab4',
      //   loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      // },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      },
      // {
      //   path: 'signup',
      //   loadChildren: () => import('../signup/signup.module').then( m => m.SignupPageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
