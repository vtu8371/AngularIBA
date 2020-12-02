import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AddAccountComponent } from './accountOperation/add-account/add-account.component';
import { CloseAccountComponent } from './accountOperation/close-account/close-account.component';
import { DepositMoneyComponent } from './accountOperation/deposit-money/deposit-money.component';
import { FindByIdAccountComponent } from './accountOperation/find-by-id-account/find-by-id-account.component';
import { ListAccountComponent } from './accountOperation/list-account/list-account.component';
import { TransferMoneyComponent } from './accountOperation/transfer-money/transfer-money.component';
import { WithdrawMoneyComponent } from './accountOperation/withdraw-money/withdraw-money.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { AdminAdminComponent } from './admin-admin/admin-admin.component';
import { AdminCustomerComponent } from './admin-customer/admin-customer.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminComponent } from './admin/admin.component';
import { AddAdminComponent } from './adminOperation/add-admin/add-admin.component';
import { DeleteAdminComponent } from './adminOperation/delete-admin/delete-admin.component';
import { EditAdminComponent } from './adminOperation/edit-admin/edit-admin.component';
import { ViewAllAdminComponent } from './adminOperation/view-all-admin/view-all-admin.component';
import { ViewByIdAdminComponent } from './adminOperation/view-by-id-admin/view-by-id-admin.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './customerOperation/add-customer/add-customer.component';
import { DeleteCustomerComponent } from './customerOperation/delete-customer/delete-customer.component';
import { EditCustomerComponent } from './customerOperation/edit-customer/edit-customer.component';
import { ViewAllCustomerComponent } from './customerOperation/view-all-customer/view-all-customer.component';
import { ViewByIdCustomerComponent } from './customerOperation/view-by-id-customer/view-by-id-customer.component';
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
        path:"adminAdmin",
        component:AdminAdminComponent
      },
      
      {
        path:"adminUser",
        component:AdminUserComponent
      },
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
    path:"addAccount",
    component:AddAccountComponent
  },
  {
    path:"viewAllAccounts",
    component:ListAccountComponent
  },
  {
    path:"viewByIdAccount",
    component:FindByIdAccountComponent
  },
  {
    path:"deleteAccount",
    component:CloseAccountComponent
  },
  {
    path:"addAdmin",
    component:AddAdminComponent
  },
  {
    path:"viewAllAdmin",
    component:ViewAllAdminComponent
  },
  {
    path:"viewByIdAdmin",
    component:ViewByIdAdminComponent
  },
  {
    path:"deleteAdmin",
    component:DeleteAdminComponent
  },
  {
    path:"editAdmin",
    component:EditAdminComponent
  },
  {
    path:"addCustomer",component:AddCustomerComponent
  },
  {
    path:"viewAllCustomer",component:ViewAllCustomerComponent
  },
  {
    path:"viewByIdCustomer",component:ViewByIdCustomerComponent
  },
  {
    path:"deleteCustomer",component:DeleteCustomerComponent
  },
  {
    path:"editCustomer",component:EditCustomerComponent
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
