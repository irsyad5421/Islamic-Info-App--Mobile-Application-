import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'biodata',
    loadChildren: () => import('./biodata/biodata.module').then( m => m.BiodataPageModule)
  },
  {
    path: 'family',
    loadChildren: () => import('./family/family.module').then( m => m.FamilyPageModule)
  },
 
  {
    path: 'revelation',
    loadChildren: () => import('./revelation/revelation.module').then( m => m.RevelationPageModule)
  },
  {
    path: 'rev1',
    loadChildren: () => import('./rev1/rev1.module').then( m => m.Rev1PageModule)
  },
 
  {
    path: 'rev2',
    loadChildren: () => import('./rev2/rev2.module').then( m => m.Rev2PageModule)
  },
  {
    path: 'rev3',
    loadChildren: () => import('./rev3/rev3.module').then( m => m.Rev3PageModule)
  },
  {
    path: 'rev4',
    loadChildren: () => import('./rev4/rev4.module').then( m => m.Rev4PageModule)
  },
  
  {
    path: 'rev5',
    loadChildren: () => import('./rev5/rev5.module').then( m => m.Rev5PageModule)
  },
  {
    path: 'belief',
    loadChildren: () => import('./belief/belief.module').then( m => m.BeliefPageModule)
  },
  {
    path: 'bel1',
    loadChildren: () => import('./bel1/bel1.module').then( m => m.Bel1PageModule)
  },
  {
    path: 'bel2',
    loadChildren: () => import('./bel2/bel2.module').then( m => m.Bel2PageModule)
  },
  {
    path: 'bel3',
    loadChildren: () => import('./bel3/bel3.module').then( m => m.Bel3PageModule)
  },
  {
    path: 'bel4',
    loadChildren: () => import('./bel4/bel4.module').then( m => m.Bel4PageModule)
  },
  {
    path: 'knowledge',
    loadChildren: () => import('./knowledge/knowledge.module').then( m => m.KnowledgePageModule)
  },
  {
    path: 'know1',
    loadChildren: () => import('./know1/know1.module').then( m => m.Know1PageModule)
  },
  {
    path: 'know2',
    loadChildren: () => import('./know2/know2.module').then( m => m.Know2PageModule)
  },
  {
    path: 'know3',
    loadChildren: () => import('./know3/know3.module').then( m => m.Know3PageModule)
  },
  {
    path: 'know4',
    loadChildren: () => import('./know4/know4.module').then( m => m.Know4PageModule)
  },
  {
    path: 'ablution',
    loadChildren: () => import('./ablution/ablution.module').then( m => m.AblutionPageModule)
  },
  {
    path: 'abl1',
    loadChildren: () => import('./abl1/abl1.module').then( m => m.Abl1PageModule)
  },
  {
    path: 'abl2',
    loadChildren: () => import('./abl2/abl2.module').then( m => m.Abl2PageModule)
  },
  {
    path: 'abl3',
    loadChildren: () => import('./abl3/abl3.module').then( m => m.Abl3PageModule)
  },
  {
    path: 'abl4',
    loadChildren: () => import('./abl4/abl4.module').then( m => m.Abl4PageModule)
  },
  {
    path: 'bathing',
    loadChildren: () => import('./bathing/bathing.module').then( m => m.BathingPageModule)
  },
  {
    path: 'bath1',
    loadChildren: () => import('./bath1/bath1.module').then( m => m.Bath1PageModule)
  },
  {
    path: 'bath2',
    loadChildren: () => import('./bath2/bath2.module').then( m => m.Bath2PageModule)
  },
  {
    path: 'bath3',
    loadChildren: () => import('./bath3/bath3.module').then( m => m.Bath3PageModule)
  },
  {
    path: 'bath4',
    loadChildren: () => import('./bath4/bath4.module').then( m => m.Bath4PageModule)
  },
  {
    path: 'muslim',
    loadChildren: () => import('./muslim/muslim.module').then( m => m.MuslimPageModule)
  },
  {
    path: 'faith',
    loadChildren: () => import('./faith/faith.module').then( m => m.FaithPageModule)
  },
  {
    path: 'faith1',
    loadChildren: () => import('./faith1/faith1.module').then( m => m.Faith1PageModule)
  },
  {
    path: 'faith2',
    loadChildren: () => import('./faith2/faith2.module').then( m => m.Faith2PageModule)
  },
  {
    path: 'faith3',
    loadChildren: () => import('./faith3/faith3.module').then( m => m.Faith3PageModule)
  },
  {
    path: 'faith4',
    loadChildren: () => import('./faith4/faith4.module').then( m => m.Faith4PageModule)
  },
  {
    path: 'menstruation',
    loadChildren: () => import('./menstruation/menstruation.module').then( m => m.MenstruationPageModule)
  },
  {
    path: 'mosques',
    loadChildren: () => import('./mosques/mosques.module').then( m => m.MosquesPageModule)
  },
  {
    path: 'prayers',
    loadChildren: () => import('./prayers/prayers.module').then( m => m.PrayersPageModule)
  },
  {
    path: 'purification',
    loadChildren: () => import('./purification/purification.module').then( m => m.PurificationPageModule)
  },
  {
    path: 'menst1',
    loadChildren: () => import('./menst1/menst1.module').then( m => m.Menst1PageModule)
  },
  {
    path: 'menst2',
    loadChildren: () => import('./menst2/menst2.module').then( m => m.Menst2PageModule)
  },
  {
    path: 'menst3',
    loadChildren: () => import('./menst3/menst3.module').then( m => m.Menst3PageModule)
  },
  {
    path: 'menst4',
    loadChildren: () => import('./menst4/menst4.module').then( m => m.Menst4PageModule)
  },
  {
    path: 'mosq1',
    loadChildren: () => import('./mosq1/mosq1.module').then( m => m.Mosq1PageModule)
  },
  {
    path: 'mosq2',
    loadChildren: () => import('./mosq2/mosq2.module').then( m => m.Mosq2PageModule)
  },
  {
    path: 'mosq3',
    loadChildren: () => import('./mosq3/mosq3.module').then( m => m.Mosq3PageModule)
  },
  {
    path: 'mosq4',
    loadChildren: () => import('./mosq4/mosq4.module').then( m => m.Mosq4PageModule)
  },
  {
    path: 'pray1',
    loadChildren: () => import('./pray1/pray1.module').then( m => m.Pray1PageModule)
  },
  {
    path: 'pray2',
    loadChildren: () => import('./pray2/pray2.module').then( m => m.Pray2PageModule)
  },
  {
    path: 'pray3',
    loadChildren: () => import('./pray3/pray3.module').then( m => m.Pray3PageModule)
  },
  {
    path: 'pray4',
    loadChildren: () => import('./pray4/pray4.module').then( m => m.Pray4PageModule)
  },
  {
    path: 'puri1',
    loadChildren: () => import('./puri1/puri1.module').then( m => m.Puri1PageModule)
  },
  {
    path: 'puri2',
    loadChildren: () => import('./puri2/puri2.module').then( m => m.Puri2PageModule)
  },
  {
    path: 'puri3',
    loadChildren: () => import('./puri3/puri3.module').then( m => m.Puri3PageModule)
  },
  {
    path: 'puri4',
    loadChildren: () => import('./puri4/puri4.module').then( m => m.Puri4PageModule)
  },
  {
    path: 'tirmidhi',
    loadChildren: () => import('./tirmidhi/tirmidhi.module').then( m => m.TirmidhiPageModule)
  },
  {
    path: 'majah',
    loadChildren: () => import('./majah/majah.module').then( m => m.MajahPageModule)
  },
  {
    path: 'daud',
    loadChildren: () => import('./daud/daud.module').then( m => m.DaudPageModule)
  },
  {
    path: 'alsalat',
    loadChildren: () => import('./alsalat/alsalat.module').then( m => m.AlsalatPageModule)
  },
  {
    path: 'voluntary',
    loadChildren: () => import('./voluntary/voluntary.module').then( m => m.VoluntaryPageModule)
  },
  {
    path: 'pur',
    loadChildren: () => import('./pur/pur.module').then( m => m.PurPageModule)
  },
  {
    path: 'rain',
    loadChildren: () => import('./rain/rain.module').then( m => m.RainPageModule)
  },
  {
    path: 'zakat',
    loadChildren: () => import('./zakat/zakat.module').then( m => m.ZakatPageModule)
  },
  {
    path: 'pr1',
    loadChildren: () => import('./pr1/pr1.module').then( m => m.Pr1PageModule)
  },
  {
    path: 'pr2',
    loadChildren: () => import('./pr2/pr2.module').then( m => m.Pr2PageModule)
  },
  {
    path: 'pr3',
    loadChildren: () => import('./pr3/pr3.module').then( m => m.Pr3PageModule)
  },
  {
    path: 'pr4',
    loadChildren: () => import('./pr4/pr4.module').then( m => m.Pr4PageModule)
  },
  {
    path: 'vol1',
    loadChildren: () => import('./vol1/vol1.module').then( m => m.Vol1PageModule)
  },
  {
    path: 'vol2',
    loadChildren: () => import('./vol2/vol2.module').then( m => m.Vol2PageModule)
  },
  {
    path: 'vol3',
    loadChildren: () => import('./vol3/vol3.module').then( m => m.Vol3PageModule)
  },
  {
    path: 'vol4',
    loadChildren: () => import('./vol4/vol4.module').then( m => m.Vol4PageModule)
  },
  {
    path: 'pur1',
    loadChildren: () => import('./pur1/pur1.module').then( m => m.Pur1PageModule)
  },
  {
    path: 'pur2',
    loadChildren: () => import('./pur2/pur2.module').then( m => m.Pur2PageModule)
  },
  {
    path: 'pur3',
    loadChildren: () => import('./pur3/pur3.module').then( m => m.Pur3PageModule)
  },
  {
    path: 'pur4',
    loadChildren: () => import('./pur4/pur4.module').then( m => m.Pur4PageModule)
  },
  {
    path: 'rain1',
    loadChildren: () => import('./rain1/rain1.module').then( m => m.Rain1PageModule)
  },
  {
    path: 'rain2',
    loadChildren: () => import('./rain2/rain2.module').then( m => m.Rain2PageModule)
  },
  {
    path: 'rain3',
    loadChildren: () => import('./rain3/rain3.module').then( m => m.Rain3PageModule)
  },
  {
    path: 'rain4',
    loadChildren: () => import('./rain4/rain4.module').then( m => m.Rain4PageModule)
  },
  {
    path: 'zak1',
    loadChildren: () => import('./zak1/zak1.module').then( m => m.Zak1PageModule)
  },
  {
    path: 'zak2',
    loadChildren: () => import('./zak2/zak2.module').then( m => m.Zak2PageModule)
  },
  {
    path: 'zak3',
    loadChildren: () => import('./zak3/zak3.module').then( m => m.Zak3PageModule)
  },
  {
    path: 'zak4',
    loadChildren: () => import('./zak4/zak4.module').then( m => m.Zak4PageModule)
  },
  {
    path: 'lesson',
    loadChildren: () => import('./lesson/lesson.module').then( m => m.LessonPageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./food/food.module').then( m => m.FoodPageModule)
  },
  {
    path: 'drink',
    loadChildren: () => import('./drink/drink.module').then( m => m.DrinkPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./login-admin/login-admin.module').then( m => m.LoginAdminPageModule)
  },
  {
    path: 'question',
    loadChildren: () => import('./question/question.module').then( m => m.QuestionPageModule)
  },
  {
    path: 'lifehadith',
    loadChildren: () => import('./lifehadith/lifehadith.module').then( m => m.LifehadithPageModule)
  },
  {
    path: 'manner',
    loadChildren: () => import('./manner/manner.module').then( m => m.MannerPageModule)
  },
  {
    path: 'fast',
    loadChildren: () => import('./fast/fast.module').then( m => m.FastPageModule)
  },
  {
    path: 'witr',
    loadChildren: () => import('./witr/witr.module').then( m => m.WitrPageModule)
  },
  {
    path: 'purif',
    loadChildren: () => import('./purif/purif.module').then( m => m.PurifPageModule)
  },
  {
    path: 'salat',
    loadChildren: () => import('./salat/salat.module').then( m => m.SalatPageModule)
  },
  {
    path: 'friday',
    loadChildren: () => import('./friday/friday.module').then( m => m.FridayPageModule)
  },
  {
    path: 'eids',
    loadChildren: () => import('./eids/eids.module').then( m => m.EidsPageModule)
  },
  {
    path: 'purifi',
    loadChildren: () => import('./purifi/purifi.module').then( m => m.PurifiPageModule)
  },
  {
    path: 'adhan',
    loadChildren: () => import('./adhan/adhan.module').then( m => m.AdhanPageModule)
  },
  {
    path: 'pra',
    loadChildren: () => import('./pra/pra.module').then( m => m.PraPageModule)
  },
  {
    path: 'sun',
    loadChildren: () => import('./sun/sun.module').then( m => m.SunPageModule)
  },
  {
    path: 'mosq',
    loadChildren: () => import('./mosq/mosq.module').then( m => m.MosqPageModule)
  },
  {
    path: 'source',
    loadChildren: () => import('./source/source.module').then( m => m.SourcePageModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./forum/forum.module').then( m => m.ForumPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
