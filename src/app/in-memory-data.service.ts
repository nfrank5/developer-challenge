import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {f
  createDb() {
const contacts = [{"id":1,"picture":"https://robohash.org/veldolora.png?size=50x50&set=set1","name":"Blanch","lastname":"Surmeyer","nickname":"Schneider-Glover","phonenumber":"335-420-7817","email":"bsurmeyer0@imgur.com","company":"Gigazoom","jobtitle":"Structural Analysis Engineer","birthday":"1/26/2019","address":"629 Forest Park","notes":"","checkbox":false,"favorite":true},
    {"id":2,"picture":"https://robohash.org/iustodignissimosa.png?size=50x50&set=set1","name":"Bradney","lastname":"Rainsdon","nickname":"Spinka-O'Connell","phonenumber":"675-197-5358","email":"brainsdon1@sphinn.com","company":"Yakidoo","jobtitle":"Associate Professor","birthday":"6/10/2020","address":"74909 Bowman Alley","notes":"","checkbox":false,"favorite":false},
    {"id":3,"picture":"https://robohash.org/placeatdignissimosmodi.png?size=50x50&set=set1","name":"Gwyneth","lastname":"Archdeckne","nickname":"Buckridge Group","phonenumber":"535-552-7355","email":"garchdeckne2@posterous.com","company":"Twitternation","jobtitle":"Computer Systems Analyst II","birthday":"5/4/2019","address":"65 Milwaukee Terrace","notes":"","checkbox":false,"favorite":false},
    {"id":4,"picture":"https://robohash.org/indoloreset.png?size=50x50&set=set1","name":"Montague","lastname":"Jellis","nickname":"Dare, Hagenes and Lindgren","phonenumber":"547-898-2766","email":"mjellis3@bbb.org","company":"Fadeo","jobtitle":"Assistant Professor","birthday":"1/12/2020","address":"81655 Artisan Way","notes":"","checkbox":false,"favorite":false},
    {"id":5,"picture":"https://robohash.org/auteligendiqui.png?size=50x50&set=set1","name":"Monique","lastname":"Rubke","nickname":"Willms-Kulas","phonenumber":"309-910-9624","email":"mrubke4@jigsy.com","company":"Cogibox","jobtitle":"Registered Nurse","birthday":"12/26/2019","address":"44195 Ludington Circle","notes":"","checkbox":false,"favorite":true},
    {"id":6,"picture":"https://robohash.org/nobistemporarerum.png?size=50x50&set=set1","name":"Blair","lastname":"Toderi","nickname":"Schaefer LLC","phonenumber":"770-835-9523","email":"btoderi5@rediff.com","company":"Ntag","jobtitle":"Director of Sales","birthday":"6/10/2020","address":"617 Bartelt Alley","notes":"","checkbox":false,"favorite":true},
    {"id":7,"picture":"https://robohash.org/iustoenimmolestias.png?size=50x50&set=set1","name":"Roberto","lastname":"Griffithe","nickname":"Kling LLC","phonenumber":"794-206-7992","email":"rgriffithe6@whitehouse.gov","company":"Mita","jobtitle":"Paralegal","birthday":"11/28/2020","address":"050 Dawn Park","notes":"","checkbox":false,"favorite":false},
    {"id":8,"picture":"https://robohash.org/doloresaat.png?size=50x50&set=set1","name":"Ernest","lastname":"Iglesiaz","nickname":"Wehner, Kirlin and Lindgren","phonenumber":"312-861-0515","email":"eiglesiaz7@com.com","company":"Jayo","jobtitle":"Project Manager","birthday":"1/22/2020","address":"9 Hagan Lane","notes":"","checkbox":false,"favorite":false},
    {"id":9,"picture":"https://robohash.org/uteoset.png?size=50x50&set=set1","name":"Antons","lastname":"Marnes","nickname":"Turcotte-Collins","phonenumber":"922-960-0113","email":"amarnes8@soundcloud.com","company":"Mybuzz","jobtitle":"Operator","birthday":"6/28/2019","address":"33 Butternut Terrace","notes":"","checkbox":false,"favorite":false},
    {"id":10,"picture":"https://robohash.org/exiustorepudiandae.png?size=50x50&set=set1","name":"Charlena","lastname":"Varfolomeev","nickname":"Hermiston-Cormier","phonenumber":"182-977-9307","email":"cvarfolomeev9@dell.com","company":"Voonder","jobtitle":"Health Coach II","birthday":"11/22/2019","address":"11 David Place","notes":"","checkbox":false,"favorite":false},
    {"id":11,"picture":"https://robohash.org/sitrationeoccaecati.png?size=50x50&set=set1","name":"Artur","lastname":"MacInnes","nickname":"Kerluke, Brown and Rutherford","phonenumber":"749-903-8453","email":"amacinnesa@a8.net","company":"Skidoo","jobtitle":"Help Desk Technician","birthday":"2/29/2020","address":"0076 Ridgeview Way","notes":"","checkbox":false,"favorite":false},
    {"id":12,"picture":"https://robohash.org/blanditiisquodolorem.png?size=50x50&set=set1","name":"Antonella","lastname":"Ridsdell","nickname":"Jacobs and Sons","phonenumber":"435-590-5705","email":"aridsdellb@usnews.com","company":"Eayo","jobtitle":"Data Coordiator","birthday":"2/7/2020","address":"4161 Union Court","notes":"","checkbox":false,"favorite":false},
    {"id":13,"picture":"https://robohash.org/rerumeosaut.png?size=50x50&set=set1","name":"Mercy","lastname":"Iles","nickname":"Marvin, Prosacco and Dietrich","phonenumber":"646-119-7570","email":"milesc@ftc.gov","company":"Mudo","jobtitle":"Accountant IV","birthday":"4/23/2019","address":"940 Mallory Trail","notes":"","checkbox":false,"favorite":false},
    {"id":14,"picture":"https://robohash.org/suntdoloremmolestiae.png?size=50x50&set=set1","name":"Aggi","lastname":"Woodson","nickname":"Wolf Group","phonenumber":"325-532-8580","email":"awoodsond@csmonitor.com","company":"Meedoo","jobtitle":"Accountant IV","birthday":"3/31/2019","address":"8 Sheridan Pass","notes":"","checkbox":false,"favorite":false},
    {"id":15,"picture":"https://robohash.org/pariaturautid.png?size=50x50&set=set1","name":"Roscoe","lastname":"Claus","nickname":"Wilkinson, Dicki and Sipes","phonenumber":"484-582-6566","email":"rclause@google.cn","company":"Skajo","jobtitle":"Account Executive","birthday":"3/20/2020","address":"89 Springs Road","notes":"","checkbox":false,"favorite":false},
    {"id":16,"picture":"https://robohash.org/velitsimiliqueest.png?size=50x50&set=set1","name":"Lauritz","lastname":"Matelyunas","nickname":"Kautzer-Ernser","phonenumber":"585-474-3597","email":"lmatelyunasf@networkadvertising.org","company":"Trilia","jobtitle":"Information Systems Manager","birthday":"2/2/2020","address":"2 Bobwhite Lane","notes":"","checkbox":false,"favorite":false},
    {"id":17,"picture":"https://robohash.org/quivelitexpedita.png?size=50x50&set=set1","name":"Carling","lastname":"Gerber","nickname":"Rau-McLaughlin","phonenumber":"554-498-1926","email":"cgerberg@wordpress.com","company":"Oyope","jobtitle":"Senior Financial Analyst","birthday":"1/29/2020","address":"02203 Fairfield Plaza","notes":"","checkbox":false,"favorite":false},
    {"id":18,"picture":"https://robohash.org/assumendaquidemenim.png?size=50x50&set=set1","name":"Lambert","lastname":"Ianiello","nickname":"Hansen, Padberg and Parisian","phonenumber":"418-705-7361","email":"lianielloh@paypal.com","company":"Linkbridge","jobtitle":"Project Manager","birthday":"9/25/2019","address":"019 Myrtle Place","notes":"","checkbox":false,"favorite":false},
    {"id":19,"picture":"https://robohash.org/eosvelitnemo.png?size=50x50&set=set1","name":"Bibby","lastname":"Luis","nickname":"Considine Group","phonenumber":"947-746-9819","email":"bluisi@nasa.gov","company":"Eare","jobtitle":"Accounting Assistant II","birthday":"8/17/2019","address":"18347 Sutherland Avenue","notes":"","checkbox":false,"favorite":false},
    {"id":20,"picture":"https://robohash.org/officiissapientefuga.png?size=50x50&set=set1","name":"Elton","lastname":"McAleese","nickname":"Schaden-Thiel","phonenumber":"270-100-1742","email":"emcaleesej@google.com.hk","company":"Innotype","jobtitle":"Accountant III","birthday":"7/2/2020","address":"9921 David Circle","notes":"","checkbox":false,"favorite":false}
    ];
   
    return {contacts};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(contacts: Contact[]): number {
    return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 11;
  }
}