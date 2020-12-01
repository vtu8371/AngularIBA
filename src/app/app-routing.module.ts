import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { DepositMoneyComponent } from './accountOperation/deposit-money/deposit-money.component';
import { TransferMoneyComponent } from './accountOperation/transfer-money/transfer-money.component';
import { WithdrawMoneyComponent } from './accountOperation/withdraw-money/withdraw-money.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { AdminCustomerComponent } from './admin-customer/admin-customer.component';
import { AdminComponent } from './admin/admin.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './customerOperation/add-customer/add-customer.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NomineeComponent } from './nominee/nominee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TransactionComponent } from './transaction/transaction.component';
import { FindByIdComponent } from './transactionOperation/find-by-id/find-by-id.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"signIn",component:SignInComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"signUp",
    component:SignUpComponent
  },
  {
    path:"admin",
    component:AdminComponent,
    children:[
     {
      path:"adminCustomer",
      component:AdminCustomerComponent
     },
     {
       path:"adminAccount",
       component:AdminAccountComponent
     },
     {
       path:"signOut",
       component:SignOutComponent
     }
   ]
  },
  {
    path:"customer",
    component:CustomerComponent,
    children:[
      {
          path:"home",component:HomeComponent
      },
      {
        path:"account",component:AccountComponent,
        children:[
          {
            path:"transferMoney",
            component:TransferMoneyComponent
          },
          {
            path:"withdrawMoney",
            component:WithdrawMoneyComponent
          },
          {
            path:"depositMoney",
            component:DepositMoneyComponent
          }
        ]
      },
       {
         path:"beneficiary",
         component:BeneficiaryComponent
       },
       {
        path:"transaction",
        component:TransactionComponent,
        children:[
          {
            path:"findById",
            component:FindByIdComponent
          }
        ]
      },
      {
      path:"nominee",component:NomineeComponent
      },
      {
        path:"myProfile",component:MyProfileComponent
       },
       {
         path:"signOut",component:SignOutComponent
       }
    ]
  },
  {
    path:"transaction",
    component:TransactionComponent,
    children:[
      {
        path:"findById",
        component:FindByIdComponent
      }
    ]
  },
  {
    path:"beneficiary",
    component:BeneficiaryComponent
  },
  {
    path:"nominee",
    component:NomineeComponent
  },
  {
    path:"myProfile",
    component:MyProfileComponent
  },
  {
    path:"signOut",
    component:SignOutComponent
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
