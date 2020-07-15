import { UserDetails } from './user-details';
import { UserEducation } from './user-education';
import { UserEmployment } from './user-employment';

export class UserInfo {
    user_name : String;
    user_password : String;
    active : String;
    // user_details : UserDetails;
    // user_education : UserEducation;
     user_details : UserDetails = new UserDetails();
     user_education : UserEducation = new UserEducation();
    user_employment : UserEmployment[] = [];
}
