import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers} from '@angular/http';
/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
   profile = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: Http
    ) {
      
  }
  ngOnInit(){
    let mno = '9700443084';
    this.http.get('http://localhost:3000/customer/myProfile/'+mno).subscribe(
      getData =>{
        var data = getData.json().response;
        this.profile.push(data);
        console.log("this is Data: "+JSON.stringify(this.profile[0].full_name))
      })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }
  update(item){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let obj = {
      "full_name": item.full_name,
      "email": item.email,
      "mobile_number": item.mobile_number,
      "full_address": item.full_address,
      "dob": item.dob,
      //"city": item.city,
      "gender": item.gender,
     "zip": item.zip
    }
    alert("This is parameter: "+JSON.stringify(obj))
    this.http.put('http://localhost:3000/customer/updateProfile/'+item.id,JSON.stringify(obj), options)
    .subscribe(data => {
      const data1 =  data.json()
      alert("This is Result: "+JSON.stringify(data1));
    },(err) =>{
      alert(err)
    })

  }
}
