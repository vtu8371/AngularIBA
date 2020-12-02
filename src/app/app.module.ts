import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { NomineeComponent } from './nominee/nominee.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TransferMoneyComponent } from './accountOperation/transfer-money/transfer-money.component';
import { WithdrawMoneyComponent } from './accountOperation/withdraw-money/withdraw-money.component';
import { DepositMoneyComponent } from './accountOperation/deposit-money/deposit-money.component';
import { FindByIdComponent } from './transactionOperation/find-by-id/find-by-id.component';
import {FormsModule} from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactComponent } from './contact/contact.component';
import { AddAccountComponent } from './accountOperation/add-account/add-account.component';
import { CloseAccountComponent } from './accountOperation/close-account/close-account.component';
import { ListAccountComponent } from './accountOperation/list-account/list-account.component';
import { FindByIdAccountComponent } from './accountOperation/find-by-id-account/find-by-id-account.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { AddCustomerComponent } from './customerOperation/add-customer/add-customer.component';
import { AdminCustomerComponent } from './admin-customer/admin-customer.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { AdminAdminComponent } from './admin-admin/admin-admin.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AddAdminComponent } from './adminOperation/add-admin/add-admin.component';
import { ViewAllAdminComponent } from './adminOperation/view-all-admin/view-all-admin.component';
import { ViewByIdAdminComponent } from './adminOperation/view-by-id-admin/view-by-id-admin.component';
import { DeleteAdminComponent } from './adminOperation/delete-admin/delete-admin.component';
import { EditAdminComponent } from './adminOperation/edit-admin/edit-admin.component';
import { ViewAllCustomerComponent } from './customerOperation/view-all-customer/view-all-customer.component';
import { ViewByIdCustomerComponent } from './customerOperation/view-by-id-customer/view-by-id-customer.component';
import { DeleteCustomerComponent } from './customerOperation/delete-customer/delete-customer.component';
import { EditCustomerComponent } from './customerOperation/edit-customer/edit-customer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AccountComponent,
    TransactionComponent,
    BeneficiaryComponent,
    NomineeComponent,
    MyProfileComponent,
    SignOutComponent,
    PageNotFoundComponent,
    TransferMoneyComponent,
    WithdrawMoneyComponent,
    DepositMoneyComponent,
    FindByIdComponent,
    SignUpComponent,
    SignInComponent,
    ContactComponent,
    AddAccountComponent,
    CloseAccountComponent,
    ListAccountComponent,
    FindByIdAccountComponent,
    CustomerComponent,
    AdminComponent,
    AddCustomerComponent,
    AdminCustomerComponent,
    AdminAccountComponent,
    AdminAdminComponent,
    AdminUserComponent,
    AddAdminComponent,
    ViewAllAdminComponent,
    ViewByIdAdminComponent,
    DeleteAdminComponent,
    EditAdminComponent,
    ViewAllCustomerComponent,
    ViewByIdCustomerComponent,
    DeleteCustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
