import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserJoinComponent } from './user/user-join/user-join.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { CommunityComponent } from './community/community.component';

const routes: Routes = [
  {
		path:"",
    redirectTo:'home',
    pathMatch:'full'
  },
  {
		path:"home",
		component:HomeComponent
  },
  {
		path:"events",
		component:EventsComponent
  },
  {
		path:"community",
		component:CommunityComponent
  },
  {
		path:"login",
		component:UserLoginComponent
  },
  {
		path:"join",
		component:UserJoinComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
