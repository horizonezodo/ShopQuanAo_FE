import { Routes } from '@angular/router';
import { PublicComponentComponent } from './components/PublicComponent/public-component/public-component.component';
import { CreateAccountComponent } from './components/CreateAccountComponent/create-account/create-account.component';
import { LoginComponent } from './components/CreateAccountComponent/create-account/login/login.component';
import { RegisterComponent } from './components/CreateAccountComponent/create-account/register/register.component';
import { ForgotComponent } from './components/CreateAccountComponent/create-account/forgot/forgot.component';
import { AdminComponent } from './components/AdminComponent/admin/admin.component';
import { DashBoardComponent } from './components/AdminComponent/admin/dash-board/dash-board.component';
import { ProductComponent } from './components/AdminComponent/admin/product/product.component';
import { CategoryComponent } from './components/AdminComponent/admin/category/category.component';
import { OrderComponent } from './components/AdminComponent/admin/order/order.component';
import { UserComponent } from './components/UserComponent/user/user.component';
import { HomeComponent } from './components/UserComponent/user/home/home.component';
import { OrderHistoryComponent } from './components/UserComponent/user/order-history/order-history.component';
import { UserInfoComponent } from './components/UserComponent/user/user-info/user-info.component';
import { WalletComponent } from './components/UserComponent/user/wallet/wallet.component';
import { NotFoundComponent } from './components/NotFound/not-found/not-found.component';
import { LayoutComponent } from './components/Layout/layout/layout.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
export const routes: Routes = [
 {path:'', component:LayoutComponent, 
    children:[
        {path: '', component: PublicComponentComponent,},

        {path: 'login', component: CreateAccountComponent,
            children: [
                {path: '', component: LoginComponent},
                {path:'register', component: RegisterComponent },
                {path: 'forgot', component: ForgotComponent}
            ]
        },
    
        {path: 'admin', component: AdminComponent,
            children: [
                {path: '', component: DashBoardComponent},
                {path: 'product', component: ProductComponent},
                {path: 'category', component: CategoryComponent},
                {path: 'log', component: LoginComponent},
                {path: 'order', component: OrderComponent}
            ]
        },
    
        {path: 'user', component: UserComponent, 
            children: [
                {path: '', component: HomeComponent},
                {path: 'order', component: OrderComponent},
                {path: 'orderhistory', component: OrderHistoryComponent},
                {path: 'userinfo', component: UserInfoComponent},
                {path: 'wallet', component: WalletComponent},
                {path: 'category', component: CategoryComponent}
            ]
        },
        
        {path: 'notfound', component: NotFoundComponent},
        {path: 'blog', component: BlogComponent},
        {path: 'about', component: AboutComponent},
        {path: 'contact', component: ContactComponent}
    
    ]
 }
];
