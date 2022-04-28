import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './main/home-page/matches/card/card.component';
import { HomePageComponent } from './main/home-page/home-page.component';
import { WelcomeSectionComponent } from './main/home-page/welcome-section/welcome-section.component';
import { WinnersSectionComponent } from './main/home-page/winners-section/winners-section.component';
import { NewsComponent } from './main/news/news.component';
import { MatchesComponent } from './main/home-page/matches/matches.component';
import { NewsCardComponent } from './main/news/news-card/news-card.component';
import { AboutComponent } from './main/home-page/about/about.component';
import { MerchandiseComponent } from './main/merchandise/merchandise.component';
import { LoginComponent } from './header/login/login.component';
import { LeaderboardSectionComponent } from './main/home-page/leaderboard-section/leaderboard-section.component';
import { EventsPageComponent } from './main/events-page/events-page.component';
import { EventsCardComponent } from './main/events-page/events-card/events-card.component';
import { ReactiveFormsModule } from '@angular/forms'
import { DriverStatsComponent } from './main/driver-stats/driver-stats.component';
import { CircuitsPageComponent } from './main/circuits-page/circuits-page.component';
import { CircuitDetailsComponent } from './main/circuits-page/circuit-details/circuit-details.component';
import { TeamsPageComponent } from './main/teams-page/teams-page.component';
import { TeamDetailsComponent } from './main/teams-page/team-details/team-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { DriverCardComponent } from './main/driver-stats/driver-card/driver-card.component';
import { DcardComponent } from './main/driver-stats/driver-card/dcard/dcard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './header/signup/signup.component';
import { ProductCardComponent } from './main/merchandise/product-card/product-card.component';
import { UserDetailService } from "./services/user-detail.service";
import { UserProfileComponent } from './main/user-profile/user-profile.component';
import { MyprofileComponent } from './main/user-profile/myprofile/myprofile.component';
import { MyordersComponent } from './main/user-profile/myorders/myorders.component';
import { MybookingsComponent } from './main/user-profile/mybookings/mybookings.component';
import { MyrewardsComponent } from './main/user-profile/myrewards/myrewards.component';
import { EventDetailsComponent } from './main/events-page/events-card/event-details/event-details.component';
import { SeasonsPageComponent } from './main/seasons-page/seasons-page.component';
import { SeasonDeatilsComponent } from './main/seasons-page/season-deatils/season-deatils.component';
import { F1HistoryPageComponent } from './main/f1-history-page/f1-history-page.component';
import { InfoComponent } from './main/home-page/info/info.component';
import { ProjectTeamComponent } from './main/home-page/project-team/project-team.component';
import { CeiboShare } from 'ng2-social-share'; 


const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'news', component: NewsComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'merchandise', component: MerchandiseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'upcoming-events', component: EventsPageComponent },
  { path: 'circuits', component: CircuitsPageComponent },
  { path: 'circuits/:circuitId', component: CircuitDetailsComponent },
  { path: 'teams', component: TeamsPageComponent },
  { path: 'teams/:teamId', component: TeamDetailsComponent },
  { path: 'Drivers', component: DriverStatsComponent },
  { path: 'news/details/:newsId', component: NewsCardComponent },
  { path: 'Drivers/driver_detail/:driver', component: DcardComponent },
  {
    path: 'user-profile', component: UserProfileComponent,
    children: [{ path: 'mybookings', component: MybookingsComponent },
      { path: 'myorders', component: MyordersComponent },
      { path: 'myprofile', component: MyprofileComponent },
      { path: 'myrewards', component: MyrewardsComponent }]
  },
  { path: 'upcoming-events/event/:eventId', component: EventDetailsComponent },
  { path: 'seasons-history', component: SeasonsPageComponent },
  { path: 'seasons-history/season-details/:season', component: SeasonDeatilsComponent },
  { path: 'f1-history', component: F1HistoryPageComponent },
  { path: '**', redirectTo: 'not-found' },
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CardComponent,
    HomePageComponent,
    WelcomeSectionComponent,
    WinnersSectionComponent,
    NewsComponent,
    MatchesComponent,
    NewsCardComponent,
    AboutComponent,
    MerchandiseComponent,
    LoginComponent,
    LeaderboardSectionComponent,
    EventsPageComponent,
    EventsCardComponent,
    DriverStatsComponent,
    CircuitsPageComponent,
    CircuitDetailsComponent,
    TeamsPageComponent,
    TeamDetailsComponent,
    DriverCardComponent,
    DcardComponent,
    SignupComponent,
    ProductCardComponent,
    UserProfileComponent,
    MyprofileComponent,
    MyordersComponent,
    MybookingsComponent,
    MyrewardsComponent,
    EventDetailsComponent,
    SeasonsPageComponent,
    SeasonDeatilsComponent,
    F1HistoryPageComponent,
    InfoComponent,
    ProjectTeamComponent,
    CeiboShare
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    HttpClientModule, NgxPaginationModule,
    ReactiveFormsModule, BrowserAnimationsModule,
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [UserDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
