import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { InscriptionComponent } from './auth/inscription/inscription.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { CompareComponent } from './compare/compare.component';
import { MenubarModule } from 'primeng/menubar';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { ChartModule } from 'primeng/chart';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    HistoryComponent,
    CompareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ConfirmPopupModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    BrowserAnimationsModule,
    FileUploadModule,
    HttpClientModule,
    AccordionModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    DividerModule,
    GalleriaModule,
    ImageModule,
    ChartModule,
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
