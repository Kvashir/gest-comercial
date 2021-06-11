import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';
import { CustomerDataComponent } from './customer/customer-data/customer-data.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { StoringListComponent } from './storing/storing-list/storing-list.component';
import { SupplierDataComponent } from './supplier/supplier-data/supplier-data.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'customer',component:CustomerListComponent},
  {path:'customer/:id', component: CustomerDataComponent},
  {path:'supplier',component:SupplierListComponent},
  {path:'supplier/:id',component:SupplierDataComponent},
  {path:'storing',component:StoringListComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
